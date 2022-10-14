import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import classes from './userDetails.module.css';

const url =
  'https://order-online-a8c95-default-rtdb.firebaseio.com/orders.json';

const CustomerOrder = () => {
  const [customerDetail, setCustomerDetail] = useState([]);

  const getCustomerDetail = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      setCustomerDetail(data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getCustomerDetail();
  }, []);

  const info = [];
  const getUsers = () => {
    for (const key in customerDetail) {
      const userData = customerDetail[key].user;
      info.push({
        id: key,
        username: userData.username,
        birthday: userData.birthday,
        email: userData.email,
      });
    }
  };

  getUsers();

  const usersInfo = info.map((user) => (
    <li className={classes.userList} key={user.id}>
      <h3>Name: {user.username}</h3>
      <p>Email: {user.email}</p>
      <p>Birthday: {user.birthday}</p>
    </li>
  ));

  return <div className={classes.users}>{usersInfo}</div>;
};

export default CustomerOrder;

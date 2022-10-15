import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import classes from './userDetails.module.css';

const url =
  'https://order-online-a8c95-default-rtdb.firebaseio.com/orders.json';

const CustomerOrder = () => {
  // state for customer detail including their orders
  const [customerDetail, setCustomerDetail] = useState([]);

  // getting user detail and order from the firebase API
  const getCustomerDetail = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      setCustomerDetail(data);
    } catch (error) {
      return error.message;
    }
  };

  // useEffect to fetch data
  useEffect(() => {
    getCustomerDetail();
  }, []);

  const customerInfo = [];
  const getUsers = () => {
    for (const key in customerDetail) {
      const userData = customerDetail[key].user;
      const orderedData = customerDetail[key].orderedItems;
      const totalOrdered = customerDetail[key].totalAmount;
      const total = totalOrdered ? totalOrdered.toFixed(2) : null;

      customerInfo.push({
        id: key,
        username: userData.username,
        birthday: userData.birthday,
        email: userData.email,
        orders: orderedData,
        totalAmount: total,
      });
    }
  };

  // calling function to get user info
  getUsers();

  // looping through cutomer info for user interface
  const usersInfo = customerInfo.map((user) => (
    <li className={classes.userList} key={user.id}>
      <div className={classes.userInfo}>
        <h3>Name: {user.username}</h3>
        <p>Email: {user.email}</p>
        <p>{user.birthday ? `Birthday: ${user.birthday}` : ''}</p>
      </div>
      <div className={classes.orderInfo}>
        {user.orders.map((order) => (
          <p key={order.id}>{`${order.name} : ${order.qty}`}</p>
        ))}
        <strong>Total Amount: ${user.totalAmount}</strong>
      </div>
    </li>
  ));

  return <div className={classes.users}>{usersInfo}</div>;
};

export default CustomerOrder;

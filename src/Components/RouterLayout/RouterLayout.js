import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Header from '../Layout/Header';
import MealsSummary from '../Meals/MealsSummary';

const RouterLayout = ({ hideModal, handleModalIsShown, modalIsShown }) => {
  return (
    <>
      {!modalIsShown ? '' : <Cart hideModal={hideModal} />}
      <Header showModal={handleModalIsShown} />
      <MealsSummary />
      <Outlet />
    </>
  );
};

export default RouterLayout;

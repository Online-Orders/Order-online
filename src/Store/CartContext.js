import React from 'react';

// Created Context so that data is available through the apps
// addItem and removeItem function is just the pointer
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  emptyCart: () => {},
});

export default CartContext;

// Created Context so that data is available through the apps
// addItem and removeItem function is just the pointer
const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;

import CartContext from './CartContext';

// Cart Provider Component that comes from the context enables consuming components to subscribe to the state/context changes
const CartProvider = (props) => {
  const cartContext = {
    items: [],
    total: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };
  return (
    //   value props passed to all the child components
    // all the consumer component that is child of the provider will re-render when the props value will change

    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

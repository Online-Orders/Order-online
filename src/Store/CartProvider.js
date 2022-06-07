import { useReducer } from 'react';
import CartContext from './CartContext';

// initital state of the cart that is passed to useReducer current state
const initialState = {
  items: [],
  totalAmount: 0,
};

// reducer function to manage the state of the cart.
// accepts state and action, returns the current state
const cartReducer = (state, action) => {
  return {
    initialState,
  };
};

// Cart Provider Component that comes from the context enables consuming components to subscribe to the state/context changes
const CartProvider = (props) => {
  // useReducer to manage the state
  // takes two argument reducer function and initial state
  // returns current state and dispatch function
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  // adds new item to the cart
  const addItemToCartHandler = (item) => {};

  //removes item from the cart
  const removeCartItemHandler = (id) => {};

  // updating value of the provider with the current state
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeCartItemHandler,
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

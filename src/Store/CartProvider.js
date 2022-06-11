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
  // updating the state of cart when item is added to the cart
  // should update items and total Amount in the cart
  if (action.type === 'ADD') {
    // total amount when new item is added to the cart
    // add existing total amount to the new item added to the cart
    const newTotalAmount =
      state.totalAmount + action.item.qty * action.item.price;

    // find if new item added to the cart already exists in the cart
    // and locate the index of the existing item by comparing item.id from items array to the id of new item added to the cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // get existing item with the help of index
    const existingItem = state.items[existingItemIndex];

    // creating global variables so that it can be available and be updated inside the block.
    var updatedItems;

    // check if item alreadt exist in the cart
    if (existingItem) {
      // if so update the quantity of the existing item with the new item quantity
      // object destructuring so that the only quantity will be updated without changing rest of the item value like price, id etc
      const updatedItem = {
        ...existingItem,
        qty: existingItem.qty + action.item.qty,
      };
      // updatedItems is updated with existing items in the cart
      updatedItems = [...state.items];
      // and only the index of the item which already exist in the cart is updated with the updatedItem
      updatedItems[existingItemIndex] = updatedItem;
      // if there is no exisiting item in the cart and the added item is completeley new,
      // just update the cart
      // concat is used insted of push, it creates new array without touching or changing the old items array.
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // update the state with new updated items and newTotalAmount
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

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
  // dispatch action type "ADD" with "item" value
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item });
  };

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
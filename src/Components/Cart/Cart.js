import { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import useHttp from '../../Hooks/use-http';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  // state to manage, if order button is clicked
  const [orderButtonIsClicked, setOrderButtonIsClicked] = useState(false);
  const ctx = useContext(CartContext);
  const { items, totalAmount } = ctx;

  // Will change to true when order button is clicked. This function is passed to order button.
  const showForm = () => {
    setOrderButtonIsClicked(true);
  };

  // Dummy data used to show cart items

  // const addedToCart = [
  //   {
  //     id: '1',
  //     name: 'sushi',
  //     price: 22.99,
  //     qtyAdded: 2,
  //   },
  //   {
  //     id: '2',
  //     name: 'Schnitzel',
  //     price: 16.5,
  //     qtyAdded: 5,
  //   },
  // ];

  // Updates the item quantity added from the cart. It updates the quantity by one.
  const addItemToCart = (item) => {
    const updatedItem = { ...item, qty: 1 };
    ctx.addItem(updatedItem);
  };

  // each items added to cart are looped and passed to the CartItem Component, which is then remdered in the Cart.
  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          qtyAdded={item.qty}
          addItemToCart={() => addItemToCart(item)}
        />
      ))}
    </ul>
  );

  // helper to convert the total amount to fixed two decimal
  const total = `$${totalAmount.toFixed(2)}`;

  // checking if any item is added to the cart. This will return true or false
  const cartHasItem = items.length > 0;

  // check if order button is clicked helper

  /* using ternary opertor to check if order button is clicked, and if it true, show the checkout form and hide the order and cancel button. */

  const checkOrderButtonIsClicked = orderButtonIsClicked ? (
    // div is applied here so that it only applies to the checkout form and not to the empty string.
    // otherwise div will be applied to the empty string and will be visible even when the order button is not clicked, since there is some padding applied to the div.
    <div className={classes.containerTwo}>
      <CheckoutForm hideModal={props.hideModal} />
    </div>
  ) : (
    ''
  );

  // helper function to show "order" and "button" when order button is not clicked and the state orderButtonIsClicked is false
  const orderAndCloseButtonAreVisible = !orderButtonIsClicked && (
    <div className={classes.actions}>
      {/* ternary operator to check if cartHasItem is true or false and only show Order button if it is true */}
      {cartHasItem ? <button onClick={showForm}>Order</button> : ''}
      {/* closes the modal */}
      <button onClick={props.hideModal}>Close</button>
    </div>
  );

  // helper class to style, when checkout form is shown after order button is clicked
  const helperClasses = orderButtonIsClicked ? `${classes.container}` : '';

  return (
    <Modal onClose={props.hideModal}>
      <div className={helperClasses}>
        <div className={classes.containerOne}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
          </div>
          {/* Order and close button is only visible until Order button is clicked. Once Order button is clicked they disappear and checkout form is visible */}
          {orderAndCloseButtonAreVisible}
        </div>
        {/* div on this is applied to the helper function 'checkOrderButtonIsClicked' above */}
        {checkOrderButtonIsClicked}
      </div>
    </Modal>
  );
};

export default Cart;

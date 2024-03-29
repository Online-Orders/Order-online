import { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import axios from 'axios';

const Cart = (props) => {
  // state when the form is in the process of submitting
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);

  // state when the form is submitted.
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  // when there is error after the form is submitted
  const [error, setError] = useState('');

  // state to manage, if order button is clicked
  const [orderButtonIsClicked, setOrderButtonIsClicked] = useState(false);
  const ctx = useContext(CartContext);
  const { items, totalAmount, emptyCart } = ctx;

  const url =
    'https://order-online-a8c95-default-rtdb.firebaseio.com/orders.json';

  //post request with async await and axios
  const postRequest = async (postData) => {
    // state is set to true when form is submitting
    setFormIsSubmitting(true);
    try {
      const response = await axios.post(url, postData);
      console.log(response);
      // after getting response from the database
      setFormIsSubmitting(false);
      setFormIsSubmitted(true);
      emptyCart();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
      } else {
        setError(error.message);
      }
      setFormIsSubmitting(false);
      setFormIsSubmitted(false);
    }
  };

  // data for user info is collected from the checkoutform and ordered meals from the cart context and provided to the axios post request
  const formPostRequestHandler = (userData) => {
    const data = {
      user: userData,
      orderedItems: ctx.items,
      totalAmount,
    };
    // calling axios post request on form submission
    postRequest(data);
  };

  // Will change to true when order button is clicked. This function is passed to order button.
  const showForm = () => {
    setOrderButtonIsClicked(true);
  };

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
      <CheckoutForm
        onConfirm={formPostRequestHandler}
        hideModal={props.hideModal}
      />
    </div>
  ) : (
    ''
  );

  // helper function to show "order" and "button" when order button is not clicked and the state orderButtonIsClicked is false
  const orderAndCloseButtonAreVisible = !orderButtonIsClicked && (
    <div className={classes.actions}>
      {/* ternary operator to check if cartHasItem is true or false and only show Order button if it is true */}

      {cartHasItem ? <button onClick={showForm}>Order</button> : ''}
      {!cartHasItem && (
        <span className={classes.emptyCartMessage}>
          Sorry, your cart is empty!
        </span>
      )}
      {/* closes the modal */}
      <button onClick={props.hideModal}>Close</button>
    </div>
  );

  // helper class to style, when checkout form is shown after order button is clicked
  const helperClasses = orderButtonIsClicked ? `${classes.container}` : '';

  // this is returned from the component..
  const cartCheckoutHelper = (
    <>
      {/* helperClasses is a container used to display cart Items and checkout form side by side as a flex container, when order button is clicked.
      
    - this container has two divs inside it as flex items : containerOne and containerTwo
     */}
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
    </>
  );

  if (formIsSubmitting) {
    return (
      <Modal>
        <p
          style={{
            color: '#8a2b06',
            textAlign: 'center',
            fontSize: '1.5rem',
            paddingTop: '0.5em',
          }}
        >
          Your form is submitting...
        </p>
      </Modal>
    );
  }

  if (formIsSubmitted) {
    return (
      <Modal onClose={props.hideModal}>
        <p
          style={{
            color: '#8a2b06',
            textAlign: 'center',
            fontSize: '1.5rem',
            paddingTop: '0.5em',
          }}
        >
          Congrates, your form is submitted successfully. We will take care of
          your orders.
        </p>
        <div className={classes.actions}>
          <button onClick={props.hideModal}>Close</button>
        </div>
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal>
        <p
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            paddingTop: '0.5em',
          }}
        >
          Sorry something went wrong. The form could not be submitted.
        </p>
      </Modal>
    );
  }

  return <Modal onClose={props.hideModal}>{cartCheckoutHelper}</Modal>;
};

export default Cart;

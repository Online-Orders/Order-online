import { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
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

  return (
    <Modal onClose={props.hideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      {/* using ternary opertor to check if order button is clicked, and if it true show the checkout form and hide the order and cancel button. */}
      {orderButtonIsClicked ? (
        <CheckoutForm hideModal={props.hideModal} />
      ) : (
        <div className={classes.actions}>
          <button onClick={props.hideModal}>Close</button>
          {/* ternary operator to check if cartHasItem is true or false and only show Order button if it is true */}
          {cartHasItem ? <button onClick={showForm}>Order</button> : ''}
        </div>
      )}
    </Modal>
  );
};

export default Cart;

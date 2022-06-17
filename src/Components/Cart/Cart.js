import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const { items, totalAmount } = ctx;

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

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          qtyAdded={item.qty}
        />
      ))}
    </ul>
  );

  // helper to convert the total amount to fixed two decimal
  const total = `$${totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.hideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideModal}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

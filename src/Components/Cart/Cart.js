import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
  const addedToCart = [
    {
      id: '1',
      name: 'sushi',
      price: 22.99,
      qtyAdded: 2,
    },
    {
      id: '2',
      name: 'Schnitzel',
      price: 16.5,
      qtyAdded: 5,
    },
  ];
  const cartItems = (
    <ul className={classes['cart-items']}>
      {addedToCart.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          qtyAdded={item.qtyAdded}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50.50</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

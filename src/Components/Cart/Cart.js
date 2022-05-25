import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const addedToCart = [
    {
      id: '1',
      name: 'sushi',
      price: 22.99,
      qtyAdded: 2,
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
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>40.50</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </>
  );
};

export default Cart;

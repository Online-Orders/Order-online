import classes from './CartItem.module.css';

const CartItem = (props) => {
  const itemPrice = `$${props.price}`;
  return (
    <li className={classes.listItem}>
      <h3>{props.name}</h3>
      <div className={classes.cartFlexbox}>
        <div className={classes['price-qty']}>
          <h5 className={classes.price}>{itemPrice}</h5>
          <span className={classes.qtyBox}>x{props.qtyAdded}</span>
        </div>
        <div className={classes.btnAction}>
          <button className={classes.btn}>+</button>
          <button className={classes.btn}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

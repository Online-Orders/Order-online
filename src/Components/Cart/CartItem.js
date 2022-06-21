import CartContext from '../../Store/CartContext';
import { useContext } from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  // got removeItem from the context provider to remove the item from the cart.
  const { removeItem } = ctx;
  const itemPrice = `$${props.price}`;
  return (
    <li className={classes.listItem}>
      <h3>{props.name}</h3>
      <div className={classes.cartFlexbox}>
        <div className={classes['price-qty']}>
          <h5 className={classes.price}>{itemPrice}</h5>
          <span className={classes.qtyBox}>x {props.qtyAdded}</span>
        </div>
        <div className={classes.btnAction}>
          <button className={classes.btn}>+</button>

          {/* onClick removeItem is called and passed id to remove the item */}
          <button className={classes.btn} onClick={() => removeItem(props.id)}>
            -
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

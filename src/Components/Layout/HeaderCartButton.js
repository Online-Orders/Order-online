import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const totalQtyToCart = items.reduce((previousQty, currentItem) => {
    return previousQty + currentItem.qty;
  }, 0);
  return (
    <>
      <button className={classes.button} onClick={props.showModal}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalQtyToCart}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;

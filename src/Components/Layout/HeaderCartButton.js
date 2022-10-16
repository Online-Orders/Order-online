import { useContext, useState, useEffect } from 'react';
import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  // manage state for the header button. Button is highlighted everytime item is added to the cart. When item is empty the state is set to false.
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const ctx = useContext(CartContext);
  const { items } = ctx;

  // using reduce function to get total number of items added to the cart.
  // this is shown in the header button.
  // previousQty is zero, added to the currentItem Quantity
  // reduce returns single output out of the array
  const totalQtyToCart = items.reduce((previousQty, currentItem) => {
    return previousQty + currentItem.qty;
  }, 0);

  // useEffect is called everytime the cart items changes the value from zero i.e when items are added to the cart
  // changes the state to true when item added is more then zero
  // setTimeout is used to set it back to false after 300ms, otherwise, the header button will only highlight when the item is added for the first time.
  // cleanup function is called to clean the setTimeout timer.
  // useEffect has the dependency of cart items, so will only come into effect when items length changes.
  useEffect(() => {
    if (items.length > 0) {
      setButtonIsHighlighted(true);
    }

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ''
  }`;

  return (
    <>
      <button className={btnClasses} onClick={props.showModal}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.cartText}>Your Cart</span>
        <span className={classes.badge}>{totalQtyToCart}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;

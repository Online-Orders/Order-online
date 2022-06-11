import { useContext } from 'react';
import classes from './MealList.module.css';
import MealForm from './MealForm';
import CartContext from '../../../Store/CartContext';

const MealList = (props) => {
  // price with decimal upto 2 decimal points and with $ in the front in each price
  const mealPrice = `$${props.price.toFixed(2)}`;
  // useContext accepts the CartContext object and returns the current context. The current context is saved in the the ctx varibale.
  const ctx = useContext(CartContext);
  // object destructuring to pull addItem function from the ctx.
  const { addItem } = ctx;
  //
  const addedItem = (qty) => {
    // Create a item added object and pass it the addItem function, which updates the item added in the cart
    const addedItem = {
      id: props.id,
      price: props.price,
      name: props.mealName,
      description: props.description,
      qty: qty,
    };
    addItem(addedItem);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealForm id={props.id} handleItemQty={addedItem} />
      </div>
    </li>
  );
};

export default MealList;

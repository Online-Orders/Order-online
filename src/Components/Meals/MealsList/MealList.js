import classes from './MealList.module.css';

const MealList = (props) => {
  // price with decimal upto 2 decimal points and with $ in the front in each price
  const mealPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
    </li>
  );
};

export default MealList;

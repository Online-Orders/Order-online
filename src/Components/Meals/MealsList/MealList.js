import classes from './MealList.module.css';

const MealList = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
    </li>
  );
};

export default MealList;

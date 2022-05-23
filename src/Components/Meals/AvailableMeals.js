import { DUMMY_MEALS } from '../../DummyData/dummayData';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <li>{meal.name}</li>
      ))}
    </ul>
  );
  return <section className={classes.meals}>{mealsList}</section>;
};

export default AvailableMeals;

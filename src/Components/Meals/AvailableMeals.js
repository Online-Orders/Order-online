import { DUMMY_MEALS } from '../../DummyData/dummayData';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <li>{meal.name}</li>
      ))}
    </ul>
  );
  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;

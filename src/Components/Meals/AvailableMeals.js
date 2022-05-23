import { DUMMY_MEALS } from '../../DummyData/dummayData';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealList from './MealsList/MealList';

const AvailableMeals = () => {
  const mealsList = (
    <ul>
      {DUMMY_MEALS.map((meal) => (
        <MealList
          key={meal.id}
          mealName={meal.name}
          description={meal.description}
          price={meal.price}
        />
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

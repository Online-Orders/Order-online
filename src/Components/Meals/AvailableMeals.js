import { DUMMY_MEALS } from '../../DummyData/dummayData';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  console.log(mealsList);
  return <>{mealsList}</>;
};

export default AvailableMeals;

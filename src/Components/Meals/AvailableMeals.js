// import { DUMMY_MEALS } from '../../DummyData/dummayData';
import classes from './AvailableMeals.module.css';
import { useState } from 'react';
import Card from '../UI/Card';
import MealList from './MealsList/MealList';
import { useEffect } from 'react';
import useHttp from '../../Hooks/use-http';

const AvailableMeals = () => {
  const [allMeals, setMeals] = useState([]);

  // configuration for the get request send by this component
  const config = {
    url: 'https://order-online-a8c95-default-rtdb.firebaseio.com/meals.json',
    method: 'get',
  };

  // this function is called from the custom hook "useHttp" and mealData is passed. The recieved data is transformed then set to the allMeals state.
  const transformData = (mealData) => {
    const loadMeals = [];
    for (const key in mealData) {
      loadMeals.push({
        id: key,
        name: mealData[key].name,
        description: mealData[key].description,
        price: mealData[key].price,
      });
    }
    setMeals(loadMeals);
  };

  // custom hook useHttp returns isLoading, hasError and sendRequest which is destructured here.
  // custom hook useHttp is expexting two arguments "config" and function "transformData"
  const {
    isLoading,
    hasError,
    sendRequest: fetchMeals,
  } = useHttp(config, transformData);

  // useEffect is called after component first renders and sendRequest:fetchMeals is called inside it.

  useEffect(() => {
    fetchMeals();
  }, []);

  // if isLoading is true it returns something
  if (isLoading) {
    return (
      <section
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '30px',
          paddingTop: '20px',
        }}
      >
        <p>Meals are Loading...</p>
      </section>
    );
  }

  // if there is error during the request, it will return the error message as hasErrror will have some error message.
  if (hasError) {
    return (
      <section
        style={{
          color: 'red',
          textAlign: 'center',
          fontSize: '20px',
          paddingTop: '20px',
        }}
      >
        <p>Sorry there is some problem. Seems like its a {hasError}</p>
      </section>
    );
  }

  // looping though the allMeals and passing the data to the MealList component which will render the meals
  const mealsList = (
    <ul>
      {allMeals.map((meal) => (
        <MealList
          key={meal.id}
          mealName={meal.name}
          description={meal.description}
          price={meal.price}
          id={meal.id}
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

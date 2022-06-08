import { useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealForm.module.css';

const MealForm = (props) => {
  // sets the inital value of the state
  // also this is the inital value of input form
  const initialValue = 1;
  const [qtyAdded, setQtyAdded] = useState(initialValue);

  // On add button clicked in the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // changes string to integer
    const qty = +qtyAdded;
    // pass the value to the function passed as a prop from MealList, where it is handled
    props.handleItemQty(qty);
    // state is setback to the initialValue
    setQtyAdded(initialValue);
  };

  // everytime the input value changes, it updates the state
  const handleChange = (event) => {
    setQtyAdded(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          step: '1',
          min: '1',
          max: '5',
        }}
        // passing
        onChange={handleChange}
        value={qtyAdded}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealForm;

// import { useState } from 'react';
import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealForm.module.css';

const MealForm = (props) => {
  // ************ state management using useState ***************

  // sets the inital value of the state
  // also this is the inital value of input form

  // const initialValue = 1;
  // const [qtyAdded, setQtyAdded] = useState(initialValue);

  // On add button clicked in the form

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // changes string to integer
  //   const qty = +qtyAdded;
  //   // pass the value to the function passed as a prop from MealList, where it is handled
  //   props.handleItemQty(qty);
  //   // state is setback to the initialValue
  //   setQtyAdded(initialValue);
  // };

  // everytime the input value changes, it updates the state
  // const handleChange = (event) => {
  //   setQtyAdded(event.target.value);
  // };

  // ********** getting current state using useRef. Uncontrolled form uses useRef ************

  const qtyRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const qtyAdded = qtyRef.current.value;
    const qtyAddedNumber = +qtyAdded;
    console.log(qtyAddedNumber);
    props.handleItemQty(qtyAddedNumber);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        ref={qtyRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          step: '1',
          min: '1',
          max: '5',
          // defaultValue is used with useRef as the form is uncontrolled form
          defaultValue: '1',
        }}
        // passing the function handleChange and value to the Input UI, when the form is controlled form
        // onChange={handleChange}

        // value={qtyAdded}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealForm;

import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*setting onChange event listener and value and passed the props from the MealForm */}
      <input
        {...props.input}
        // onChange={props.onChange}
        // value={props.value}
        ref={ref}
      />
    </div>
  );
});

export default Input;

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*setting onChange event listener and value and passed the props from the MealForm */}
      <input {...props.input} onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default Input;

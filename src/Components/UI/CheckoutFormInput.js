import classes from './CheckoutFormInput.module.css';

const CheckoutFormInput = (props) => {
  const { onChange } = props;
  return (
    <div key={props.id} className={classes.formInput}>
      <label>{props.label}</label>
      <input onChange={onChange} {...props} />
      <span className={classes.errors}>{props.errorMessage}</span>
    </div>
  );
};

export default CheckoutFormInput;

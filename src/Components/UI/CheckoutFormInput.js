import { useState } from 'react';
import classes from './CheckoutFormInput.module.css';

const CheckoutFormInput = (props) => {
  const [inputIsTouched, setInputIstouched] = useState(false);
  const { onChange, errorMessage, ...propsInput } = props;

  // triggers when user looses focus from the input field and clickes somewhere else.
  const handleBlur = (event) => {
    setInputIstouched(true);
  };

  // handleFocus is only designed to work with confirmPassword field.
  // if this field is not handled, confirmPassord error message won't pop up until "confirm button" is clicked. So user can type any thing in the input filed.
  // confirmPassword should check the validity as soon as it matches with the original password.
  const handleFocusOnConfirmPassword = (event) => {
    props.name === 'confirmPassword' && setInputIstouched(true);
  };

  return (
    <div key={props.id} className={classes.formInput}>
      <label>{props.label}</label>
      <input
        onChange={onChange}
        {...propsInput}
        onBlur={handleBlur}
        //touched should be in lowercase, without any uppercase like touchedButton, otherwise will recieve error,
        touched={inputIsTouched.toString()}
        // onFocus here will only trigger for confirm password
        onFocus={handleFocusOnConfirmPassword}
      />
      <span className={classes.errors}>{errorMessage}</span>
    </div>
  );
};

export default CheckoutFormInput;

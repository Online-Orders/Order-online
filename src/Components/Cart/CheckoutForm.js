import { useState } from 'react';
import CheckoutFormInput from '../UI/CheckoutFormInput';
import classes from './CheckoutForm.module.css';

const CheckoutForm = (props) => {
  //initializing the initial state for all the form inputs in single object, so that multiple form inputs can be controlled. Intially it is set to empty string.
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  // form attribues that will be passed to the CheckoutFormInput Component in the UI as props. The input field will be using these attributes to show the form input fields and its characteristics.
  const inputs = [
    {
      id: 1,
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Username',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Email',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      label: 'Birthday',
      placeholder: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
    },
  ];

  // In addition to getting value from the event.target we are also getting name of the target as well. This is important to manage the multiple field inputs with single handler.

  // "name" and "value" is set as key value pair so that each value will have unique key. For example:  username will have seperate key as name and  values as a username. And finally state is updated using spread operator.
  const onChange = (event) => {
    const value = event.target.value;
    setValues({
      ...values,
      [event.target.name]: value,
    });
  };

  // handle data when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  //  all the attribute for the form input is itreated from Inputs and passed to the CheckoutFormInput component, which is saved in variable formInputs.
  const formInputs = inputs.map((input) => (
    <CheckoutFormInput
      key={input.id}
      {...input}
      onChange={onChange}
      value={values[input.name]}
    />
  ));

  return (
    <form onSubmit={handleSubmit} className={classes.formStyle}>
      {/* renders form Input fields */}
      {formInputs}
      <button>Confirm</button>
      <button onClick={props.hideModal}>Cancel</button>
    </form>
  );
};

export default CheckoutForm;

import classes from './CheckoutForm.module.css';

const CheckoutForm = () => {
  return (
    <>
      <h3>Plese enter your details.</h3>
      <form>
        <div className={classes['form-control']}>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
          </div>
          <div className={classes.control}>
            <label htmlFor="suburb">Suburb</label>
            <input type="text" id="suburb" />
          </div>
          <div className={classes.control}>
            <label htmlFor="state">State</label>
            <input type="text" id="state" />
          </div>
          <div className={classes.control}>
            <label htmlFor="post-code">Post Code</label>
            <input type="text" id="post-code" />
          </div>
          <div className={classes.control}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
          </div>
        </div>
        <button>Confirm</button>
        <button>Cancel</button>
      </form>
    </>
  );
};

export default CheckoutForm;

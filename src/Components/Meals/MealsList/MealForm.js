import Input from '../../UI/Input';
import classes from './MealForm.module.css';

const MealForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          step: '1',
          min: '1',
          max: '5',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealForm;

import Input from '../../UI/Input';

const MealForm = (props) => {
  return (
    <>
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
    </>
  );
};

export default MealForm;

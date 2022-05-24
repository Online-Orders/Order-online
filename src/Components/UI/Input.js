const Input = (props) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </>
  );
};

export default Input;

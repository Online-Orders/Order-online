import classes from './Modal.module.css';
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalLayout = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return;
};

export default Modal;

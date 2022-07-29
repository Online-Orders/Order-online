import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const ModalLayout = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const ModalId = document.getElementById('modal-backdrop');
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onClose} />,
        ModalId
      )}

      {ReactDOM.createPortal(
        <ModalLayout>{props.children}</ModalLayout>,
        ModalId
      )}
    </>
  );
};

export default Modal;

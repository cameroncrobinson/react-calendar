import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onRemove} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onRemove={props.onRemove} />
      <Overlay>{props.children}</Overlay>
    </Fragment>
  );
};

export default Modal;

import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }: { onClose: () => void }): JSX.Element => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")! as HTMLElement;

const Modal = (props: {
  children: React.ReactNode;
  onClose: () => void;
}): JSX.Element => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

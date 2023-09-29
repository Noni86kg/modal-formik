import React from "react";
import "./Modal.scss";

const Modal = ({ children, style }) => {
  return (
    <div className="modal" style={style}>
      {children}
    </div>
  );
};

export default Modal;

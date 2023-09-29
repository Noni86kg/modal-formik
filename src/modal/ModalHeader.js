import React from "react";
import "./ModalHeader.scss";
import { AiOutlineClose } from "react-icons/ai";

const ModalHeader = ({ title, closeModal }) => {
  return (
    <div className="modal-header">
      <span>{title}</span>
      <button type="button" onClick={closeModal} className="close-icon-button">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ModalHeader;

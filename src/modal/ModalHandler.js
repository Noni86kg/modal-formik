import React from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/actions/modalActions";
import Modal from "./Modal";
import Overlay from "./Overlay";

const ModalHandler = () => {
  const { modals } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCloseModal = (id) => {
    dispatch(closeModal(id));
  };

  const createModal = () =>
    modals.map((item, index) => {
      const { type, props } = item;
      const { children } = props;
      const childrenProps = { ...props };
      delete childrenProps["children"];
      const { className = "" } = childrenProps;
      childrenProps["className"] = `modal-content ${className}`;
      childrenProps["closeModal"] = () => handleCloseModal(index);

      return (
        <Overlay key={`overlay-${index + 1}`} style={{ zIndex: 5 + index * 2 }}>
          <Modal key={`modal-${index}`} style={{ zIndex: 6 + index * 2 }}>
            {React.createElement(type, childrenProps, children)}
          </Modal>
        </Overlay>
      );
    });

  return ReactDom.createPortal(
    <>{createModal()}</>,
    document.getElementById("portal")
  );
};

export default ModalHandler;

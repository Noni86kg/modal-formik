import React from "react";
import "./Overlay.scss";

const Overlay = ({ children, style }) => {
  return (
    <div className="overlay" style={style}>
      {children}
    </div>
  );
};

export default Overlay;

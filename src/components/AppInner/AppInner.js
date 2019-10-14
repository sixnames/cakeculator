import React from "react";
import * as PropTypes from "prop-types";
import * as classes from "./AppInner.module.css";

function AppInner({ className, low, wide, children, lowTop, inModal }) {
  return (
    <div
      className={`${classes.Inner} ${low ? classes.Low : ''} ${lowTop ? classes.LowTop : ''} ${wide ? classes.Wide : ''} ${className ? className : ''} ${inModal ? classes.InModal : ''}`}>
      {children}
    </div>
  )
}

AppInner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  low: PropTypes.bool,
  lowTop: PropTypes.bool,
  wide: PropTypes.bool,
  inModal: PropTypes.bool,
};

export default AppInner;

import React from "react";
import * as PropTypes from "prop-types";
import * as classes from "./FormRowWide.module.css";

function FormRowWide({ className, children }) {
  return (
    <div className={`${classes.Wide} ${className ? className : ''}`}>
      {children}
    </div>
  );
}

FormRowWide.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormRowWide;
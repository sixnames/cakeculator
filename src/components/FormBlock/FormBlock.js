import React from "react";
import * as PropTypes from "prop-types";
import * as classes from "./FormBlock.module.css";

function FormBlock({ children, className }) {
  return (
    <div className={`${classes.Block} ${className ? className : ''}`}>
      {children}
    </div>
  );
}

FormBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormBlock;
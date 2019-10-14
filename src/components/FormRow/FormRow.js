import React from "react";
import * as PropTypes from "prop-types";
import * as classes from "./FormRow.module.css";

function FormRow({ className, children }) {
  return (
    <div className={`${classes.Row} ${className ? className : ''}`}>
      {children}
    </div>
  );
}

FormRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormRow;
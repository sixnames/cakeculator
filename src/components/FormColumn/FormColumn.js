import React from "react";
import * as PropTypes from "prop-types";
import * as classes from "./FormColumn.module.css";

function FormColumn({ className, children, top }) {
  return (
    <div className={`${classes.Column} ${className ? className : ''} ${top ? classes.AlignTop : ''}`}>
      {children}
    </div>
  );
}

FormColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  top: PropTypes.bool,
};

export default FormColumn;

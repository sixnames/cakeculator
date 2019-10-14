import React from "react";
import FormikRadio from "../FormikRadio/FormikRadio";
import * as PropTypes from "prop-types";
import classes from "./FormikRadioLine.module.css";

function FormikRadioLine({
                           name,
                           validate,
                           className,
                           notValid,
                           label,
                           ...props
                         }) {
  return (
    <label className={`${classes.Line} ${className ? className : ''}`}>
      <FormikRadio
        {...props}
        notValid={notValid}
        validate={validate}
        name={name}/>
      <span>{label}</span>
    </label>
  );
}


FormikRadioLine.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  notValid: PropTypes.any,
  className: PropTypes.string,
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
};

export default FormikRadioLine;
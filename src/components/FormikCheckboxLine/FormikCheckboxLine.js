import React from "react";
import FormikCheckbox from "../FormikCheckbox/FormikCheckbox";
import * as PropTypes from "prop-types";
import * as classes from "./FormikCheckboxLine.module.css";

function FormikCheckboxLine({
                              name, validate, label, low,
                              className, disabled, noLineLabel,
                              highlight, customHandler, inList,
                              ...props
                            }) {
  return (
    <label className={`${classes.Frame} ${disabled ? classes.Disabled : ''} ${inList ? classes.InList : ''} ${low ? classes.Low : ''} ${className ? className : ''}`}>
      <FormikCheckbox
        customHandler={customHandler}
        name={name}
        validate={validate}
        disabled={disabled}
        highlight={highlight}
        {...props}/>
      <span className={classes.Label}>{label}</span>
    </label>
  );
}

FormikCheckboxLine.propTypes = {
  low: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  highlight: PropTypes.bool,
  noLineLabel: PropTypes.bool,
  customHandler: PropTypes.func,
  inList: PropTypes.bool,
};

export default FormikCheckboxLine;

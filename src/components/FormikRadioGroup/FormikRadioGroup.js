import React from "react";
import InputLine from "../InputLine/InputLine";
import FormikRadioLine from "../FormikRadioLine/FormikRadioLine";
import * as PropTypes from "prop-types";
import classes from "./FormikRadioGroup.module.css";

function FormikRadioGroup({
                            name, lineClass, label, low,
                            labelPostfix, labelLink, isRequired,
                            radioItems, holderClass
                          }) {
  return (
    <InputLine
      lineClass={lineClass}
      label={label}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      isRequired={isRequired}
      low={low}>
      <span className={`${classes.Holder} ${holderClass ? holderClass : ''}`}>
        {radioItems.map(({ value, label }) => (
          <FormikRadioLine
            label={label}
            name={name}
            value={value}
            key={value}/>
        ))}
      </span>
    </InputLine>
  );
}

FormikRadioGroup.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  lineClass: PropTypes.string,
  label: PropTypes.string,
  low: PropTypes.bool,
  labelPostfix: PropTypes.string,
  holderClass: PropTypes.string,
  labelLink: PropTypes.any,
  radioItems: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default FormikRadioGroup;
import React from "react";
import * as PropTypes from "prop-types";
import classes from "./Textarea.module.css";
import InputLine from "../InputLine/InputLine";

function Textarea({
                    id, name, className, isTouched,
                    lineClass,
                    label,
                    labelLink,
                    notValid,
                    labelPostfix,
                    onChange,
                    value,
                    isRequired,
                    low,
                    ...props
                  }) {
  
  return (
    <InputLine
      isRequired={isRequired}
      name={name}
      lineClass={lineClass}
      label={label}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      low={low}>
      
      <textarea
        className={`${classes.Textarea} ${className ? className : ''} ${notValid ? classes.Error : ''} ${isTouched ? classes.Touched : ''}`}
        onChange={onChange}
        value={value ? value : ''}
        name={name}
        id={id}
        {...props}/>
    </InputLine>
  );
}

Textarea.propTypes = {
  isTouched: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  lineClass: PropTypes.string,
  label: PropTypes.string,
  labelPostfix: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  notValid: PropTypes.any,
};

export default Textarea;
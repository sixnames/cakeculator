import React from "react";
import InputLine from "../InputLine/InputLine";
import MaskedField from 'react-masked-field';
import * as PropTypes from "prop-types";
import classes from "./Input.module.css";

function Input({
                 id, name, className, isRequired,
                 lineClass, label, low, isTouched, wide,
                 labelPostfix, postfix, labelLink, size = 'normal',
                 onChange, value, notValid, type, ...props
               }) {
  
  const inputValue = () => {
    if (value == null) return '';
    if (value === 0 || value === '0') return '0';
    if (!!value) return value;
    return '';
  };
  
  let sizeClass = classes.Normal;
  if (size === 'small') {
    sizeClass = classes.Small;
  }
  if (size === 'big') {
    sizeClass = classes.Big;
  }
  
  return (
    <InputLine
      isRequired={isRequired}
      name={name}
      lineClass={lineClass}
      label={label}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      postfix={postfix}
      low={low}
      wide={wide}>
      
      {type === 'tel' ?
        <MaskedField
          id={name}
          className={`${classes.Input} ${sizeClass} ${notValid ? classes.Error : ''}  ${className ? className : ''}`}
          onChange={onChange ? onChange : null}
          value={inputValue()}
          name={name}
          {...props}
          mask="+7 (999) 999-99-99"/>
        :
        <input
          id={name}
          className={`${classes.Input} ${sizeClass} ${notValid ? classes.Error : ''}  ${className ? className : ''}`}
          onChange={onChange ? onChange : null}
          value={inputValue()}
          name={name}
          type={type ? type : 'text'}
          {...props}/>
      }
    
    </InputLine>
  );
}

Input.propTypes = {
  isRequired: PropTypes.bool,
  isTouched: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  lineClass: PropTypes.string,
  label: PropTypes.string,
  labelPostfix: PropTypes.node,
  postfix: PropTypes.oneOf(['percent', 'currency', 'amount', 'hours', 'days', 'human', 'minutes']),
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  notValid: PropTypes.any,
};

export default Input;

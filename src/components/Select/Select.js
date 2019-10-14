import React from "react";
import InputLine from "../InputLine/InputLine";
import * as PropTypes from "prop-types";
import classes from "./Select.module.css";

function Select({
                  id, name, className, isWarned,
                  lineClass, options = [], low, firstOption,
                  labelPostfix, labelLink, postfix, size = 'normal',
                  label, notValid, value, isTouched, wide,
                  onChange, isRequired, setNameToValue,
                  ...props
                }) {
  
  const withFirstOptions = firstOption ?
    [
      {
        id: '',
        name: firstOption
      },
      ...options
    ] : options;
  
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
      
      <span className={classes.Holder}>
        <select
          className={`${classes.Select} ${sizeClass} ${className ? className : ''} ${notValid ? classes.Error : ''} ${isWarned ? classes.Warned : ''} ${isTouched ? classes.Touched : ''}`}
          name={name} id={id}
          value={value || ''}
          onChange={onChange}
          {...props}>
          
          {withFirstOptions.map(({ name, lastName, id }) => {
            return (
              <option key={id} value={setNameToValue ? name : id}>
                {lastName ? `${name.toString().charAt(0)}. ${lastName}` : name}
              </option>);
          })}
        
        </select>
      </span>
    </InputLine>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  lineClass: PropTypes.string,
  label: PropTypes.string,
  labelPostfix: PropTypes.node,
  labelLink: PropTypes.node,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  notValid: PropTypes.any,
  firstOption: PropTypes.string,
  options: PropTypes.array,
  isTouched: PropTypes.bool,
  isWarned: PropTypes.bool,
  postfix: PropTypes.oneOf(['percent', 'currency', 'amount', 'hours', 'days', 'human', 'minutes']),
};

export default Select;

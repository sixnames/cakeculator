import React from "react";
import * as PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import * as classes from "./Checkbox.module.css";

function Checkbox({
                    notValid,
                    isTouched,
                    className,
                    ...props
                  }) {
  const { value, checked } = props;
  
  return (
    <label className={`${classes.Checkbox} ${checked ? classes.Checked : ''} ${className ? className : ''}${isTouched ? classes.Touched : ''} ${notValid ? classes.Error : ''}`}>
      <input
        type="checkbox"
        {...props}
        value={value ? value : ''}
        checked={checked ? checked : false}
      />
      <Icon name={`check`}/>
    </label>
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  checked: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
};

export default Checkbox;

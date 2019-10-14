import React, { Component } from "react";
import * as PropTypes from "prop-types";
import classes from "./DatePickerCustom.module.css";

class DatePickerCustom extends Component {
  render() {
    const { onClick, value, notValid, isTouched } = this.props;
    
    return (
      <div
        className={`${classes.Frame} ${notValid ? classes.Error : ''} ${isTouched ? classes.Touched : ''}`}
        onClick={onClick}>
        {value}
      </div>
    );
  }
}

DatePickerCustom.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  isTouched: PropTypes.bool,
  notValid: PropTypes.bool,
};

export default DatePickerCustom;
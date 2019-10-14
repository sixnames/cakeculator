import React from "react";
import classes from "./Radio.module.css";

function Radio({ notValid, className, isChecked, ...props }) {
  return (
    <label className={`${classes.Radio} ${className ? className : ''} ${notValid ? classes.Error : ''}`}>
      <input
        type={'radio'}
        checked={isChecked}
        {...props}/>
      <span/>
    </label>
  );
}

export default Radio;
import React from "react";
import * as PropTypes from "prop-types";
import classes from "./Title.module.css";

function Title({ children, subtitle, className, light, low }) {
  return (
    <div className={`${classes.Title} ${light ? classes.Light : ''} ${low ? classes.Low : ''} ${className ? className : ''}`}>
      <h1 className={classes.TitleText}>
        {children}
      </h1>
      {subtitle &&
      <div className={classes.Subtitle}>{subtitle}</div>
      }
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  subtitle: PropTypes.any,
  light: PropTypes.bool,
  low: PropTypes.bool,
};

export default Title;

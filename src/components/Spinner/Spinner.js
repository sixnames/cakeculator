import React from 'react';
import AnimateOpacity from "../AnimateOpacity/AnimateOpacity";
import CircularProgress from '@material-ui/core/CircularProgress';
import * as PropTypes from "prop-types";
import * as classes from "./Spinner.module.css";

function Spinner({ className, inner, noTheme }) {
  return (
    <AnimateOpacity
      className={`${classes.Spinner} ${className ? className : ''} ${inner ? classes.Inner : ''} ${noTheme ? classes.NoTheme : ''}`}>
      <CircularProgress/>
    </AnimateOpacity>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
  inner: PropTypes.bool,
  noTheme: PropTypes.bool,
};

export default Spinner;

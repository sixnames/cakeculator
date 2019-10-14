import React from "react";
import * as PropTypes from "prop-types";
import * as classes from "./FormSection.module.css";

function FormSection({ className, title, children, low, isWarning }) {
  return (
    <section className={`${classes.Section} ${className ? className : ''} ${low ? classes.Low : ''}`}>
      {title &&
      <div className={`${classes.Title} ${isWarning ? classes.TitleRed : ''}`}>
        <h2 className={classes.TitleName}>{title}</h2>
      </div>
      }
      {children}
    </section>
  );
}

FormSection.propTypes = {
  isWarning: PropTypes.bool,
  low: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormSection;
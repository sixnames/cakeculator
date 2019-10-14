import React from "react";
import FormikImageUpload from "../FormikImageUpload/FormikImageUpload";
import * as PropTypes from "prop-types";
import classes from "./FormikImageUploadLayout.module.css";

function FormikImageUploadLayout({
                                   name, label, isRequired, lineClass, format,
                                   labelPostfix, labelLink, low, tooltip, children
                                 }) {
  return (
    <div className={classes.Frame}>
      <div className={classes.Image}>
        <FormikImageUpload
          labelPostfix={labelPostfix}
          isRequired={isRequired}
          labelLink={labelLink}
          lineClass={lineClass}
          tooltip={tooltip}
          format={format}
          label={label}
          name={name}
          low={low}/>
      </div>
      <div className={classes.Content}>
        {children}
      </div>
    </div>
  );
}

FormikImageUploadLayout.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  lineClass: PropTypes.string,
  labelPostfix: PropTypes.node,
  labelLink: PropTypes.any,
  low: PropTypes.bool,
  tooltip: PropTypes.any,
  format: PropTypes.oneOf(['jpeg', 'png']).isRequired,
  children: PropTypes.node.isRequired,
};

export default FormikImageUploadLayout;

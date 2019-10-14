import React from "react";
import { Field } from "formik";
import Icon from "../Icon/Icon";
import InputLine from "../InputLine/InputLine";
import TTip from "../TTip/TTip";
import * as PropTypes from "prop-types";
import classes from "./FormikImageUpload.module.css";
import FormikImageUploadPreview from "../FormikImageUploadPreview/FormikImageUploadPreview";

function FormikImageUpload({
                             name, label, isRequired, lineClass, format,
                             labelPostfix, labelLink, low, tooltip
                           }) {
  console.log(format);
  
  return (
    <Field name={name}>
      {({ field, form }) => {
        const { setFieldValue } = form;
        
        function setImageHandler(event) {
          setFieldValue(name, event.currentTarget.files[0]);
        }
        
        function removeImageHandler() {
          setFieldValue(name, undefined);
        }
        
        return (
          <InputLine
            isRequired={isRequired}
            name={name}
            lineClass={lineClass}
            label={label}
            labelPostfix={labelPostfix}
            labelLink={labelLink}
            low={low}>
            
            <TTip
              title={tooltip}
              className={classes.Frame}>
              <label className={classes.InputFrame}>
                <input
                  onChange={(event) => setImageHandler(event)}
                  className={classes.Input}
                  type={'file'}
                  name={name}
                  id={name}/>
              </label>
              <Icon name={'no-image'} className={classes.NoImage}/>
              <FormikImageUploadPreview
                removeFile={removeImageHandler}
                file={field.value}/>
            </TTip>
          </InputLine>
        )
      }}
    </Field>
  );
}

FormikImageUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  lineClass: PropTypes.string,
  labelPostfix: PropTypes.node,
  labelLink: PropTypes.any,
  low: PropTypes.bool,
  tooltip: PropTypes.any,
  format: PropTypes.oneOf(['jpeg', 'png']).isRequired,
};

export default FormikImageUpload;

import React from "react";
import { Field } from "formik";
import Checkbox from "../Checkbox/Checkbox";
import * as PropTypes from "prop-types";
import { get } from "lodash";

function FormikCheckbox({ name, validate, highlight, customHandler, disabled, ...props }) {
  
  return (
    <Field
      validate={validate}
      name={name}>
      {({ field, form }) => {
        const innerNotValid = !!get(form.errors, name);
        const { value } = field;
        const initialValue = get(form.initialValues, name);
        
        function onChangeHandler(e) {
          form.setFieldValue(name, e.target.checked);
          if (customHandler) customHandler(e.target.checked);
        }
        
        return (
          <Checkbox
            {...field}
            {...props}
            checked={value}
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
            notValid={innerNotValid}
            isTouched={(initialValue !== value) && !!highlight}/>
        );
      }}
    </Field>
  );
}

FormikCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  highlight: PropTypes.bool,
  customHandler: PropTypes.func,
};

export default FormikCheckbox;

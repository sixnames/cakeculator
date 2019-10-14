import React from "react";
import { Field } from "formik";
import Textarea from "../Textarea/Textarea";
import { get } from "lodash";
import * as PropTypes from "prop-types";

function FormikTextarea({
                          name, validate, autoComplete,
                          highlight, notValid, isRequired,
                          ...props
                        }) {
  
  return (
    <Field
      validate={validate}
      name={name}>
      {({ field, form }) => {
        const innerNotValid = !!get(form.errors, name);
        const initialValue = get(form.initialValues, name);
        const isTouched = !!get(form.touched, name) && highlight;
        
        function checkIsTouched(value) {
          const initial = initialValue ? initialValue.toString() : '';
          const current = value ? value.toString() : '';
          const touched = initial !== current;
          
          form.setFieldTouched(name, touched);
        }
        
        function onChange(e) {
          field.onChange(e);
          checkIsTouched(e.target.value);
        }
        
        function onBlur(e) {
          field.onBlur(e);
          checkIsTouched(e.target.value);
        }
        
        return (
          <Textarea
            autoComplete={autoComplete ? autoComplete : 'off'}
            {...field}
            {...props}
            isRequired={isRequired}
            onChange={onChange}
            onBlur={onBlur}
            isTouched={isTouched}
            notValid={notValid ? notValid : innerNotValid}/>
        )
      }}
    </Field>
  );
}

FormikTextarea.propTypes = {
  highlight: PropTypes.bool,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  autoComplete: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default FormikTextarea;
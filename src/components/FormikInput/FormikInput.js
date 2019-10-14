import React from "react";
import Input from "../Input/Input";
import { Field } from "formik";
import { get } from "lodash";
import * as PropTypes from "prop-types";

function FormikInput({
                       name, validate, notValid,
                       autoComplete, isRequired,
                       type, numberToString,
                       ...props
                     }) {
  
  return (
    <Field
      validate={validate}
      name={name}>
      {({ field, form: { errors, setFieldValue } }) => {
        const innerNotValid = !!get(errors, name);
        const { onChange } = field;
        
        function onChangeHandler(e) {
          if (numberToString) {
            setFieldValue(name, e.target.value.toString());
          } else {
            onChange(e);
          }
        }
        
        return (
          <Input
            {...field}
            {...props}
            type={type}
            isRequired={isRequired}
            onChange={onChangeHandler}
            autoComplete={autoComplete ? autoComplete : 'on'}
            notValid={notValid ? notValid : innerNotValid}
          />
        );
      }}
    </Field>
  );
}

FormikInput.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  numberToString: PropTypes.bool,
  isRequired: PropTypes.bool,
  notValid: PropTypes.any,
  autoComplete: PropTypes.string,
};

export default FormikInput;

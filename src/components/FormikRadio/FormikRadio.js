import React from "react";
import { Field } from "formik";
import { get } from "lodash";
import Radio from "../Radio/Radio";
import * as PropTypes from "prop-types";

function FormikRadio({ name, validate, className, notValid, value, ...props }) {
  return (
    <Field
      validate={validate}
      name={name}>
      {({ field, form: { errors, values, setFieldValue } }) => {
        const innerNotValid = !!get(errors, name);
        const isChecked = get(values, name).toString() === value;
        const { onChange } = field;
        
        function onChangeHandler(e) {
          if (e.target.value === 'true') {
            setFieldValue(name, true);
          } else if (e.target.value === 'false') {
            setFieldValue(name, false);
          } else {
            onChange(e);
          }
        }
        
        return (
          <Radio
            {...field}
            {...props}
            value={value}
            onChange={onChangeHandler}
            isChecked={isChecked}
            className={className}
            notValid={notValid ? notValid : innerNotValid}
          />
        );
      }}
    </Field>
  );
}

FormikRadio.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  notValid: PropTypes.any,
  className: PropTypes.string,
};

export default FormikRadio;

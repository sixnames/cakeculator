import React from "react";
import { Field } from "formik";
import Select from "../Select/Select";
import { get } from "lodash";
import * as PropTypes from "prop-types";

function FormikSelect({
                        name, validate, options,
                        notValid, isWarned, highlight,
                        isRequired, setNameToValue,
                        ...props
                      }) {
  
  return (
    <Field
      validate={validate}
      name={name}>
      {({ field, form }) => {
        const innerNotValid = !!get(form.errors, name);
        const initialValue = get(form.initialValues, name);
        const isTouched = (initialValue !== field.value) && !!highlight;
        
        return (
          <Select
            {...field}
            {...props}
            setNameToValue={setNameToValue}
            isTouched={isTouched}
            options={options}
            isWarned={isWarned}
            isRequired={isRequired}
            notValid={notValid ? notValid : innerNotValid}/>
        )
      }}
    </Field>
  );
}

FormikSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  validate: PropTypes.func,
  highlight: PropTypes.bool,
  isWarned: PropTypes.bool,
  isRequired: PropTypes.bool,
  setNameToValue: PropTypes.bool,
};

export default FormikSelect;

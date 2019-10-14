import React from 'react';
import DatePicker from "react-datepicker/es";
import { setMinutes, setHours, addMinutes, isSameDay, isAfter } from "date-fns";
import { Field } from "formik";
import { get } from "lodash";
import DatePickerCustom from "../DatePickers/DatePickerCustom";
import { dateFormantInstance, timeFormantInstance } from "../DatePickers/dateFormat";
import Icon from "../Icon/Icon";
import FormBlock from "../FormBlock/FormBlock";
import InputLine from "../InputLine/InputLine";
import * as PropTypes from "prop-types";
import "../DatePickers/DatePickerCommonStyles.css";
import classes from "../DatePickers/DatePickers.module.css";

function FormikDateTimeRange({
                               fromName, toName,
                               highlight, low,
                               isRequired, ...props
                             }) {
  
  const { fromLabel, fromId, fromReadOnly, toLabel, toId, toReadOnly } = props;
  const addThirtyMin = (date) => addMinutes(new Date(date), 30);
  
  function highlightDate({
                           initialValues, touched, setFieldTouched,
                           name, onChange, onBlur
                         }) {
    
    const initialValue = get(initialValues, name);
    const isTouched = !!get(touched, name) && highlight;
    
    function checkIsTouched(value) {
      const initial = initialValue ? initialValue.toString() : '';
      const current = value ? value.toString() : '';
      const touched = initial !== current;
      
      setFieldTouched(name, touched);
    }
    
    function onFieldChange(e) {
      onChange(e);
      checkIsTouched(e.target.value);
    }
    
    function onFieldBlur(e) {
      onBlur(e);
      checkIsTouched(e.target.value);
    }
    
    return {
      onFieldChange,
      onFieldBlur,
      isTouched,
    }
  }
  
  return (
    <FormBlock className={classes.Wide}>
      <InputLine isRequired={isRequired} label={fromLabel} low={low}>
        <div className={classes.Frame}>
          <Field name={fromName}>
            {({ field, form: { values, setFieldValue, errors, initialValues, touched, setFieldTouched } }) => {
              const { value, onChange, onBlur } = field;
              const to = get(values, toName);
              const inputValue = !value || value === '' ? undefined : value;
              const finalValue = typeof inputValue === 'string' ? new Date(inputValue) : inputValue;
              const notValid = !!get(errors, fromName);
              
              const {
                onFieldChange,
                onFieldBlur,
                isTouched,
              } = highlightDate({
                initialValues,
                touched,
                setFieldTouched,
                name: fromName,
                onChange,
                onBlur
              });
              
              return (
                <DatePicker
                  autoComplete={'off'}
                  name={field.name}
                  id={fromId}
                  selected={finalValue}
                  showTimeSelect
                  timeFormat={timeFormantInstance}
                  dateFormat={`${dateFormantInstance} ${timeFormantInstance}`}
                  timeCaption="Время"
                  onChange={(date) => {
                    if (isAfter(new Date(date), new Date(to))) {
                      setFieldValue(toName, addThirtyMin(date));
                    }
                    onFieldChange({
                      target: {
                        value: date,
                        name: fromName
                      }
                    });
                  }}
                  onBlur={onFieldBlur}
                  customInput={<DatePickerCustom notValid={notValid} isTouched={isTouched}/>}
                  dropdownMode="scroll"
                  readOnly={fromReadOnly}
                />
              )
            }}
          </Field>
          <Icon name={`calendar`}/>
        </div>
      </InputLine>
      
      <InputLine isRequired={isRequired} label={toLabel} low={low}>
        <div className={classes.Frame}>
          <Field name={toName}>
            {({ field, form: { values, errors, initialValues, touched, setFieldTouched } }) => {
              const { value, onChange, onBlur } = field;
              const from = get(values, fromName);
              const to = get(values, toName);
              const inputValue = !value || value === '' ? undefined : value;
              const finalValue = typeof inputValue === 'string' ? new Date(inputValue) : inputValue;
              const sameDate = isSameDay(new Date(from), new Date(to));
              let minTime = finalValue ? sameDate ? addThirtyMin(from) : setHours(setMinutes(new Date(finalValue), 0), 0) : new Date();
              let maxTime = new Date('2100-12-31 23:30');
              const notValid = !!get(errors, toName);
              
              const {
                onFieldChange,
                onFieldBlur,
                isTouched,
              } = highlightDate({
                initialValues,
                touched,
                setFieldTouched,
                name: fromName,
                onChange,
                onBlur
              });
              
              return (
                <DatePicker
                  autoComplete={'off'}
                  name={field.name}
                  id={toId}
                  selected={finalValue}
                  minTime={minTime}
                  maxTime={maxTime}
                  minDate={new Date(from)}
                  showTimeSelect
                  timeFormat={timeFormantInstance}
                  dateFormat={`${dateFormantInstance} ${timeFormantInstance}`}
                  timeCaption="Время"
                  onChange={(date) => {
                    onFieldChange({
                      target: {
                        value: date,
                        name: toName
                      }
                    });
                  }}
                  onBlur={onFieldBlur}
                  customInput={<DatePickerCustom notValid={notValid} isTouched={isTouched}/>}
                  dropdownMode="scroll"
                  readOnly={toReadOnly}
                />
              )
            }}
          </Field>
          <Icon name={`calendar`}/>
        </div>
      </InputLine>
    </FormBlock>
  );
}

FormikDateTimeRange.propTypes = {
  highlight: PropTypes.bool,
  fromName: PropTypes.string.isRequired,
  toName: PropTypes.string.isRequired,
  fromLabel: PropTypes.string,
  toLabel: PropTypes.string,
  low: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default FormikDateTimeRange;
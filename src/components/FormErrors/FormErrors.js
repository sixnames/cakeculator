import React, { useState } from "react";
import AnimateOpacity from "../AnimateOpacity/AnimateOpacity";
import Icon from "../Icon/Icon";
import { isEmpty } from "lodash";
import * as PropTypes from "prop-types";
import classes from "./FormErrors.module.css";

function FormErrors({ errors }) {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleListHandler() {
    setIsOpen((prevState) => !prevState)
  }
  
  if (isEmpty(errors)) {
    // noinspection JSConstructorReturnsPrimitive
    return null;
  }
  
  function getErrorsList(errors, initialList) {
    return [...initialList, ...Object.keys(errors).reduce((acc, key) => {
      const error = errors[key];
      if (typeof error === 'object') {
        return getErrorsList(error, acc);
      }
      if (error) {
        return [...acc, error];
      }
      return acc;
    }, [])];
  }
  
  const errorsList = getErrorsList(errors, []);
  const errorsCounter = errorsList.length;
  
  return (
    <AnimateOpacity className={`${classes.Frame}`}>
      <div
        onClick={toggleListHandler}
        className={`${classes.Trigger}`}>
        <Icon name={'warning'}/>
        Ошибки формы {errorsCounter} шт.
      </div>
      <div className={`${classes.Content} ${isOpen ? classes.ContentActive : ''}`}>
        <div className={classes.List}>
          <ul className={classes.ListHolder}>
            {errorsList.map((error) => {
              return (
                <li className={classes.ListItem} key={error}>{error}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </AnimateOpacity>
  );
}

FormErrors.propTypes = {
  errors: PropTypes.object.isRequired,
};

export default FormErrors;
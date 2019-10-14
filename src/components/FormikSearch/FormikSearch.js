import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import FormikInput from "../FormikInput/FormikInput";
import * as PropTypes from "prop-types";
import * as classes from "./FormikSearch.module.css";

function FormikSearch({ resetForm }) {
  return (
    <div className={classes.Search}>
      <div className={classes.Form}>
        <FormikInput
          className={classes.Input}
          placeholder={`Поиск...`}
          name={'query'} low/>
        
        <Button
          theme={`white`}
          type={'submit'}
          className={classes.Button}>
          <Icon name={`search`}/>
        </Button>
      </div>
      
      {resetForm &&
      <Button
        type={'reset'}
        theme={'light'}
        className={classes.Reset}
        onClick={resetForm}>
        <Icon name={'update'}/>
      </Button>
      }
    </div>
  );
}

FormikSearch.propTypes = {
  resetForm: PropTypes.func,
};

export default FormikSearch;

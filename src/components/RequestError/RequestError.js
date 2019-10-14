import React from "react";
import * as PropTypes from "prop-types";
import classes from "./RequestError.module.css";

function RequestError({ message = 'Ошибка загрузки данных' }) {
  return (
    <div className={classes.Frame}>
      {message}
    </div>
  );
}

RequestError.propTypes = {
  message: PropTypes.string,
};

export default RequestError;

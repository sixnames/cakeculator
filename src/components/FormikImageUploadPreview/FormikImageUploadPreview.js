import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import * as PropTypes from "prop-types";
import classes from "./FormikImageUploadPreview.module.css";

/**
 * @return {null}
 */
function FormikImageUploadPreview({ file = null, removeFile, inline }) {
  const [thumb, setThumb] = useState(null);
  
  useEffect(() => {
    if (!!file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumb(reader.result);
      };
      reader.readAsDataURL(file)
    }
  }, [file]);
  
  if (!Boolean(file)) return null;
  return (
    <div className={`${classes.Frame} ${inline ? classes.Inline : ''}`}>
      <div>
        <img
          src={thumb}
          alt={file.name}
          width={150}
          height={150}/>
      </div>
      
      <Button
        className={classes.Remove}
        onClick={removeFile}
        theme={'light'}
        size={'small'}
        circle>
        <Icon name={'cross'}/>
      </Button>
    </div>
  );
}

FormikImageUploadPreview.propTypes = {
  file: PropTypes.object,
  inline: PropTypes.bool,
  removeFile: PropTypes.func.isRequired,
};

export default FormikImageUploadPreview;

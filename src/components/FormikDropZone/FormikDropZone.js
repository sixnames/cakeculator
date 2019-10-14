import React, { useCallback } from "react";
import { useDropzone } from 'react-dropzone'
import InputLine from "../InputLine/InputLine";
import TTip from "../TTip/TTip";
import FormikDropZonePreview from "../FormikDropZonePreview/FormikDropZonePreview";
import { useAppContext } from "../Context/appContext";
import { CONFIRM_MODAL } from "../Modal/modalContentTypes";
import * as PropTypes from "prop-types";
import classes from "./FormikDropZone.module.css";

function FormikDropZone({
                          format = 'image/jpeg', name, label,
                          isRequired, lineClass, setFieldValue,
                          labelPostfix, labelLink, low, tooltip, value = []
                        }) {
  const { showModal } = useAppContext();
  const onDrop = useCallback((acceptedFiles) => {
    setFieldValue(name, [...value, ...acceptedFiles]);
  }, [name, setFieldValue, value]);
  
  // noinspection JSCheckFunctionSignatures
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: format
  });
  
  function removeImageHandler(i) {
    const processedData = value.filter((_, index) => index !== i);
    showModal(CONFIRM_MODAL, {
      confirm: () => setFieldValue(name, processedData),
      message: 'Вы уверены, что хотите удалить изображение?'
    });
  }
  
  return (
    <InputLine
      isRequired={isRequired}
      name={name}
      lineClass={`${classes.InputLine} ${lineClass ? lineClass : ''}`}
      label={label}
      labelPostfix={labelPostfix}
      labelLink={labelLink}
      low={low}>
      
      <div
        className={classes.Frame}
        {...getRootProps()}>
        <TTip title={tooltip}>
          
          <div className={classes.FrameText}>
            Перетащите файлы сюда. Или нажмите для выбора.
          </div>
          
          <input
            {...getInputProps()}
            className={classes.Input}/>
        </TTip>
      </div>
      
      <FormikDropZonePreview
        files={value}
        name={name}
        setFieldValue={setFieldValue}
        removeImageHandler={removeImageHandler}/>
    </InputLine>
  )
}

FormikDropZone.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
};

export default FormikDropZone;

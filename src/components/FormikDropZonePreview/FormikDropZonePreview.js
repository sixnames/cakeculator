import React from "react";
import FormikImageUploadPreview from "../FormikImageUploadPreview/FormikImageUploadPreview";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import * as PropTypes from "prop-types";
import classes from "./FormikDropZonePreview.module.css";

function FormikDropZonePreview({ files, removeImageHandler, setFieldValue, name }) {
  if (files.length < 1) {
    // noinspection JSConstructorReturnsPrimitive
    return null;
  }
  
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    
    const reorderedData = [...files];
    const [removed] = reorderedData.splice(result.source.index, 1);
    reorderedData.splice(result.destination.index, 0, removed);
    setFieldValue(name, reorderedData);
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"files"} direction="horizontal">
        {(provided) => (
          <div
            className={classes.Frame}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            
            {files.map((file, i) => (
              <Draggable
                key={file.name}
                draggableId={file.name}
                index={i}>
                {(provided) => (
                  <div
                    className={classes.Item}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}>
                    <FormikImageUploadPreview
                      key={i}
                      index={i}
                      removeFile={() => removeImageHandler(i)}
                      file={file}
                      inline/>
                    {provided.placeholder}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

FormikDropZonePreview.propTypes = {
  files: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  removeImageHandler: PropTypes.func.isRequired,
};

export default FormikDropZonePreview;

import React, { Suspense } from 'react';
import AnimateOpacity from "../AnimateOpacity/AnimateOpacity";
import Spinner from "../Spinner/Spinner";
import {
  TEST_MODAL,
} from "./modalContentTypes";
import * as PropTypes from "prop-types";
import * as classes from "./Modal.module.css";

const TestModal = React.lazy(() => import("./TestModal/TestModal"));

function Modal({ modalType, modalProps, hideModal, showModal }) {
  
  const modalConfig = {
    ...modalProps,
    hideModal,
    showModal,
  };
  
  return (
    <AnimateOpacity className={classes.Modal}>
      <div className={classes.Scroll}>
        <Suspense fallback={<Spinner inner/>}>
          {modalType === TEST_MODAL &&
          <TestModal {...modalConfig}/>
          }
        </Suspense>
      </div>
      <div className={classes.Backdrop} onClick={hideModal}/>
    </AnimateOpacity>
  )
}

Modal.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalProps: PropTypes.object.isRequired,
};

export default Modal;

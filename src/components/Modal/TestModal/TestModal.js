import React from "react";
import ModalFrame from "../ModalFrame/ModalFrame";
import ModalTitle from "../ModalTitle/ModalTitle";
import ModalText from "../ModalText/ModalText";
import ModalButtons from "../ModalButtons/ModalButtons";
import Button from "../../Button/Button";
import * as PropTypes from "prop-types";

function ConfirmModal({ hideModal }) {
  
  return (
    <ModalFrame hideModal={hideModal}>
      <ModalTitle>Test Modal</ModalTitle>
      
      <ModalText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, culpa debitis earum harum nobis sint totam. Ad beatae commodi eum impedit magni, porro quisquam voluptatum! Commodi
        eligendi, reprehenderit! Aliquam, commodi!
      </ModalText>
      
      <ModalButtons>
        <Button theme={'main'} onClick={hideModal}>Да</Button>
      </ModalButtons>
    </ModalFrame>
  );
}

ConfirmModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default ConfirmModal;

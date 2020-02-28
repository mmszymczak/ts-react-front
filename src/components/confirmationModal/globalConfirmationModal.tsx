import React, { useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { Button, Modal } from 'react-bootstrap';
import { IGlobalConfirmationModal } from './interfaces/IGlobalConfirmationModal';

let showConfirmationModal: (extraProps: IGlobalConfirmationModal) => void;

export default function GlobalConfirmationModal(props: unknown, ref: string) {
  const [isModalShown, setShow] = useState(false);
  const [internalState, setInternalState] = useState({} as IGlobalConfirmationModal);
  const dispatch = useDispatch();

  function show(extraProps: IGlobalConfirmationModal) {
    setInternalState(extraProps);
    setShow(true);
  }

  showConfirmationModal = show;

  function handleOk() {
    if (internalState.onOk) {
      dispatch(internalState.onOk());
    }
    setShow(false);
  }

  function handleCancel() {
    if (internalState.onCancel) {
      dispatch(internalState.onCancel());
    }
    setShow(false);
  }

  return (
    <Modal show={isModalShown} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{internalState.title || 'Confirmation'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{internalState.message || 'Are you sure?'}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleCancel}>
          {internalState.cancelLabel || 'No'}
        </Button>
        <Button variant='primary' onClick={handleOk}>
          {internalState.okLabel || 'Yes'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { showConfirmationModal };

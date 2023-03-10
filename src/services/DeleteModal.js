import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteJob(props) {
  const [modal, setModal] = useState(false);
  const okButtonHandler = () => {
    toggle();
    props.deleteJob(props.services._id)
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="outline-danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Job</ModalHeader>
        <ModalBody>
          Are you sure you want to delete job <b>{props.services.job}</b>?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={okButtonHandler}>
           Delete
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteJob;
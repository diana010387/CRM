import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteOrder(props) {
  const [modal, setModal] = useState(false);
  const okButtonHandler = () => {
    toggle();
    props.deleteOrder(props.orders._id)
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="outline-danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Are you sure you want to delete?</ModalHeader>
        <ModalBody>
          <table className="table table-bordered">
            <tbody>
            <tr>
              <td>Client name: <b>{props.orders.clientName}</b></td>
            </tr>
            <tr>
              <td>Service: <b>{props.orders.service.job}</b></td>
            </tr>
            <tr>
              <td>Price: $ <b>{props.orders.service.price}</b></td>
            </tr>
            </tbody>
          </table>
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

export default DeleteOrder;
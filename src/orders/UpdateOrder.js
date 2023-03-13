import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function UpdateOrder(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="outline-warning" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update client</ModalHeader>
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

          gjhgjhgjhgjhghjgjhg
          <table className="table table-bordered">
            <tbody>
            <tr>
              <td>In progress</td>
            </tr>
            <tr>
              <td>Job completed</td>
            </tr>
            <tr>
              <td>Say to client</td>
            </tr>
            <tr>
              <td>Client received</td>
            </tr>
            <tr>
              <td>Debt: $ {props.orders.paid.debt}</td>
            </tr>
            </tbody>
          </table>



        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
           Update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UpdateOrder;
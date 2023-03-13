import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function UpdateJobModal(props) {
  const [modal, setModal] = useState(false);
  const[job, setJob] = useState(props.service.job);
  const[price, setPrice] = useState(props.service.price);
  const[primeCost, setPrimeCost] = useState(props.service.primeCost);
  const[employee, setEmployee] = useState(props.service.employee);

  const onSave = () => {
    const newJob = {job, price, primeCost, employee}
    props.updateJob(props.services._id, newJob);
    toggle();
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="outline-warning" onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update client</ModalHeader>
        <ModalBody>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Job:</span>
            </div>
            <input type="text"
                   className="form-control" aria-label="Default"
                   aria-describedby="inputGroup-sizing-default"
                   placeholder="job"
                   value={job}
                   onChange={e=>setJob(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Price:</span>
            </div>
            <input type="text" className="form-control" aria-label="Default"
                   aria-describedby="inputGroup-sizing-default"
                   placeholder="price"
                   value={price}
                   onChange={e=>setPrice(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Prime cost:</span>
            </div>
            <input type="text" className="form-control" aria-label="Default"
                   aria-describedby="inputGroup-sizing-default"
                   placeholder="prime cost"
                   value={primeCost}
                   onChange={e=>setPrimeCost(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Employee:</span>
            </div>
            <input type="text" className="form-control" aria-label="Default"
                   aria-describedby="inputGroup-sizing-default"
                   placeholder="employee"
                   value={employee}
                   onChange={e=>setEmployee(e.target.value)}
            />
          </div>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSave}>
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

export default UpdateJobModal;
import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateNewJob(props) {
  const [modal, setModal] = useState(false);

  const [job, setJob] = useState('');
  const [price, setPrice] = useState('');
  const [primeCost, setPrimeCost] = useState('');
  const [employee, setEmployee] = useState('');

  const addJobButtonHandler = () => {
    const newJob = {
      job,
      price,
      primeCost,
      employee,
    }
    props.createNewJob(newJob);
    setJob('');
    setPrice('');
    setPrimeCost('');
    setEmployee('');
    toggle();
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="outline-primary" onClick={toggle}>
        Create New Job
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create new job</ModalHeader>
        <ModalBody>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Job:</span>
            </div>
            <input type="text" className="form-control" aria-label="Default"
                   aria-describedby="inputGroup-sizing-default"
                   placeholder="job"
                   value={job}
                   onChange={e => setJob(e.target.value)}
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
                   onChange={e => setPrice(e.target.value)}
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
                   onChange={e => setPrimeCost(e.target.value)}
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
                   onChange={e => setEmployee(e.target.value)}
            />
          </div>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addJobButtonHandler}>
            Save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateNewJob;
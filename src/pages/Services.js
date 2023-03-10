import React, {useEffect, useState} from 'react';
import axios from "axios";
import CreateNewJob from "../services/CreateNewJob";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DeleteModal from "../services/DeleteModal";
import UpdateModal from "../services/UpdateModal";

const Services = (props) => {

  const [services, setServices] = useState([]);
  console.log(services)
  const getServices = () => {
    axios.get('https://expressjs-server.vercel.app/services')
      .then((res) => {
        setServices((res.data));
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const createNewJob = (newJob) => {
    axios.post(`https://expressjs-server.vercel.app/services`, newJob)
      .then((res) => {
        getServices()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteJob = (id) => {
    axios.delete(`https://expressjs-server.vercel.app/services/${id}`)
      .then(response => {
        getServices()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const updateJob = (id, newJob) => {
    axios.patch(`https://expressjs-server.vercel.app/services/${id}`, newJob)
      .then(res => {
        getServices()
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getServices();
  }, [])

  return (
    <div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Job"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <CreateNewJob
            createNewJob={createNewJob}
            // services={services}
          />
        </div>
      </div>
      <h1>Job</h1>

      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">Name of job</th>
          <th scope="col">Price</th>
          <th scope="col">Employee</th>
          <th scope="col">Prime cost</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {services.map(el => <tr key={el._id}>
          <td><b>{el.job}</b></td>
          <td> {el.price} </td>
          <td> {el.employee} </td>
          <td> {el.primeCost} </td>
          <td>
            <DropdownButton
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">
                <UpdateModal
                  updateJob={updateJob}
                  services={el}
                />
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <DeleteModal
                  deleteJob={deleteJob}
                  services={el}
                />
              </Dropdown.Item>
            </DropdownButton>
          </td>
        </tr>)}
        </tbody>
      </table>

    </div>
  );
};

export default Services;
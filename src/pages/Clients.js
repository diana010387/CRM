import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";

const Clients = (props) => {

  const [clients, setClients] = useState([]);
  console.log(clients)

  const getClients = () => {
    axios.get('https://expressjs-server.vercel.app/clients')
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getClients();
  }, [])
  return (
    <div>

      <h1>Clients</h1>

      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Phone number</th>
          <th scope="col">Create at</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {clients.map(el => <tr key={el._id}>
            <td><b>{el.name}</b></td>
            <td>{el.address}</td>
            <td>{el.phoneNumber}</td>
            <td>{el.createAt}</td>
            <td>
              <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Update</Dropdown.Item>
                <Dropdown.Item href="#">Delete</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
        )}
        </tbody>
      </table>


    </div>
  );
};

export default Clients;
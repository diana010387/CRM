import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import {useCol} from "react-bootstrap/Col";

const Orders = (props) => {

  const [orders, setOrders] = useState([]);
  console.log(orders)

  const getOrders = () => {
    axios.get('https://expressjs-server.vercel.app/orders')
      .then((res) => {
        setOrders(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getOrders();
  }, [])

  return (
    <div>
      <h1>Orders</h1>
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Service</th>
          <th scope="col">Price</th>
          <th scope="col">Payments</th>
          <th scope="col">Debt</th>
          <th scope="col">Create at</th>
          <th scope="col">Statuses</th>
          <th scope="col">Dates</th>
          <th scope="col">Actions</th>

        </tr>
        </thead>
        <tbody>
        {orders.map(el => <tr key={el._id}>
            <td><b>1</b></td>
            <td><b>{el.clientName}</b></td>
            <td><b>{el.service.job}</b><br/>({el.service.employee})</td>
            <td>{el.service.price}</td>
            <td>{el.paid.payment}</td>
            <td>{el.paid.debt}</td>
            <td>{el.service.createAt}</td>
            <td>In progress: <br/> Job completed: <br/> Say to client: <br/> Client received: <br/> Paid:</td>
            <td>{el.completed.date}</td>
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

export default Orders;
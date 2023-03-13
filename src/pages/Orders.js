import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import CreateNewOrder from "../orders/CreateNewOrder";
import DeleteOrder from "../orders/DeleteOrder";
import UpdateOrder from "../orders/UpdateOrder";


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

  const deleteOrder = (id) => {
    axios.delete(`https://expressjs-server.vercel.app/orders/${id}`)
      .then(response => {
        getOrders()
      })
      .catch(error => {
        console.log(error)
      })
  }
  const updateOrder = (id, newOrder) => {
    axios.patch(`https://expressjs-server.vercel.app/orders/${id}`, newOrder)
      .then(res => {
        getOrders()
      })
      .catch(error => {
        console.log(error)
      })
  }


  useEffect(() => {
    getOrders();
  }, [])

  return (
    <div>
      <h1>Orders</h1>

      <div className="input-group mb-3">
        <input type="text"
               className="form-control"
               placeholder="Recipient's username"
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <CreateNewOrder/>
        </div>
      </div>

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
        {orders.map((el, index) => <tr key={el._id}>
            <td><b>{index + 1}</b></td>
            <td><b>{el.clientName}</b></td>
            <td><b>{el.service.job}</b><br/>({el.service.employee})</td>
            <td>{el.service.price}</td>
            <td>{el.paid.payment}</td>
            <td>{el.paid.debt}</td>
            <td>{el.service.createAt}</td>
            <td>
              In progress: {el.sentToDo.status ? '✓' : null}
              <br/> Job completed: {el.completed.status ? '✓' : null}
              <br/> Say to client: {el.sayToClient.status ? '✓' : null}
              <br/> Client received: {el.clientReceived.status ? '✓' : null}
              <br/> Paid: {el.paid.status ? '✓' : null}
            </td>
            {el.sentToDo.date}
            <br/>
            {el.completed.date}
            <br/>
            {el.clientReceived.date}
            <br/>
            {el.paid.date}
            <td>
              <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">
                  <UpdateOrder
                    updateOrder={updateOrder}
                    orders={el}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <DeleteOrder
                    deleteOrder={deleteOrder}
                    orders={el}
                  />
                </Dropdown.Item>
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
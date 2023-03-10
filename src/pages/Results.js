import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = () => {
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
      <h1>Company results</h1>

      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">Job</th>
          <th scope="col">Employee</th>
          <th scope="col">Net Profit</th>
          <th scope="col">Income</th>
          <th scope="col">Prime Cost</th>
          <th scope="col">Paid sum</th>
          <th scope="col">Client debt</th>
        </tr>
        </thead>
        <tbody>
        {orders.map(el => <tr key={el._id}>
            <td><b>{el.service.job}</b></td>
            <td>{el.service.employee}</td>
            <td>{el.paid.payment+el.paid.debt-el.service.primeCost}</td>
            <td>{el.paid.payment+el.paid.debt}</td>
            <td>{el.service.primeCost}</td>
            <td>{el.paid.payment}</td>
            <td>{el.paid.debt}</td>
          </tr>
        )}
        <tr>
          <td colSpan="2"><b>All services</b></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>


        </tbody>
      </table>

    </div>
  );
};

export default Results;
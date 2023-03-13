import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders)
const[netProfit, setNetProfit] = useState(0);
const[income, setIncome] = useState(0);
const[primeCost, setPrimeCost] = useState(0);
const[paidSum, setPaidSum] = useState(0);
const[clientDebt, setClientDebt] = useState(0);

  const getOrders = () => {
    axios.get('https://expressjs-server.vercel.app/orders')
      .then((res) => {
        setOrders(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const totalNetProfit = () => {
    let total = 0;
    orders.map(el=> (
      total += el.paid.payment+el.paid.debt-el.service.primeCost
    ))
    setNetProfit(total);
  }
  const totalIncome = () => {
    let total = 0;
    orders.map(el=> (
      total += el.paid.payment+el.paid.debt)
    )
    setIncome(total);
  }
  const totalPrimeCost = () => {
    let total = 0;
    orders.map(el=> (
      total += el.service.primeCost)
    )
    setPrimeCost(total);
  }
  const totalPaidSum = () => {
    let total = 0;
    orders.map(el=> (
      total += el.paid.payment)
    )
    setPaidSum(total);
  }
  const totalClientDebt = () => {
    let total = 0;
    orders.map(el=> (
      total += el.paid.debt)
    )
    setClientDebt(total);
  }
  useEffect(() => {
    getOrders();
    totalNetProfit();
    totalIncome();
    totalPrimeCost();
    totalPaidSum();
    totalClientDebt();
  }, )

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
          <td><b>{netProfit}</b></td>
          <td><b>{income}</b></td>
          <td><b>{primeCost}</b></td>
          <td><b>{paidSum}</b></td>
          <td><b>{clientDebt}</b></td>
        </tr>

        </tbody>
      </table>

    </div>
  );
};

export default Results;
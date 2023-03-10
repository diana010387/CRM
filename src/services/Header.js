import React from 'react';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import Clients from '../pages/Clients';
import Services from '../pages/Services';
import Results from '../pages/Results';
import {Route, Routes, Links} from "react-router-dom";


const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Home</a>
          <a className="nav-item nav-link active" href="/orders">Orders</a>
          <a className="nav-item nav-link active" href="/clients">Clients</a>
          <a className="nav-item nav-link active" href="/services">Services</a>
          <a className="nav-item nav-link active" href="/results">Results</a>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </>
  );
};

export default Header;
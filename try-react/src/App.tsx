import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage"
import Login from "./Login"
import Signup from "./Signup"
import ContactUs from "./ContactUs"
import Cart from "./Cart"
import Store from "./Store"
import Account from "./Account"
import Orders from "./Orders"
import AboutUs from "./AboutUs"
import Careers from "./Careers"

import { Routes, Route } from "react-router"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Homepage/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route> 
          <Route path="/signup" element={<Signup/>}>
          </Route>
          <Route path="/contact-us" element={<ContactUs/>}>            
          </Route>
          <Route path="/store" element={<Store/>}>
          </Route>
          <Route path="/cart" element={<Cart/>}>
          </Route>
          <Route path="/account" element={<Account/>}>
          </Route>
          <Route path="/orders" element={<Orders/>}>
          </Route>
          <Route path="/about-us" element={<AboutUs/>}>
          </Route>
          <Route path="/careers" element={<Careers/>}>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
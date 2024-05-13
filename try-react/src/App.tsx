import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage/Homepage"
import Login from "./Login"
import Signup from "./Signup"
import ContactUs from "./ContactUs"
import Cart from "./Cart"
import Store from "./Store"
import Account from "./Account"
import Orders from "./Orders"
import AboutUs from "./AboutUs"
import Careers from "./Careers"
import initializeStoreProducts from "./initializeStoreProducts/initializeStoreProducts"
import { Products, PRODUCTS_TYPE } from './store/ProductsReducer';

import { Routes, Route } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { USER_TYPE } from './store/UserReducer';

function App() {
  const dispatch = useDispatch();
  dispatch({
    type: USER_TYPE,
    payload: {
    id: 0,
    guest: true,
    }
  });
  
  const initialProducts: Products | null = initializeStoreProducts();

  dispatch({
    type: PRODUCTS_TYPE,
    payload: {
      products: initialProducts
    }
  });

  // if (initialProducts) {
  //   if (initialProducts.products) {
  //     console.log(initialProducts.products[0]);
  //   }
  // }

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
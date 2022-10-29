//import logo from './logo.svg';
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import {Routes , Route,Link } from 'react-router-dom' ;

const App=()=>{
    return (
      <>

      <Navbar/>
      <nav>
        <Link to="/home"></Link>
        <Link to="/about"></Link>
        <Link to="/contact"></Link>
        <Link to="/service"></Link>
      </nav>
      
    
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
    </Routes>
  </>
    );
};
export default App;

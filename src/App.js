import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';
import './App.scss';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

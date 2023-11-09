import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from './Components/Herosection';
import Cards from './Components/Cards';
import { Home } from './Components/Pages/Home';
import Contactus from './Components/Pages/Contactus';
// import Cards from './Components/Cards';
 

function App() {
  return (
    <BrowserRouter>
    
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contactus" element={<Contactus />}/>
   </Routes>
    <Footer/>

    
    </BrowserRouter>
  );
}

export default App;

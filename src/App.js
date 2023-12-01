import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Herosection from './Components/Herosection';
import Cards from './Components/Cards';
import { Home } from './Components/Pages/Home';
import Contactus from './Components/Pages/Contactus';
import Aboutus from './Components/Pages/Aboutus';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Horroscope from './Components/Pages/Horroscope'
import Review from './Components/Pages/Review';
// import Cards from './Components/Cards';
 

function App() {
  return (
    <BrowserRouter>
    
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contactus" element={<Contactus />}/>
    <Route path="/Aboutus" element={<Aboutus />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/Horroscope" element={<Horroscope />}/>
    <Route path="/Review" element={<Review />}/>
   </Routes>
    <Footer/>

    
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Herosection from './Components/Herosection';
 

function App() {
  return (
    <>
    
    <Navbar></Navbar>
    <div className=' relative'>
    <div className='bg absolute min-h-[100vh] w-full'></div>
    <Herosection></Herosection>
    </div>
    <div className='p-[20px]'>
    <Footer></Footer>

    </div>

    
    </>
  );
}

export default App;


import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Dropdown from './components/Dropdown';


import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Homes from './pages/Homes';
import Error from './pages/Error';
import About from './pages/About';
import Home from './pages/Home';



function App() {

  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/homes' element={<Homes />} />
        <Route path='about' element={<About />} />
        <Route path='homes/:slug' element={<Home />} />
        <Route path='*' element={<Error />} />


      </Routes>


    </>
  );
}

export default App;

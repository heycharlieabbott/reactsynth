import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
    <ul className='navbar'>
        <Link to="/">menu</Link>
        <Link to="/synth2">hey</Link>
        <a href='/'>menurefresh</a>
        <a href='/synth2'>synth2refresh</a>
        <li>Instructions</li>
        
      
    </ul>
    
    </div>
  )
}

export default Navbar
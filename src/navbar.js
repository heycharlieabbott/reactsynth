import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
    <ul className='navbar'>
        <Link to="/">synth1</Link>
        <Link to="/synth2">synth2</Link>
        {/* <a href='/'>synth1refresh</a>
        <a href='/synth2'>synth2refresh</a> */}
        <li>Instructions</li>
        
      
    </ul>
    
    </div>
  )
}

export default Navbar
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Navbar from './synth1/navbar';
import Slider from './synth1/slider';


function App(){




      return (
       
        <BrowserRouter>
        <Navbar/>
        <div>
          
        <Slider/>

        </div>

        </BrowserRouter>
      )
    
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
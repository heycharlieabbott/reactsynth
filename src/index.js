import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Slider from './slider';


function App(){




      return (
        <div>
          
        <Slider/>

        </div>
      )
    
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
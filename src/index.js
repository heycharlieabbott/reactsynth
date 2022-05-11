import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Osc1 from './osc1';
import Verbo from './verbo';
import Slider from './slider';
import Chain from './chain'
import * as Tone from 'tone';


function App(){




      return (
        <div>
          
       
        {/* <Chain/> */}
        <Slider/>
        


        </div>
      )
    
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
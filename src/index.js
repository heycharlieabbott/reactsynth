import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Osc1 from './osc1';
import Verbo from './verbo';
import * as Tone from 'tone';


function App(){

  const volume1 = new Tone.Volume(-10);

  // const [s1, setS1] = useState(hey);



      return (
        <div>
          
        <Verbo input={volume1} output={Tone.Destination} />
        <Osc1 sound= 'hey' output={volume1}/>
        <Osc1 sound= 'hey' output={volume1}/>


        </div>
      )
    
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
import React, { useEffect, useRef, useState } from "react";
import Chain from "./chain";
import Sequencer from "./sequencer"




export default function Slider(props){


    //Frequency Slider
    const [freqslide, setFreqSliderVal] = useState(500);

    function slideFreq(event){
        setFreqSliderVal(() => event.target.value);  
    }

    //Osc Volume Slider
    const [volslide, setVolSliderVal] = useState(-10);

    function slideVol(event){
        setVolSliderVal(() => event.target.value);  
    }

    //Verb roomSize Slider
    const [vol2slide, setVol2SliderVal] = useState(.95);

    function slideVol2(event){
        setVol2SliderVal(() => event.target.value);  
    }


       //Verb roomSize Slider
       const [temposlide, setTempoSliderVal] = useState(120);

       function slideTempo(event){
           setTempoSliderVal(() => event.target.value);  
       }


    const ctrlinterface = {
        freq: freqslide, 
        vol: volslide, 
        vol2: vol2slide
    };



const [isdropped, setDroppped] = useState(false);

    
    const dropdowntoggle = () => {
        
        setDroppped(() => !isdropped);

        if (isdropped){
            document.querySelector('.dropdown').style.display = 'block';

        }
        else{
            document.querySelector('.dropdown').style.display = '';
        }
        
    }
    

    return(
        <div>
        
        <div className="uielement">
        <input type="range" min="200" max="1000" value={freqslide} onChange={slideFreq} class="slider"></input>
        <p>FREQUENCY</p>
        </div>
        

        <div className="uielement">
        <input type="range" min="-30" max="0" value={volslide} onChange={slideVol} class="slider"></input>
        <p>VOLUME</p>
        </div>
        

        <div className="uielement">
        <input type="range" min="0" max="1" value={vol2slide} onChange={slideVol2} class="slider" step={0.01}></input>
        <p>ROOM SIZE</p>
        </div>
      
        
        <div className="uielement">
        <input type="range" min="50" max="300" value={temposlide} onChange={slideTempo} class="slider"   ></input>
        <p>TEMPO: {temposlide}</p>
        </div>
        
        <div className="centerui">
            <button onClick={dropdowntoggle}>STYLE</button>
            <ul className="dropdown">
            <li>RHYTHM</li>
            <li>DRONE</li>
            </ul>


        </div>
        
        
        <Sequencer freq={freqslide} vol={volslide} vol2={vol2slide} ctrl={ctrlinterface} tempo={temposlide}/>
        
       
       

           

        </div>
    )

}
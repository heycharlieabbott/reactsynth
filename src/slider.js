import React, { useEffect, useRef, useState } from "react";
import Chain from "./chain";
import Sequencer from "./sequencer"




export default function Slider(props){

    //SLIDERBANK1

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
    const [vol2slide, setVol2SliderVal] = useState(.75);

    function slideVol2(event){
        setVol2SliderVal(() => event.target.value);  
    }


       //Verb roomSize Slider
       const [temposlide, setTempoSliderVal] = useState(120);

       function slideTempo(event){
           setTempoSliderVal(() => event.target.value);  
       }

    //SLIDERBANK2

    //Attack Slider
    const [Aslide, setASliderVal] = useState(0);

    function slideA(event){
        setASliderVal(() => event.target.value);  
    }

    //Decay Slider
    const [Dslide, setDSliderVal] = useState(0.5);

    function slideD(event){
        setDSliderVal(() => event.target.value);  
    }

    //Sustain Slider
    const [Sslide, setSSliderVal] = useState(0.);

    function slideS(event){
        setSSliderVal(() => event.target.value);  
    }


       //Release Slider
       const [Rslide, setRSliderVal] = useState(0);

       function slideR(event){
           setRSliderVal(() => event.target.value);  
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
            document.querySelector('.dropdown').style.opacity = '100';

        }
        else{
            document.querySelector('.dropdown').style.opacity= '0';
        }
        
    }
    

    return(
        <div>

        <div className="sliders">

        <div className="sliderset1">

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

        </div>

        <div className="sliderset2">

        <div className="uielement">
        <input type="range" min="0" max="3" value={Aslide} onChange={slideA} class="slider" step={0.01}></input>
        <p>ATTACK</p>
        </div>
        

        <div className="uielement">
        <input type="range" min="0.01" max="3" value={Dslide} onChange={slideD} class="slider" step={0.01}></input>
        <p>DECAY</p>
        </div>
        

        <div className="uielement">
        <input type="range" min="0" max="1" value={Sslide} onChange={slideS} class="slider" step={0.01}></input>
        <p>SUSTAIN</p>
        </div>
      
        
        <div className="uielement">
        <input type="range" min="0" max="3" value={Rslide} onChange={slideR} class="slider" step={0.01}  ></input>
        <p>RELEASE</p>
        </div>


        </div>
        

        </div>
        
        <div className="centerui">
            <button onClick={dropdowntoggle}>STYLE</button>
            <ul className="dropdown">
            <li>RHYTHM</li>
            <li>DRONE</li>
            <li>POLYRHYTHM</li>
            <li>SAMPLE</li>
            <li>POLYSAMPLE</li>
            </ul>


        </div>
        
        
        <Sequencer freq={freqslide} vol={volslide} vol2={vol2slide} ctrl={ctrlinterface} tempo={temposlide} a={Aslide} d ={Dslide} s={Sslide} r={Rslide}/>
        
       
       

           

        </div>
    )

}
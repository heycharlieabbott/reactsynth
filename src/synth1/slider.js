import React, { useEffect, useRef, useState } from "react";

import Sequencer from "./sequencer";




export default function Slider(props){

    //SLIDERBANK1

    //Frequency Slider
    const [freqslide, setFreqSliderVal] = useState(-200);

    function slideFreq(event){
        setFreqSliderVal(() => event.target.value);  
    }

    //Osc Volume Slider
    const [volslide, setVolSliderVal] = useState(-20);

    function slideVol(event){
        setVolSliderVal(() => event.target.value);  
    }

    //Verb roomSize Slider
    const [vol2slide, setVol2SliderVal] = useState(.75);

    function slideVol2(event){
        setVol2SliderVal(() => event.target.value);  
    }


       //Tempo Slider
       const [temposlide, setTempoSliderVal] = useState(120);

       function slideTempo(event){
           setTempoSliderVal(() => event.target.value);  
       }

       const [modslide, setModSliderVal] = useState(0.);

       function slideMod(event){
           setModSliderVal(() => event.target.value);  
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

       //DRY / WET Slider
       const [Par2slide, setPar2SliderVal] = useState(0);

       function slidePar2(event){
           if (event.target.value >= 0.09){
            setPar2SliderVal(() => event.target.value);
           }
            else setPar2SliderVal(0);
       }

       //Filter Slider
       const [filterslide, setFilterSliderVal] = useState(0.5);

       function slideFilter(event){
         
            setFilterSliderVal(() => event.target.value);
         
       }




    const ctrlinterface = {
        freq: freqslide, 
        vol: volslide, 
        vol2: vol2slide
    };


    const [scale, setScale] = useState(0);

    function click0(event){
        setScale(0);
        
    }

    function click1(event){
    
        setScale(1);
        
    }

    function click2(event){
    
        setScale(2);
        
    }

    function click3(event){
    
        setScale(3);
        
    }

    function click4(event){
    
        setScale(4);
        
    }



    const [liststyle, setListStyle] = useState({
        'opacity': 0 });

    function changestyle() {
        
        setListStyle({'opacity': 100})
    }

    function changestyle2(){
        
        setListStyle({'opacity': 0})
    }

    const[toggle, setToggle] = useState(true);

    function toggler(){
        setToggle(!toggle);
        toggle ? changestyle() : changestyle2();
       
        
        
    }

    

    return(
        <div className="app">

        <div className="sliders">

        <div className="sliderset1">

        <div className="uielement">
        <input type="range" min="-80" max="-10" value={volslide} onChange={slideVol} className="slider"></input>
        <p>VOLUME</p>
        </div>

        <div className="uielement">
        <input type="range" min="50" max="700" value={temposlide} onChange={slideTempo} className="slider"   ></input>
        <p>TEMPO: {temposlide}</p>
        </div>

        <div className="uielement">
        <input type="range" min="-2000" max="2000" value={freqslide} onChange={slideFreq} className="slider"></input>
        <p>PITCH</p>
        </div>
        
    
        <div className="uielement">
        <input type="range" min="0" max="1" value={modslide} onChange={slideMod} className="slider" step={0.01}  ></input>
        <p>MODULATION</p>
        </div>

        <div className="uielement">
        <input type="range" min="0" max="1" value={vol2slide} onChange={slideVol2} className="slider" step={0.01}></input>
        <p>VERB TIME</p>
        </div>     


        </div>

        <div className="sliderset2">

        <div className="uielement">
        <input type="range" min="0" max="3" value={Aslide} onChange={slideA} className="slider" step={0.01}></input>
        <p>ATTACK</p>
        </div>
        

        <div className="uielement">
        <input type="range" min="0.01" max="3" value={Dslide} onChange={slideD} className="slider" step={0.01}></input>
        <p>DECAY</p>
        </div>
        

        <div className="uielement">
        <input type="range" min="0" max="1" value={Sslide} onChange={slideS} className="slider" step={0.01}></input>
        <p>SUSTAIN</p>
        </div>
      
        
        <div className="uielement">
        <input type="range" min="0" max="3" value={Rslide} onChange={slideR} className="slider" step={0.01}  ></input>
        <p>RELEASE</p>
        </div>


        <div className="uielement">
        <input type="range" min="0" max="1" value={Par2slide} onChange={slidePar2} className="slider" step={0.01}  ></input>
        <p>DRY / WET</p>
        </div>

       
        

        </div>

        <div className="uielement2">
        <input type="range" min="0.1" max="1" value={filterslide} onChange={slideFilter} className="slider" step={0.01}  ></input>
        <p>FILTER DELAY</p>
        </div>
        

        </div>
        
        <div className="centerui">
            <button onClick={() => toggler()}>SCALES</button>
            
            <ul className="dropdown" style={liststyle}>
            <li onClick={() => click0()}>SCALE 1</li>
            <li onClick={() => click1()}>SCALE 2</li>
            <li onClick={() => click2()}>SCALE 3</li>
            <li onClick={() => click3()}>SCALE 4</li>
            <li onClick={() => click4()}>SCALE 5</li>
            </ul>

        </div>
        
        
        <Sequencer freq={freqslide} 
                    vol={volslide} 
                    vol2={vol2slide} 
                    ctrl={ctrlinterface} 
                    tempo={temposlide} 
                    a={Aslide} 
                    d ={Dslide} 
                    s={Sslide} 
                    r={Rslide} 
                    scaler={scale}
                    mod={modslide}
                    par2={Par2slide}
                    filter={filterslide}/>
        
       
       

           

        </div>
    )

}
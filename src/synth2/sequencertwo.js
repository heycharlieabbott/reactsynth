import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Scale } from "@tonaljs/tonal";
import Chaintwo from "./chaintwo";



const loop = new Tone.Loop();
const recorder = new Tone.Recorder();


export default function Sequencertwo(props){

    function shuffle(array) {
        var m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }



const [notes, setNotes] = useState(Scale.get('c5 mixolydian').notes);

useEffect(() =>{
    if (props.scaler === 1){
        setNotes(Scale.get('b4 ionian').notes)
       
       
    }
    if (props.scaler === 0){
        setNotes(Scale.get('c5 pentatonic').notes)
    

    }

    if (props.scaler === 2){
        setNotes(Scale.get('f3 pentatonic').notes)
    

    }

    if (props.scaler === 3){
        setNotes(Scale.get('d4 malkos raga').notes)
    

    }

    if (props.scaler === 4){
        setNotes(Scale.get('g4 phrygian').notes)
    

    }

    if (props.scaler === 5){
        setNotes(Scale.get('e2 dorian').notes)
    

    }

},[props.scaler])





const [note,setNote] = useState(notes[0]);
const [note2,setNote2] = useState(notes[1]);

const [offsetslider, setOffsetSliderVal] = useState(0);

function slideOffset(event){
    setOffsetSliderVal(() => event.target.value);  
}

const [notelength, setNoteLengthSliderVal] = useState(1);

function slideNoteLength(event){
    setNoteLengthSliderVal(() => event.target.value);  
}


const [steps, setSteps] = useState(0);

const [clockstatus, setClockStatus] = useState(false);

const [looptime, setLoopTime] = useState(0);


const startclock = () => {
    
    loop.start();
    setClockStatus(true);
    
}

const stopclock = () => {
   
    loop.stop();
    setClockStatus(false);
}

function loopstep(time){ 
  
}

//RECORDING FUNCTION
const [buttontext, setButtonText] = useState('RECORD 10 SECONDS')
const record = () =>{
    recorder.start();
    setButtonText('NOW RECORDING');
    setTimeout(async () => {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
    setButtonText('RECORD 10 SECONDS')
    }, 10000);

}
   




return(
    <div>

    <div  className="sequencer">
    <button className="shufflebutton" onClick={() => setNotes(shuffle(notes))}> SHUFFLE</button>
    
        <Chaintwo freq={props.freq} 
                vol={props.vol} 
                vol2={props.vol2} 
                ctrl={props.ctrl} 
                trigger={steps} 
                clockstatus={clockstatus} 
                looptime={looptime} 
                a={props.a} d ={props.d} s={props.s} r={props.r} 
                note={note} note2={note2} 
                transport={Tone.Transport} 
                offset={offsetslider}
                notelength={notelength}
                mod={props.mod}
                par2={props.par2}
                filter={props.filter}
                recorder={recorder}/>

        <button className="card1" onClick={() => startclock()}>START LOOOP</button>
        <button className="card1" onClick={() => stopclock()}>STOP LOOOP</button>
        <button className='card1' onClick={() => record()}> {buttontext}</button>
        <button className='card1' onClick={() => setSteps(steps + 1)}> PLAY3</button>
        
        
    </div>

    <div className="rightpatternctrl">

  
        
      

    {/* <div className="offsetslider">
        <input type="range" min="-.5" max=".5" value={offsetslider} onChange={slideOffset} class="slider"  step={0.1} ></input>
        <p>OFFSET</p>
        </div> */}
       
    </div>  

    </div>
)


}
import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import Chain from "./chain";
import { Scale } from "@tonaljs/tonal";



const loop = new Tone.Loop();



export default function(props){

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

const [steplight, setStepLight] = useState(0);

const [_STEPS, set_STEPS] = useState(8);


Tone.Transport.bpm.value = props.tempo;

//const[tempo, setTempo] = useState(Tone.Transport.bpm.value);



loop.callback = loopstep;
loop.interval = "8n";



const steparray = new Array(_STEPS);
steparray.fill(0);
steparray.forEach((element,index) => steparray[index] = index);

const steprefs = new Array(_STEPS);
steprefs.fill(0);
steprefs.forEach((element,index) => steprefs[index] = useRef(0));

const stepburgh = steparray.map( (number) => 
<li key={number.toString()} ref={steprefs[number]} className={'sq'}></li>);

const startclock = () => {
    Tone.Transport.start();
    loop.start();
    setClockStatus(true);
    
}

const stopclock = () => {
    Tone.Transport.stop();
    loop.stop();
    setClockStatus(false);
}

function loopstep(time){
    
    setSteps(steps + 1);
    setStepLight(steps % _STEPS);
    setLoopTime(time);

    setNote(Tone.Frequency(notes[steps % notes.length]).toFrequency());
    setNote2(Tone.Frequency(notes[(steps + 1) % notes.length]).toFrequency());
    
    if (stepburgh[0].ref.current.className = 'sqa'){
        stepburgh[stepburgh.length-1].ref.current.className = 'sq';
    }

    if (stepburgh[steplight-1].ref.current.className = 'sqa' ){
        stepburgh[steplight - 1].ref.current.className = 'sq';
         
    }
    
    stepburgh[steplight].ref.current.className = 'sqa';   
  
}





return(
    <div>

    <div  className="sequencer">
    <button className="shufflebutton" onClick={() => setNotes(shuffle(notes))}> SHUFFLE</button>
    
        <Chain freq={props.freq} 
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
                filter={props.filter}/>

        <button className="card1" onClick={() => startclock()}>START LOOOP</button>
        <button className="card1" onClick={() => stopclock()}>STOP LOOOP</button>
        
        
    </div>

    <div className="rightpatternctrl">

  
        
      

    <div className="offsetslider">
        <input type="range" min="-.5" max=".5" value={offsetslider} onChange={slideOffset} class="slider"  step={0.1} ></input>
        <p>OFFSET</p>
        </div>
       
    </div>  

    <div className="steps">

        <div className="notelength">
        <input type="range" min="0.01" max="4" value={notelength} onChange={slideNoteLength} class="slider" step={0.01}></input>
        <p>NOTE LENGTH</p>
        </div>

        <ul>
        {stepburgh}
        </ul>
    </div>

    </div>
)


}
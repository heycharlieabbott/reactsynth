import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import Chain from "./chain";
import { Note, Scale } from "@tonaljs/tonal";



const loop = new Tone.Loop();


export default function(props){

const notes = Scale.get('c5 mixolydian').notes;



const [note,setNote] = useState(notes[0]);
const [note2,setNote2] = useState(notes[1]);




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

// useEffect(() => {
//     // loopstep(0);
//     // setSteps(0);
// },[]);

function loopstep(time){
    
    setSteps(steps + 1);
    setStepLight(steps % _STEPS);
    setLoopTime(time);
    setNote(Tone.Frequency(notes[steps % notes.length]).toFrequency());
    setNote2(Tone.Frequency(notes[(steps + 5) % notes.length]).toFrequency());
    
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
        <Chain freq={props.freq} vol={props.vol} vol2={props.vol2} ctrl={props.ctrl} trigger={steps} clockstatus={clockstatus} looptime={looptime} a={props.a} d ={props.d} s={props.s} r={props.r} note={note} note2={note2} transport={Tone.Transport}/>
        <button className="card1" onClick={() => startclock()}>START LOOOP</button>
        <button className="card1" onClick={() => stopclock()}>STOP LOOOP</button>
    </div>

    <div className="steps">
        <ul>
        {stepburgh}
        </ul>
    </div>

    </div>
)


}
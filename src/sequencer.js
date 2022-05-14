import React, { useRef, useState } from "react";
import * as Tone from "tone";
import Chain from "./chain";


const loop = new Tone.Loop();


export default function(props){

const [steps, setSteps] = useState(0);

const [clockstatus, setClockStatus] = useState(false);

const [looptime, setLoopTime] = useState(0);

const [steplight, setStepLight] = useState(0);

Tone.Transport.bpm.value = props.tempo;

loop.callback = loopstep;
loop.interval = "4n";


function loopstep(time){
    setSteps(() => steps + 1);
    setStepLight(() => steps % 6);
    setLoopTime(()=> time);
    
    stepburgh[steplight].ref.current.style.backgroundColor = 'red';
    if (stepburgh[steplight - 1].ref.current.style.backgroundColor = 'red' ){
        stepburgh[steplight - 1].ref.current.style.backgroundColor = 'blue';
        
    }
  
}

const startclock = () => {
    Tone.Transport.start();
    loop.start();
    setClockStatus(() => true);
    
}

const stopclock = () => {
    Tone.Transport.stop();
    loop.stop();
    setClockStatus(() => false);
}



const steparray = new Array(6);
steparray.fill(0);
steparray.forEach((element,index) => steparray[index] = index);

const steprefs = new Array(6);
steprefs.fill(0);
steprefs.forEach((element,index) => steprefs[index] = useRef(0));

const stepburgh = steparray.map( (number) => 
<li key={number.toString()} ref={steprefs[number]} style={{backgroundColor:'blue'}}></li>
)


// stepburgh[steplight].ref.current.style.backgroundColor = 'red';



return(
    <div>

    <div  className="sequencer">
        <Chain freq={props.freq} vol={props.vol} vol2={props.vol2} ctrl={props.ctrl} trigger={steps} clockstatus={clockstatus} looptime={looptime}/>
        <button className="card1" onClick={startclock}>START LOOOP</button>
        <button className="card1" onClick={stopclock}>STOP LOOOP</button>
    </div>

    <div className="steps">
        <ul>
        {stepburgh}
        </ul>
    </div>

    </div>
)


}
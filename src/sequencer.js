import React, { useState } from "react";
import * as Tone from "tone";
import Chain from "./chain";


const loop = new Tone.Loop();


export default function(props){

const [steps, setSteps] = useState(0);

const [clockstatus, setClockStatus] = useState(false);

const [looptime, setLoopTime] = useState(0);

Tone.Transport.bpm.value = props.tempo;

loop.callback = loopstep;
loop.interval = "4n";


function loopstep(time){
    setSteps(() => steps + 1);
    setLoopTime(()=> time);
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




return(
    <div>

    <div  className="sequencer">
        <Chain freq={props.freq} vol={props.vol} vol2={props.vol2} ctrl={props.ctrl} trigger={steps} clockstatus={clockstatus} looptime={looptime}/>
        <button className="card1" onClick={startclock}>START LOOOP</button>
        <button className="card1" onClick={stopclock}>STOP LOOOP</button>
    </div>

    <div className="steps">
        <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    </div>

    </div>
)


}
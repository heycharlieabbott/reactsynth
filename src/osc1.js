import React from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();

const loop = new Tone.Loop(loopstep, "4n");

function loopstep(time){
    synth.triggerAttackRelease(500, 0.1,time);
}



export default function Osc1(props){


    synth.connect(props.output);
    synth2.connect(props.output);

    console.log(props.ctrl);



    function playSynth(){

        synth.triggerAttackRelease(props.freq,0.1);
        synth2.triggerAttackRelease(props.freq * Math.random(),0.1);
        // Tone.Transport.start();
        // loop.start();

    }

    

    return(
        <div>
    
            <button  className="card1" onClick={playSynth}> PLAY NOTE</button>
           

        </div>
    )
}
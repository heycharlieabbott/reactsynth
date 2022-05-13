import React, { useEffect } from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();


export default function Osc1(props){


    synth.connect(props.output);
    synth2.connect(props.output);

    console.log(props.ctrl);



    function playSynth(){

            synth.triggerAttackRelease(props.freq,0.1);
            synth2.triggerAttackRelease(props.freq * Math.random(),0.1);   
   

    }

    useEffect(()=> {playSynth()},[props.trigger])

    

    return(
        <div>
    
            <button  className="card1" onClick={playSynth}> PLAY NOTE</button>
           

        </div>
    )
}
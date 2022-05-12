import React from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth().connect(Tone.Destination);
//const synth2 = new Tone.AMSynth().connect(props.output);



export default function Testo(props){





    function playSynth(){

        synth.triggerAttackRelease(props.freq,0.1);

    }

    return(
        <div>
    
            <button  className="card1" onClick={playSynth}> PLAY SYNTH</button>
           

        </div>
    )
}
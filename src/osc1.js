import React from "react";
import * as Tone from 'tone';



export default function Testo(props){
    // const eyy = [props.sound];
    // const yo = eyy.map((item) => {
    //     return item  + Math.random();
    // })



const synth = new Tone.AMSynth().connect(props.output);
const synth2 = new Tone.AMSynth().connect(props.output);

    function playSynth(){
        synth.triggerAttackRelease(3000 * Math.random(),.01);
        
        setTimeout( () => synth2.triggerAttackRelease(2000  * Math.random(),.01),500);

    }

    return(
        <div>
    
            <button  className="card1" onClick={playSynth}> AHAHAHAHAH</button>
           

        </div>
    )
}
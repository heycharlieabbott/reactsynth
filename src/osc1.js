import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();


export default function Osc1(props){


    synth.connect(props.output);
    synth2.connect(props.output);

    // console.log(props.ctrl);



    function playSynth(time){

          
                
            synth.triggerAttackRelease(props.freq,0.1, time);
            synth2.triggerAttackRelease(props.freq * Math.random(),0.1, time);   
            

   

    }

    function playSynthButton(){

          
                
        synth.triggerAttackRelease(props.freq,0.1);
        synth2.triggerAttackRelease(props.freq * Math.random(),0.1);   
        



}

    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            playSynth(props.looptime);
            
            
        }
        
        else{
            ref.current = true;
        }

        },[props.trigger]);
    

    return(
        <div>
    
            <button className="card1" onClick={playSynthButton}> PLAY NOTE</button>
           

        </div>
    )
}
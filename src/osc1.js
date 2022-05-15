import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();

const osc = new Tone.Oscillator(440, 'sine');
const osc2 = new Tone.Oscillator(900, 'sine');

export default function Osc1(props){

    osc.start();
    osc2.start(); 


    synth.connect(props.output);
    synth2.connect(props.output);

    osc.connect(props.output);
    osc2.connect(props.output);


    function playSynth(time){

          
                
            // synth.triggerAttackRelease(props.freq,0.1, time);
            // synth2.triggerAttackRelease(props.freq * Math.random(),0.1, time);   
            

   

    }

    function playSynthButton(){

        //  osc.start();
        //  osc2.start(); 
                
        // synth.triggerAttackRelease(props.freq,0.1);
        // synth2.triggerAttackRelease(props.freq * Math.random(),0.1);   


        



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
    
            {/* <button className="card1" onClick={playSynthButton}> PLAY NOTE</button> */}
           

        </div>
    )
}
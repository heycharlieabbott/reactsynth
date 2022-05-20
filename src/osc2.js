import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();

const osc = new Tone.Oscillator(440, 'sine');
const osc2 = new Tone.Oscillator(900, 'sine');

export default function Osc2(props){
    
    
    const callback = () =>{
        osc.set({
            frequency: props.note,
            // detune: props.detune
        })
    
        osc2.set({
          
      })
       

    }

    osc.start();
   

    osc.connect(props.output);
    // osc2.connect(props.output);

    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            callback();    
            
        }
        
        else{
            ref.current = true;
        }

        },[props.trigger]);
    

  
}
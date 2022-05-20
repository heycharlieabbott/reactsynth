import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();

const osc = new Tone.Oscillator(700, 'sine');
const osc2 = new Tone.LFO(1000, 0,1000);

export default function Osc1(props){
    
    
    const callback = () =>{
        osc.set({
            frequency: props.note,
            // detune: props.detune
            
        })
    
        osc2.set({
            amplitude: props.mod,
            
    

      })
       

    }

    osc.start();
    osc2.start(); 

    osc.set({
        detune: props.detune,
        
    })


    // synth.connect(props.output);
    // // synth2.connect(props.output);

    osc.connect(props.output);
    // osc2.connect(osc.frequency);

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
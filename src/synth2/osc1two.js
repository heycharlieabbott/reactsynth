import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import * as Tone from 'tone';




const osc = new Tone.GrainPlayer();
const buf = new Tone.ToneAudioBuffer();
// osc.autostart = true;


const osc2 = new Tone.LFO(1, 0,50);
const lfovol = new Tone.Multiply();
const sigzero = new Tone.Signal(0);
const sigone = new Tone.Signal(1);

export default function Osc1two(props){

   

    osc.set({
        buffer:buf,
        loopStart: 0.01,
        loopEnd: props.filter,
        loop: true,
        playbackRate: props.filter,
        grainSize: props.filter
    })

    osc.start();

    osc.set({
        detune: props.freq
        
    })
    
   
    
    const callback = () =>{
       
        osc.set({
           
            

            
        })

        
        
    
        osc2.set({
            amplitude: props.mod,
            
    

      })
       

    }

    osc.connect(props.output);
    osc2.connect(lfovol);
 

    if(props.mod >= 0.1){
        sigone.connect(lfovol.factor);
       
    }
    else{
       sigzero.connect(lfovol.factor);
       lfovol.dispose();
        
    }
        

   
    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            callback();    
            
        }
        
        else{
            ref.current = true;
            buf.load(props.aud);
            
            osc2.start(); 
        }

        },[props.trigger]);
    

  
}
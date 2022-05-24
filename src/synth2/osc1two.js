import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import * as Tone from 'tone';



// const osc = new Tone.Oscillator(700, 'sine4');

// const buf = new Tone.ToneAudioBuffer('audio1.mp3', () =>{console.log('isloaded')});

// const osc = new Tone.GrainPlayer(buf)

const osc = new Tone.Player('https://tonejs.github.io/audio/berklee/arpeggio3crazy.mp3');

osc.autostart = true;


const osc2 = new Tone.LFO(1, 0,50);
const lfovol = new Tone.Multiply();
const sigzero = new Tone.Signal(0);
const sigone = new Tone.Signal(1);
const sigprops = new Tone.Signal();

export default function Osc1two(props){

   const hey = fetch('/audio1.mp3').then(console.log('hey'));
   console.log(hey);

    sigprops.set({
        value: props.freq
        
    })
    
   
    
    const callback = () =>{
        console.log(osc);
        osc.set({
            // frequency: props.note,
            // detune: props.detune
            

            
        })

        // sigprops.set({
        //     value: props.note
            
        // })

        
        
    
        osc2.set({
            amplitude: props.mod,
            
    

      })
       

    }

  

    // osc.set({
    //     detune: props.detune,
        
    // })

    osc.connect(props.output);
    osc2.connect(lfovol);
    // lfovol.connect(osc.frequency);
    

    if(props.mod >= 0.1){
        sigone.connect(lfovol.factor);
       
    }
    else{
       sigzero.connect(lfovol.factor);
       lfovol.dispose();
      
       
        // sigprops.connect(osc.frequency);


        

       
        
    }
        

   
    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            callback();    
            
        }
        
        else{
            ref.current = true;
            
            osc2.start(); 
        }

        },[props.trigger]);
    

  
}
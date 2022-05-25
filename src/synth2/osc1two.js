import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import * as Tone from 'tone';
// import audio1 from '../public/audio1.mp3'



// const osc = new Tone.Oscillator(700, 'sine4');

// const buf = new Tone.ToneAudioBuffer('audio1.mp3', () =>{console.log('isloaded')});

// const osc = new Tone.GrainPlayer(buf)

// const osc = new Tone.Player('https://tonejs.github.io/audio/berklee/arpeggio3crazy.mp3');
const osc = new Tone.GrainPlayer();

const buf = new Tone.ToneAudioBuffer();


osc.autostart = true;


const osc2 = new Tone.LFO(1, 0,50);
const lfovol = new Tone.Multiply();
const sigzero = new Tone.Signal(0);
const sigone = new Tone.Signal(1);
const sigprops = new Tone.Signal();

export default function Osc1two(props){
     buf.load(props.aud);
    osc.set({
        buffer:buf,
        loopStart: 0.,
        loopEnd: .75,
        loop: true
    })

    osc.start();

   
   

    osc.set({
        detune: props.freq
        
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
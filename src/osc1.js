import React, { useEffect, useLayoutEffect, useRef, useState} from "react";
import * as Tone from 'tone';

const synth = new Tone.AMSynth();
const synth2 = new Tone.AMSynth();

const osc = new Tone.Oscillator(440, 'sine');
const osc2 = new Tone.Oscillator(900, 'sine');

export default function Osc1(props){
    
// const [hey,setHey] = useState(100);
// setHey(props.note * props.freq);
    
    const callback = () =>{
        osc.set({
            frequency: props.note
        })
    
        osc2.set({
          frequency: props.note2
      })
       

    }

    osc.start();
    osc2.start(); 


    synth.connect(props.output);
    synth2.connect(props.output);

    osc.connect(props.output);
    osc2.connect(props.output);

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
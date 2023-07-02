import { useEffect, useRef} from "react";
import * as Tone from 'tone';

const osc = new Tone.Oscillator(700, 'sine4');
const osc2 = new Tone.LFO(1, 0,50);
const lfovol = new Tone.Multiply();
const sigzero = new Tone.Signal(0);
const sigone = new Tone.Signal(1);
const sigprops = new Tone.Signal();

export default function Osc1(props){

    sigprops.set({
        value: props.freq
        
    })
   
    
    const callback = () =>{
        osc.set({
            frequency: props.note,
            detune: props.detune
            
        })

        sigprops.set({
            value: props.note
            
        }) 
    
        osc2.set({
            amplitude: props.mod,

      })
       

    }


    osc.connect(props.output);
    osc2.connect(lfovol);
    lfovol.connect(osc.frequency);
    

    if(props.mod >= 0.1){
        sigone.connect(lfovol.factor);
       
    }
    else{
       sigzero.connect(lfovol.factor);
       lfovol.dispose();
      
       
        sigprops.connect(osc.frequency);
        
    }
        

   
    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            callback();    
            
        }
        
        else{
            ref.current = true;
            osc.start();
            osc2.start(); 
        }

        },[props.trigger]);

}
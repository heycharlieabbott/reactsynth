import { useContext, useEffect, useRef} from "react";
import * as Tone from 'tone';
import synth2Context from "./synth2context";



const osc = new Tone.GrainPlayer();
const buf = new Tone.ToneAudioBuffer();
// osc.autostart = true;


export default function Osc2two(props){
    const state = useContext(synth2Context);

   

    osc.set({
        buffer:buf,
        loop: true,
        loopStart: 0.01,
        loopEnd: state.par13,
        playbackRate: state.par13,
        grainSize: state.par13,
        detune: state.par12
    })

    osc.start();
    
   
    
    const callback = () =>{
    
    }

    buf.load(props.aud);

    osc.connect(props.output);
   
    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            callback();    
           
        }
        
        else{
            ref.current = true;
            buf.load(props.aud);
        }

        },[props.trigger]);

       
        
}


import { useContext, useEffect, useRef} from "react";
import * as Tone from 'tone';
import synth2Context from "./synth2context";



const osc = new Tone.GrainPlayer();
const buf = new Tone.ToneAudioBuffer();
// osc.autostart = true;


export default function Osc1two(props){
    const state = useContext(synth2Context);

   

    osc.set({
        buffer:buf,
        loop: true,
        loopStart: 0.01,
        loopEnd: state.par3,
        playbackRate: state.par3,
        grainSize: state.par3,
        detune: state.par2
    })

    osc.start();
    
   
    
    const callback = () =>{
    
    }

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
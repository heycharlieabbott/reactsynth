import React, {useState, useContext} from "react";
import * as Tone from "tone";
import Chaintwo from "./chaintwo";
import synth2Context from "./synth2context";



const loop = new Tone.Loop();
const recorder = new Tone.Recorder();


export default function Sequencertwo(props){
const state = useContext(synth2Context);


const [steps, setSteps] = useState(0);

const [clockstatus, setClockStatus] = useState(false);

const [looptime, setLoopTime] = useState(0);


const startclock = () => {
    
    loop.start();
    setClockStatus(true);
    
}

const stopclock = () => {
   
    loop.stop();
    setClockStatus(false);
}

function loopstep(time){ 
  
}

return(
    <>
        <Chaintwo  
                vol={state.par1} 
             
                trigger={steps} 
                clockstatus={clockstatus} 
                looptime={looptime}
               
                transport={Tone.Transport} 
                />

      
        
    </>

)


}
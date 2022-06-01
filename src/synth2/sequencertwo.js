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

//RECORDING FUNCTION
const [buttontext, setButtonText] = useState('Record 10 Seconds')
const record = () =>{
    recorder.start();
    setButtonText('NOW RECORDING');
    setTimeout(async () => {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop();
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording);
    const anchor = document.createElement("a");
    anchor.download = "recording.webm";
    anchor.href = url;
    anchor.click();
    setButtonText('RECORD 10 SECONDS')
    }, 10000);

}

return(
    <>
        <Chaintwo  
                vol={state.par1} 
             
                trigger={steps} 
                clockstatus={clockstatus} 
                looptime={looptime}
               
                transport={Tone.Transport} 
                recorder={recorder}/>

      <div className="centersection">
      
      <label for='fileleft'>Preset Left</label>
      <select className='FileLeft' id='fileleft' name="Preset Left" >
      <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      

      <label for='fileright' > Preset Right</label>
      <select className='FileRight' id="fileright">
      <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

        <button className='Record' onClick={() => record()}> {buttontext}</button>  
        
        

        <button className='PlayBoth' > Play Both</button>
    
        </div>  
        
    </>

)


}
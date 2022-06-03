import React, { useRef, useEffect, useContext, useState} from 'react';
import '../index.css';
import * as Tone from 'tone';
import Osc1two from './osc1two';
import Osc2two from './osc2two';
// import audio1 from './audio1.mp3'
// import audio2 from './sound1.wav'
import synth2Context from "./synth2context";

const recorder = new Tone.Recorder();



const volume1 = new Tone.PanVol();
const volume2 = new Tone.PanVol();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();

const crossfade = new Tone.CrossFade();
const meter = new Tone.Meter();

const lim = new Tone.Limiter(-50);

var a;
var b;
export default function Chaintwo(props){
  const state = useContext(synth2Context);

  const [aud, setAud] = useState(null);
  
  env.attack = state.par5;
  env.decay = state.par6;
  env.sustain = state.par7;
  env.release = state.par8;

  env2.attack = state.par15;
  env2.decay = state.par16;
  env2.sustain = state.par17;
  env2.release = state.par18;

  crossfade.fade.value = state.crossfade;

 env.connect(volume1);
 volume1.connect(crossfade.a);

 env2.connect(volume2);
 volume2.connect(crossfade.b);

 crossfade.connect(meter);
 meter.fan(recorder, Tone.Destination)

// const playSynth = (time) =>{
//   setTimeout(() =>{
//     env.triggerAttackRelease(state.notelength, time);
//     env2.triggerAttackRelease(state.notelength, time);
    
//   },100);
// }
 
  volume1.volume.value = (state.par1);
  volume1.pan.value = (state.par9);

  volume2.volume.value = (state.par11);
  volume2.pan.value = (state.par10);


  const ref = useRef(false);

  // //set uploaded audio file for left
  // useEffect(()=> {
  //     if (ref.current){
  //       Tone.start();
  //         playSynth(props.looptime);   
          
  //     }
      
  //     else{
  //         ref.current = true;
  //     }

  //     },[props.trigger]);

  
      const [urlLeft, setUrlLeft] = useState(null);
      const [urlRight, setUrlRight] = useState(null);

      useEffect(()=>{
       
          setUrlLeft(a);
         
      },[a]);

       //set uploaded audio file for right
      // useEffect(()=> {
      //   if (ref.current){
      //     Tone.start();
      //       playSynth(props.looptime);   
            
      //   }
        
      //   else{
      //       ref.current = true;
      //   }
  
      //   },[props.trigger]);
  
    
        // const [url, setUrl] = useState(audio1);
  
        useEffect(()=>{
         
            setUrlRight(b);
           
        },[b]);
     
    
      const playNoteLeft = () =>{
        
        env.triggerAttackRelease(state.notelength);

        setTimeout(() =>{
          Tone.start();
          
          playNoteLeft();
         
          
         
          
        },1000)
      }

      const playNoteRight = () =>{
        Tone.start();
        
        env2.triggerAttackRelease(state.notelength);

        setTimeout(() =>{
          
          playNoteRight();
         
          
         
          
        },1000)
      }

      const audiosetLeft = (e) =>{
        a = (URL.createObjectURL(e.target.files[0]));
        setUrlLeft(a);
        
      }

      const audiosetRight = (e) =>{
        b = (URL.createObjectURL(e.target.files[0]));
        setUrlRight(b);
        
      }
      

      const playNoteBoth = () => {
        playNoteLeft();
        playNoteRight();
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



      return (
        <>
        
        <div className='chain2-left'>
           
          <button className='playbutton' id='playbuttonleft' onClick={ () =>playNoteLeft()}> PLAY NOTE</button>
          <label className='buttonlabel' for="playbuttonleft">Play Note</label>

          <input className='custom-file-input' id='fileleft' type='file' accept=".wav, .mp3, .aiff, .flac" onChange={audiosetLeft}></input>
          <label className='filelabel' for="fileleft">Select file</label>
          <audio src={urlLeft}></audio>
        </div>

        <div className='chain2-right'>
           
           <button className='playbutton' id='playbuttonright' onClick={ () =>playNoteRight()}> PLAY NOTE</button>
           <label className='buttonlabel' for="playbuttonright">Play Note</label>
 
           <input className='custom-file-input' id='fileright' type='file' accept=".wav, .mp3, .aiff, .flac" onChange={audiosetRight}></input>
           <label className='filelabel' for="fileright">Select file</label>
           <audio src={urlRight}></audio>
         </div>

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
        
        

        <button className='PlayBoth' onClick={() => playNoteBoth()} > Play Both</button>
    
        </div>  

         
        <Osc1two  
                  output={env}
                  trigger={props.trigger}
                  aud={urlLeft}
                 />  

        <Osc2two  
                  output={env2}
                  trigger={props.trigger}
                  aud={urlRight}
                 />   
        </>

      )

}
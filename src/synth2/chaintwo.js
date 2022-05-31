import React, { useRef, useEffect, useContext, useState} from 'react';
import '../index.css';
import * as Tone from 'tone';
import Osc1two from './osc1two';
import audio1 from './audio1.mp3'
import audio2 from './sound1.wav'
import synth2Context from "./synth2context";



const volume1 = new Tone.Volume();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();
const lim = new Tone.Limiter(-50);

var a;
export default function Chaintwo(props){
  const state = useContext(synth2Context);

  const [aud, setAud] = useState(null);
  
  env.attack = state.par5;
  env.decay = state.par6;
  env.sustain = state.par7;
  env.release = state.par8;

  env2.attack = state.par5;
  env2.decay = state.par6;
  env2.sustain = state.par7;
  env2.release = state.par8;

 env.connect(volume1);
 volume1.connect(Tone.Destination);
//  env2.connect(volume1);
 //lim.fan(props.recorder,Tone.Destination);

const playSynth = (time) =>{
  setTimeout(() =>{
    env.triggerAttackRelease(state.notelength, time);
    env2.triggerAttackRelease(state.notelength, time);
    
  },100);
}
 
  volume1.volume.value = (props.vol);


  const ref = useRef(false);

  useEffect(()=> {
      if (ref.current){
        Tone.start();
          playSynth(props.looptime);   
          
      }
      
      else{
          ref.current = true;
      }

      },[props.trigger]);

  
      const [url, setUrl] = useState(audio1);

      useEffect(()=>{
       
          setUrl(a);
         
      },[a]);
     
    
      const playNote = () =>{
        
        env.triggerAttackRelease(state.notelength);

        setTimeout(() =>{
          
          playNote();
         
          
         
          
        },1000)
      }

      const audioset = (e) =>{
        a = (URL.createObjectURL(e.target.files[0]));
        setUrl(a);
        
      }
      




      return (
        <>
        <div className='chain2-left'>
           
          <button className='playbutton' id='playbutton' onClick={ () =>playNote()}> PLAY NOTE</button>
          <label className='buttonlabel' for="playbutton">Play Note</label>

          <input className='custom-file-input' id='file' type='file' accept=".wav, .mp3, .aiff, .flac" onChange={audioset}></input>
          <label className='filelabel' for="file">Select file</label>
          <audio src={url}></audio>
        </div>

        <div className='chain2-right'>
           
           <button className='playbutton' id='playbutton' onClick={ () =>playNote()}> PLAY NOTE</button>
           <label className='buttonlabel' for="playbutton">Play Note</label>
 
           <input className='custom-file-input' id='file' type='file' accept=".wav, .mp3, .aiff, .flac" onChange={audioset}></input>
           <label className='filelabel' for="file">Select file</label>
           <audio src={url}></audio>
         </div>


        <Osc1two  
                  output={env}
                  trigger={props.trigger}
                  aud={url}
                 />  
        </>
      )

}
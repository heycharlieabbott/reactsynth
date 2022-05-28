import React, { useRef, useEffect, useContext, useState} from 'react';
import '../index.css';
import * as Tone from 'tone';
import Osc1two from './osc1two';
import audio1 from './audio1.mp3'
import synth2Context from "./synth2context";



const volume1 = new Tone.Volume();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();
const lim = new Tone.Limiter(-50);


export default function Chaintwo(props){
  const state = useContext(synth2Context);

  const [aud, setAud] = useState(audio1);
  
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

  
    
      const playNote = () =>{
        
        env.triggerAttackRelease(state.notelength);

        setTimeout(() =>{
          
          playNote();
          console.log(aud);
          
        },1000)
      }


      return (
        <div className='chain'>
          <Osc1two  
                  output={env}
                  trigger={props.trigger}
                  aud={aud}
                 />      
          <button className='card1' onClick={ () =>playNote()}> PLAY NOTE</button>
          <input className='card1' type='file' onChange={(e)=> {
            const url = window.URL.createObjectURL(e.target.files[0]);
            setAud(url);
            console.log(url);
            
          }}></input>
          <audio src={aud}></audio>
        </div>
      )

}
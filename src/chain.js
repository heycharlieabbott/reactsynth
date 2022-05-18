import React, { useState , useRef, useEffect} from 'react';
import './index.css';
import Osc1 from './osc1';
import Osc2 from './osc2';
import Verbo from './verbo';
import * as Tone from 'tone';



const volume1 = new Tone.Volume();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();
const lim = new Tone.Limiter(-50);




export default function Chain(props){
  
  env.attack = props.a;
  env.decay = props.d;
  env.sustain = props.s;
  env.release = props.r;

  env2.attack = props.a;
  env2.decay = props.d;
  env2.sustain = props.s;
  env2.release = props.r;

 env.connect(volume1);
 env2.connect(volume1);
 lim.connect(Tone.Destination);

const playSynth = (time, offset) =>{
  setTimeout(() =>{
    env.triggerAttackRelease(1, time);
    env2.triggerAttackRelease(1, time - offset);
    
  },100);


}
 
  volume1.volume.value = (props.vol);


  const ref = useRef(false);

  useEffect(()=> {
      if (ref.current){
          playSynth(props.looptime, props.offset);
          
          
      }
      
      else{
          ref.current = true;
      }

      },[props.trigger]);

    
      const playNote = () =>{
        env.triggerAttackRelease(1);
      }

  


      return (
        <div className='chain'>
          
          <Verbo input={volume1} 
          output={lim} 
          roomSize={props.vol2} />

          <Osc1   ctrl={props.ctrl} 
                  output={env} 
                  freq={props.freq} 
                  trigger={props.trigger} 
                  looptime={props.looptime} 
                  note={props.note} 
                  note2={props.note2} 
                  transport={props.transport}
                  detune={props.freq}/>
          
          <Osc2 
          ctrl={props.ctrl} 
          output={env2} 
          freq={props.freq} 
          trigger={props.trigger} 
          looptime={props.looptime} 
          note={props.note2} 
          note2={props.note2} 
          transport={props.transport}
          detune={props.freq}/>
          
          <button className='card1' onClick={playNote}> PLAY NOTE</button>
        </div>
      )

}
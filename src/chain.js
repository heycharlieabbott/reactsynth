import React, { useState , useRef, useEffect} from 'react';
import './index.css';
import Osc1 from './osc1';
import Verbo from './verbo';
import * as Tone from 'tone';



const volume1 = new Tone.Volume();
const env = new Tone.AmplitudeEnvelope();




export default function Chain(props){
  
  env.attack = props.a;
  env.decay = props.d;
  env.sustain = props.s;
  env.release = props.r;

 env.connect(volume1);

const playSynth = (time) =>{
  env.triggerAttackRelease(1, time);
}
 
  volume1.volume.value = (props.vol);


  const ref = useRef(false);

  useEffect(()=> {
      if (ref.current){
          playSynth(props.looptime);
          
          
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
          
          <Verbo input={volume1} output={Tone.Destination} roomSize={props.vol2} />
          <Osc1 ctrl={props.ctrl} output={env} freq={props.freq} trigger={props.trigger} looptime={props.looptime}/>
          <button className='card1' onClick={playNote}> PLAY NOTE</button>
        </div>
      )

}
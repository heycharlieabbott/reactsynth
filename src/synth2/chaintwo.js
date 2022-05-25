import React, { useState , useRef, useEffect} from 'react';
import '../index.css';
import * as Tone from 'tone';
import Osc1two from './osc1two';
import Osc2two from './osc2two';
import Verbotwo from './verbotwo';
import audio1 from './sound1.wav'



const volume1 = new Tone.Volume();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();
const lim = new Tone.Limiter(-50);





export default function Chaintwo(props){
  
  env.attack = props.a;
  env.decay = props.d;
  env.sustain = props.s;
  env.release = props.r;

  env2.attack = props.a;
  env2.decay = props.d;
  env2.sustain = props.s;
  env2.release = props.r;

 env.connect(volume1);
 volume1.connect(Tone.Destination);
//  env2.connect(volume1);
 //lim.fan(props.recorder,Tone.Destination);

const playSynth = (time) =>{
  setTimeout(() =>{
    env.triggerAttackRelease(props.notelength, time);
    env2.triggerAttackRelease(props.notelength, time);
    
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
        Tone.start();
        env.triggerAttackRelease(props.notelength);

      
      }

 


      return (
        <div className='chain'>
          
          <Verbotwo input={volume1} 
          output={lim} 
          roomSize={props.vol2}
          par2={props.par2}
          filter={props.filter}
          note={props.note}
          trigger={props.trigger} />

          <Osc1two   ctrl={props.ctrl} 
                  output={env} 
                  freq={props.freq} 
                  trigger={props.trigger} 
                  looptime={props.looptime} 
                  note={props.note} 
                  note2={props.note2} 
                  transport={props.transport}
                  detune={props.freq}
                  notelength={props.notelength}
                  mod={props.mod}
                  aud={audio1}/>
          
          {/* <Osc2two 
          ctrl={props.ctrl} 
          output={env2} 
          freq={props.freq} 
          trigger={props.trigger} 
          looptime={props.looptime} 
          note={props.note2} 
          note2={props.note2} 
          transport={props.transport}
          detune={props.freq}
          notelength={props.notelength}
          mod={props.mod}/> */}
          
          <button className='card1' onClick={playNote}> PLAY NOTE</button>
          <audio
     
        src={audio1}>
         </audio>
          
          

        </div>
      )

}
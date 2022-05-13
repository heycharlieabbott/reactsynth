import React, { useState } from 'react';
import './index.css';
import Osc1 from './osc1';
import Verbo from './verbo';
import * as Tone from 'tone';



const volume1 = new Tone.Volume();




export default function Chain(props){

 console.log(props.trigger);
 
  volume1.volume.value = (props.vol);


      return (
        <div>
          
        <Verbo input={volume1} output={Tone.Destination} roomSize={props.vol2} />
        <Osc1 ctrl={props.ctrl} output={volume1} freq={props.freq} trigger={props.trigger}/>
        


        </div>
      )

}
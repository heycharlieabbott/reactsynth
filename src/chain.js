import React, { useState } from 'react';
import './index.css';
import Osc1 from './osc1';
import Verbo from './verbo';
import * as Tone from 'tone';


export default function Chain(props){

//   const volume1 = new Tone.Volume(props.vol);



      return (
        <div>
          
        {/* <Verbo input={volume1} output={Tone.Destination} /> */}
        <Osc1 sound= 'hey' output={Tone.Destination} freq={props.vol}/>
        


        </div>
      )

}
import React from 'react';
import * as Tone from 'tone';

const verb = new Tone.Freeverb(.95)

export default function Verbo(props){

    
    verb.roomSize.value = props.roomSize;
    
    
    
    verb.connect(props.output);
    props.input.connect(verb);
   
}
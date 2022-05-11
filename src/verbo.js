import React from 'react';
import * as Tone from 'tone';


export default function Verbo(props){
    const verb = new Tone.Freeverb(.95).connect(props.output);

    props.input.connect(verb);



   
}
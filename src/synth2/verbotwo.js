import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';

const verb = new Tone.Freeverb(.95);
const filter = new Tone.BiquadFilter(1000);
const filter2 = new Tone.FeedbackCombFilter(.9, 0.9);
const fade = new Tone.CrossFade();
fade.value = 1;

export default function Verbotwo(props){

    verb.roomSize.value = props.roomSize;

    // verb.wet.value = props.par2;


    filter.set({
    
        frequency: props.filter * 800,
        Q: 30
    })

    filter2.set({
        
        resonance: props.filter,
        delayTime: props.filter / 3      
    })

    fade.fade.value = props.filter;

    const callback = () => {

        verb.roomSize.value = props.roomSize;

        verb.wet.value = props.par2;


        filter.set({
        
            frequency: props.filter * 800,
            Q: 30
        })
    
        filter2.set({
            
            resonance: props.filter,
            delayTime: props.filter / 3      
        })
    
        fade.fade.value = props.filter;

    }

    const ref = useRef(false);

    useEffect(()=> {
        if (ref.current){
            callback();    
            
        }
        
        else{
            ref.current = true;
        }

        },[props.trigger]);


    
    
    
    verb.fan(filter, fade.a);
   

    
    filter.connect(filter2);
    filter2.connect(fade.b);

    fade.connect(props.output)

    props.input.connect(verb);
   
}
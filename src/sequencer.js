import React from "react";
import * as Tone from "tone";
import Chain from "./chain";


const loop = new Tone.Loop();


export default function(props){


Tone.Transport.start();

loop.callback = loopstep;
loop.interval = "4n";


function loopstep(time){
    console.log(time);  
}


return(
    <div>
    <Chain freq={props.freq} vol={props.vol} vol2={props.vol2} ctrl={props.ctrl}/>
    <button className="card1" onClick={loop.start()}>START LOOOP</button>
    </div>
)


}
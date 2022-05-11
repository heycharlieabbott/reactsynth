import React, { useState } from "react";
import Chain from "./chain";
;



export default function Slider(props){

    const [sliderval, setSliderVal] = useState(500);

    function slide(event){
        setSliderVal(() => event.target.value);
        
    }

    
    

    return(
        <div>
        
        <Chain vol={sliderval}/>
        <input type="range" min="200" max="1000" value={sliderval} onChange={slide} class="slider"></input>
       

           

        </div>
    )

}
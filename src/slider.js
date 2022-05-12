import React, { useEffect, useRef, useState } from "react";
import Chain from "./chain";
;



export default function Slider(props){

    const [sliderval, setSliderVal] = useState(500);

    
    function slide(event){
        setSliderVal(() => event.target.value);
        //console.log(sliderval)
        
    }

    const sliref = useRef(500);

    function slide2(event){

    
 
    sliref.current = event.target.value;
    

    console.log(sliref.current);

    }



    
    

    return(
        <div>
        
        
        <input type="range" min="200" max="1000" onChange={slide} class="slider"></input>
        <Chain vol={sliderval}/>
       

           

        </div>
    )

}
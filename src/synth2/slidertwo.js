import React, { useReducer } from "react";
import Sequencertwo from "./sequencertwo";
import Synth2Context from './synth2context';

const reducer = (state, action) => {
    
    switch (action.type){
        case 'par1':
            return{...state,  par1: action.payload};    
        
        case 'par2':
            return{...state,  par2: action.payload};
            
        case 'par3':
            return{...state,  par3: action.payload};
            
        case 'par4':
            return{...state,  par4: action.payload};
        
        case 'par5':
            return{...state,  par5: action.payload};    
        
        case 'par6':
            return{...state,  par6: action.payload};
            
        case 'par7':
            return{...state,  par7: action.payload};
            
        case 'par8':
            return{...state,  par8: action.payload};

        case 'par9':
            return{...state,  par9: action.payload};

        case 'crossfade':
            return{...state,  crossfade: action.payload}; 

        case 'notelegth':
            return{...state, notelength: state.notelength};
    

        case 'par10':
            return{...state,  par10: action.payload};   

        case 'par11':
            return{...state,  par11: action.payload};    
        
        case 'par12':
            return{...state,  par12: action.payload};
            
        case 'par13':
            return{...state,  par13: action.payload};
            
        case 'par14':
            return{...state,  par14: action.payload};
        
        case 'par15':
            return{...state,  par15: action.payload};    
        
        case 'par16':
            return{...state,  par16: action.payload};
            
        case 'par17':
            return{...state,  par17: action.payload};
            
        case 'par18':
            return{...state,  par18: action.payload};

        case 'par19':
            return{...state,  par19: action.payload};

        default:
            throw new Error();
    }
}


export default function Slidertwo(props){

    const [state, dispatch] = useReducer(reducer, {
        //volume L
        par1: -20,
        //detune L
        par2: -200,
        //grain L
        par3: 1.5,
        //looptime L
        par4: 1000,
        //Attack L
        par5: 0,
        //Decay L
        par6: 0.5,
        //Sustain L
        par7: 0,
        //Release L
        par8: 0,
        //Pan Left L
        par9: 0.,
        //Length of ADSR Impulse
        notelength: 1,
        //Crossfade 
        crossfade: 0.5,
       
        //Pan Right R
        par10: 0.,
        //volume R
        par11: -20,
        //detune R
        par12: -200,
        //grain r
        par13: 1.5,
        //looptime R
        par14: 1000,
        //Attack R
        par15: 0,
        //Decay R
        par16: 0.5,
        //Sustain R
        par17: 0,
        //Release R
        par18: 0,
        //Pan Left R
        par19: 0.,
     
    })
    
    const sliderchange = (e, parnum) =>{
        dispatch ({type: parnum, payload: e.target.value})
    }

    return(
        <Synth2Context.Provider value={state}>
        <div className="app2">

        <div className="sliders2-left">

        <div className="ui2">
        <input type="range" min="-80" max="-10" value={state.par1} onChange={(e) => sliderchange(e,'par1')} className="slider2"></input>
        <p>VOLUME</p>
        </div>

        <div className="ui2">
        <input type="range" min="0" max="3" value={state.par5} onChange={(e) => sliderchange(e, 'par5')} className="slider2" step={0.01}></input>
        <p>ATTACK</p>
        </div>
        

        <div className="ui2">
        <input type="range" min="-2000" max="2000" value={state.par2} onChange={(e) => sliderchange(e, 'par2')} className="slider2"></input>
        <p>PITCH</p>
        </div>

        <div className="ui2">
        <input type="range" min="0.01" max="3" value={state.par6} onChange={(e) => sliderchange(e, 'par6')} className="slider2" step={0.01}></input>
        <p>DECAY</p>
        </div>

        <div className="ui2">
        <input type="range" min="0.08" max=".5" value={state.par3} onChange={(e) => sliderchange(e, 'par3')} className="slider2" step={0.001}></input>
        <p>GRAIN</p>
        </div>

        <div className="ui2">
        <input type="range" min="0" max="1" value={state.par7} onChange={(e) => sliderchange(e, 'par7')} className="slider2" step={0.01}></input>
        <p>SUSTAIN</p>
        </div>

        <div className="ui2">
        <input type="range" min="1000" max="8000" value={state.par4} onChange={(e) => sliderchange(e, 'par4')} className="slider2" step={10}></input>
        <p>LOOOP</p>
        </div>
      
        <div className="ui2">
        <input type="range" min="0" max="3" value={state.par8} onChange={(e) => sliderchange(e, 'par8')} className="slider2" step={0.01}  ></input>
        <p>RELEASE</p>
        </div>
        
        </div>

       
        
        <Sequencertwo/>
        <div className="Pan-left">
        <input type="range" min="-1" max="1" value={state.par9} onChange={(e) => sliderchange(e, 'par9')} className="slider2" step={0.01}  ></input>
        <p>PAN</p>
        </div>
        



        <div className="sliders2-right">

        <div className="ui2">
        <input type="range" min="-80" max="-10" value={state.par11} onChange={(e) => sliderchange(e,'par11')} className="slider2"></input>
        <p>VOLUME</p>
        </div>

        <div className="ui2">
        <input type="range" min="0" max="3" value={state.par15} onChange={(e) => sliderchange(e, 'par15')} className="slider2" step={0.01}></input>
        <p>ATTACK</p>
        </div>
        

        <div className="ui2">
        <input type="range" min="-2000" max="2000" value={state.par12} onChange={(e) => sliderchange(e, 'par12')} className="slider2"></input>
        <p>PITCH</p>
        </div>

        <div className="ui2">
        <input type="range" min="0.01" max="3" value={state.par16} onChange={(e) => sliderchange(e, 'par16')} className="slider2" step={0.01}></input>
        <p>DECAY</p>
        </div>

        <div className="ui2">
        <input type="range" min="0.08" max=".5" value={state.par13} onChange={(e) => sliderchange(e, 'par13')} className="slider2" step={0.001}></input>
        <p>GRAIN</p>
        </div>

        <div className="ui2">
        <input type="range" min="0" max="1" value={state.par17} onChange={(e) => sliderchange(e, 'par17')} className="slider2" step={0.01}></input>
        <p>SUSTAIN</p>
        </div>

        <div className="ui2">
        <input type="range" min="1000" max="8000" value={state.par14} onChange={(e) => sliderchange(e, 'par14')} className="slider2" step={10}></input>
        <p>LOOOP</p>
        </div>
      
        <div className="ui2">
        <input type="range" min="0" max="3" value={state.par18} onChange={(e) => sliderchange(e, 'par18')} className="slider2" step={0.01}  ></input>
        <p>RELEASE</p>
        </div>
        
        </div>
        

        <div className="Pan-right">
        <input type="range" min="-1" max="1" value={state.par10} onChange={(e) => sliderchange(e, 'par10')} className="slider2" step={0.01}  ></input>
        <p>PAN</p>
        </div>

        <div className="Crossfade">
        <input type="range" min="0" max="1" value={state.crossfade} onChange={(e) => sliderchange(e, 'crossfade')} className="slider2" step={0.01}  ></input>
        <p>CROSSFADE</p>
        </div>


        </div>
        </Synth2Context.Provider>
    )

}
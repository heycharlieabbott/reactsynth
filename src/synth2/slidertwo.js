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
        case 'notelegth':
            return{...state, notelength: state.notelength}
        default:
            throw new Error();
    }
}


export default function Slidertwo(props){

    const [state, dispatch] = useReducer(reducer, {
        //volume
        par1: -20,
        //detune
        par2: -200,
        //grain
        par3: 1.5,
        //looptime
        par4: 1000,
        //Attack
        par5: 0,
        //Decay
        par6: 0.5,
        //Sustain
        par7: 0,
        //Release
        par8: 0,
        notelength: 1
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
        <input type="range" min="0" max="3" value={state.par8} onChange={(e) => sliderchange(e, 'par8')} className="slider2" step={0.01}  ></input>
        <p>PAN</p>
        </div>
        



        <div className="sliders2-right">

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
        

        <div className="Pan-right">
        <input type="range" min="0" max="3" value={state.par8} onChange={(e) => sliderchange(e, 'par8')} className="slider2" step={0.01}  ></input>
        <p>PAN</p>
        </div>

        <div className="Crossfade">
        <input type="range" min="0" max="3" value={state.par8} onChange={(e) => sliderchange(e, 'par8')} className="slider2" step={0.01}  ></input>
        <p>CROSSFADE</p>
        </div>


        </div>
        </Synth2Context.Provider>
    )

}
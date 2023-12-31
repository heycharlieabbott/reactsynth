import React, { useRef, useEffect, useContext, useState } from "react";
import "../index.css";
import * as Tone from "tone";
import Osc1two from "./osc1two";
import Osc2two from "./osc2two";
import synth2Context from "./synth2context";
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";
import { app, storage } from "../firebase";

const recorder = new Tone.Recorder();

const reverbleft = new Tone.Reverb({ decay: 100 });
const reverbright = new Tone.FeedbackDelay("4n", 0.5);
const volume1 = new Tone.PanVol();
const volume2 = new Tone.PanVol();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();

const crossfade = new Tone.CrossFade();
const meter = new Tone.Meter({ channels: 2, normalRange: true, smoothing: 0 });

const lim = new Tone.Limiter(-30);

var a;
var b;

function RandRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Chaintwo(props) {
  const state = useContext(synth2Context);

  const [storedaudio, setStoredAudio] = useState([]);
  const [urlLeft, setUrlLeft] = useState(null);
  const [urlRight, setUrlRight] = useState(null);

  const [meterleft, setMeterLeft] = useState(0);
  const [meterright, setMeterRight] = useState(0);

  const audiolistref = ref(storage, "/Grains/");
  useEffect(() => {
    listAll(audiolistref).then((response) => {
      response.items.forEach((dl) => {
        getDownloadURL(dl).then((url) => {
          setStoredAudio((prev) => [...prev, url]);
        });
      });
    });

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setUrlLeft(storedaudio[4]);
    
    }, 100);
  }, [storedaudio[4]]);

  useEffect(() => {
    setTimeout(() => {
      setUrlRight(storedaudio[1]);
    }, 100);
  }, [storedaudio[1]]);

  env.attack = state.state.par5;
  env.decay = state.state.par6;
  env.sustain = state.state.par7;
  env.release = state.state.par8;

  env2.attack = state.state.par15;
  env2.decay = state.state.par16;
  env2.sustain = state.state.par17;
  env2.release = state.state.par18;

  crossfade.fade.value = state.state.crossfade;

  env.connect(reverbleft);
  reverbleft.connect(volume1);
  volume1.connect(crossfade.a);

  env2.connect(reverbright);
  reverbright.connect(volume2);
  volume2.connect(crossfade.b);

  crossfade.connect(lim);
  lim.connect(meter);
  meter.fan(recorder, Tone.Destination);

  volume1.volume.value = state.state.par1;
  volume1.pan.value = state.state.par9;

  volume2.volume.value = state.state.par11;
  volume2.pan.value = state.state.par10;

  const setfromstora = (e) => {
    a = storedaudio[e.nativeEvent.target.selectedIndex];
    setUrlLeft(a);
  
  };

  const setfromstorb = (e) => {

    b = storedaudio[e.nativeEvent.target.selectedIndex];
    setUrlRight(b);
   
  };


  const playNoteLeft = () => {
    Tone.start();
    env.triggerAttackRelease(state.state.notelength, Tone.now());

    setTimeout(() => {
      playNoteLeft();
    }, 1000);
  };

  const playNoteRight = () => {
    Tone.start();

    env2.triggerAttackRelease(state.state.notelength, Tone.now());

    setTimeout(() => {
      playNoteRight();
    }, 1000);
  };

  const audiosetLeft = (e) => {
    a = URL.createObjectURL(e.target.files[0]);
    setUrlLeft(a);
  };

  const audiosetRight = (e) => {
    b = URL.createObjectURL(e.target.files[0]);
    setUrlRight(b);
  };

  const playNoteBoth = () => {
    Tone.start();
    playNoteLeft();
    playNoteRight();
  };

  //RECORDING FUNCTION
  const [buttontext, setButtonText] = useState("Record 10 Seconds");
  const record = () => {
    recorder.start();
    setButtonText("NOW RECORDING");
    setTimeout(async () => {
      // the recorded audio is returned as a blob
      const recording = await recorder.stop();
      // download the recording by creating an anchor element and blob url
      const url = URL.createObjectURL(recording);
      const anchor = document.createElement("a");
      anchor.download = "recording.webm";
      anchor.href = url;
      anchor.click();
      setButtonText("RECORD 10 SECONDS");
    }, 10000);
  };

  setInterval(() => {
    const mete = meter.getValue();

    setMeterLeft(Math.floor(Math.abs(mete[0] * 150)));
    setMeterRight(Math.floor(Math.abs(mete[1] * 150)));
  }, 500);

  reverbleft.set({
    wet: state.state.par4,
  });

  reverbright.set({
    wet: state.state.par14,
    feedback: state.state.par14,
  });

  const randomize = () => {
   
    state.dispatch({ type: "par2", payload: RandRange(-2000, 2000) });
    state.dispatch({ type: "par3", payload: RandRange(0.08, 0.5) });
    state.dispatch({ type: "par4", payload: RandRange(0, 1) });
    state.dispatch({ type: "par5", payload: RandRange(0, 3) });
    state.dispatch({ type: "par6", payload: RandRange(0.01, 3) });
    state.dispatch({ type: "par7", payload: RandRange(0, 1) });
    state.dispatch({ type: "par8", payload: RandRange(0, 3) });
    state.dispatch({ type: "par9", payload: RandRange(-1, 1) });
    state.dispatch({ type: "par10", payload: RandRange(-1, 1) });
    //Volume automation (par 11) removed
    state.dispatch({ type: "par12", payload: RandRange(0.01, 3) });
    state.dispatch({ type: "par13", payload: RandRange(0.08, 0.5) });
    state.dispatch({ type: "par14", payload: RandRange(0, 1) });
    state.dispatch({ type: "par15", payload: RandRange(0, 3) });
    state.dispatch({ type: "par16", payload: RandRange(0.01, 3) });
    state.dispatch({ type: "par17", payload: RandRange(0, 1) });
    state.dispatch({ type: "par18", payload: RandRange(0, 3) });
    state.dispatch({ type: "par19", payload: RandRange(-1, 1) });
    state.dispatch({ type: "notelength", payload: RandRange(0.5, 1.5) });
    state.dispatch({ type: "crossfade", payload: RandRange(0, 1) });
  };

  return (
    <>
      <div className="chain2-left">
        <button
          className="playbutton"
          id="playbuttonleft"
          onClick={() => playNoteLeft()}
        >
          PLAY NOTE
        </button>
        <label className="buttonlabel" for="playbuttonleft">
          Play Note
        </label>

        <input
          className="custom-file-input"
          id="fileleft"
          type="file"
          accept=".wav, .mp3, .aiff, .flac"
          onChange={audiosetLeft}
        ></input>
        <label className="filelabel" for="fileleft">
          Upload File
        </label>
        <audio src={urlLeft}></audio>
      </div>

      <div className="chain2-right">
        <button
          className="playbutton"
          id="playbuttonright"
          onClick={() => playNoteRight()}
        >
          PLAY NOTE
        </button>
        <label className="buttonlabel" for="playbuttonright">
          Play Note
        </label>

        <input
          className="custom-file-input"
          id="fileright"
          type="file"
          accept=".wav, .mp3, .aiff, .flac"
          onChange={audiosetRight}
        ></input>
        <label className="filelabel" for="fileright">
          Upload File
        </label>
        <audio src={urlRight}></audio>
      </div>

      <div className="centersection">
        <label for="fileleft">Server File Left</label>
        <select
          className="FileLeft"
          id="fileleft"
          name="Preset Left"
          onChange={setfromstora}
        >
          <option>File 1</option>
          <option>File 2</option>
          <option>File 3</option>
          <option>File 4</option>
          <option>File 5</option>
        </select>

        <label for="fileright"> Server File Right</label>
        <select className="FileRight" id="fileright" onChange={setfromstorb}>
          <option>File 1</option>
          <option>File 2</option>
          <option>File 3</option>
          <option>File 4</option>
          <option>File 5</option>
        </select>

        <button className="buttonlabel Record" onClick={() => record()}>
          {buttontext}
        </button>

        <button className="buttonlabel Randomize" onClick={randomize}>
          Randomize
        </button>

        <button className="buttonlabel PlayBoth" onClick={() => playNoteBoth()}>
          Play Both
        </button>
      </div>

      <div className="Meter">
        <li className="R" style={{ height: `${meterright}%` }}></li>
        <li className="L" style={{ height: `${meterleft}%` }}></li>
      </div>

      <Osc1two output={env} trigger={props.trigger} aud={urlLeft} />

      <Osc2two output={env2} trigger={props.trigger} aud={urlRight} />
    </>
  );
}

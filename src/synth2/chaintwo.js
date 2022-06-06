import React, { useRef, useEffect, useContext, useState } from "react";
import "../index.css";
import * as Tone from "tone";
import Osc1two from "./osc1two";
import Osc2two from "./osc2two";
import synth2Context from "./synth2context";
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";
import { app, storage } from "../firebase";

const recorder = new Tone.Recorder();

const reverb = new Tone.Reverb({ decay: 100 });
const volume1 = new Tone.PanVol();
const volume2 = new Tone.PanVol();
const env = new Tone.AmplitudeEnvelope();
const env2 = new Tone.AmplitudeEnvelope();

const crossfade = new Tone.CrossFade();
const meter = new Tone.Meter({ channels: 2, normalRange: true, smoothing: 0 });

// const lim = new Tone.Limiter(-50);

var a;
var b;
export default function Chaintwo(props) {
  const state = useContext(synth2Context);
  const [storedaudio, setStoredAudio] = useState([]);
  const [urlLeft, setUrlLeft] = useState(null);
  const [urlRight, setUrlRight] = useState(null);

  const [meterleft, setMeterLeft] = useState(0);
  const [meterright, setMeterRight] = useState(0);

  const audiolistref = ref(storage, "/");
  useEffect(() => {
    // listAll(audiolistref).then((response) => {
    //   response.items.forEach((dl) => {
    //     getDownloadURL(dl).then((url) => {
    //       setStoredAudio((prev) => [...prev, url]);
    //     });
    //   });
    // });
    // console.log("loadfiles");
    // setTimeout(() => {
    //   setUrlLeft(storedaudio[5]);
    //   console.log("loadfiles");
    //   setUrlRight(storedaudio[10]);
    // }, 1000);

    console.log("loadfiles");
  }, []);

  env.attack = state.par5;
  env.decay = state.par6;
  env.sustain = state.par7;
  env.release = state.par8;

  env2.attack = state.par15;
  env2.decay = state.par16;
  env2.sustain = state.par17;
  env2.release = state.par18;

  crossfade.fade.value = state.crossfade;

  env.connect(volume1);
  volume1.connect(crossfade.a);

  env2.connect(volume2);
  volume2.connect(crossfade.b);

  crossfade.connect(reverb);
  meter.fan(recorder, Tone.Destination);

  reverb.connect(meter);

  volume1.volume.value = state.par1;
  volume1.pan.value = state.par9;

  volume2.volume.value = state.par11;
  volume2.pan.value = state.par10;

  // const pathRefa = ref(storage, "soundsprite2.mp3");
  // const pathRefb = ref(storage, "audio1.mp3");

  // useEffect(() => {

  // }, [third])

  const setfromstora = (e) => {
    a = storedaudio[e.nativeEvent.target.selectedIndex];
    setUrlLeft(a);
    console.log("seta");
  };

  const setfromstorb = (e) => {
    // getDownloadURL(pathRefb).then((response) => {
    //   b = response;
    //   // setUrlLeft(b);
    // });

    b = storedaudio[e.nativeEvent.target.selectedIndex];
    setUrlRight(b);
    console.log("setb");
  };

  useEffect(() => {
    // setUrlLeft(a);
    console.log("lefthey");
  }, [a]);

  useEffect(() => {
    // setUrlRight(b);
    console.log("righthey");
  }, [b]);

  const playNoteLeft = () => {
    env.triggerAttackRelease(state.notelength);

    setTimeout(() => {
      Tone.start();

      playNoteLeft();
    }, 1000);
  };

  const playNoteRight = () => {
    Tone.start();

    env2.triggerAttackRelease(state.notelength);

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

    setMeterLeft(Math.floor(Math.abs(mete[0] * 100)));
    // console.log(meterleft + "L");
    setMeterRight(Math.floor(Math.abs(mete[1] * 100)));
    // console.log(meterright + "R");
  }, 500);

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
          Upload file
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
          Upload file
        </label>
        <audio src={urlRight}></audio>
      </div>

      <div className="centersection">
        <label for="fileleft">Preset Left</label>
        <select
          className="FileLeft"
          id="fileleft"
          name="Preset Left"
          onChange={setfromstora}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label for="fileright"> Preset Right</label>
        <select className="FileRight" id="fileright" onChange={setfromstorb}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button className="Record" onClick={() => record()}>
          {buttontext}
        </button>

        <button className="PlayBoth" onClick={() => playNoteBoth()}>
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

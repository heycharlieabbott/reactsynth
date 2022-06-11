import { useContext, useEffect, useRef } from "react";
import * as Tone from "tone";
import synth2Context from "./synth2context";

const buf = new Tone.ToneAudioBuffer();
const osc = new Tone.GrainPlayer();
// osc.autostart = true;

export default function Osc1two(props) {
  const state = useContext(synth2Context);

  osc.set({
    loop: true,
    loopStart: 0.01,
    loopEnd: state.state.par3,
    playbackRate: state.state.par3,
    grainSize: state.state.par3,
    detune: state.state.par2,
  });

  osc.start();

  const callback = () => {};

  useEffect(() => {
    buf.load(props.aud);
    // console.log("loading buf1");
    osc.set({ buffer: buf });
  }, [props.aud]);

  osc.connect(props.output);

  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) {
      callback();
    } else {
      ref.current = true;
      buf.load(props.aud);
      // console.log("loading buf2");
    }
  }, [props.trigger]);
}

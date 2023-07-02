import { useContext, useEffect, useRef } from "react";
import * as Tone from "tone";
import synth2Context from "./synth2context";

const osc = new Tone.GrainPlayer();
const buf = new Tone.ToneAudioBuffer();

export default function Osc2two(props) {
  const state = useContext(synth2Context);

  osc.set({
    loop: true,
    loopStart: 0.01,
    loopEnd: state.state.par13,
    playbackRate: state.state.par13,
    grainSize: state.state.par13,
    detune: state.state.par12,
  });


  const callback = () => {};

  useEffect(() => {
    buf.load(props.aud);
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
      osc.start();
    }
  }, [props.trigger]);
}

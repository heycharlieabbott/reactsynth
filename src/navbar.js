import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleinstructions, setToggleInstructions] = useState(false);
  const instructionsmodal = () => {
    setToggleInstructions(true);
  };

  const [modalcontent, setModalContent] = useState(
    window.location.href.includes("synth2") ? 1 : 0
  );
  // const modalcontentchange = () => {
  //   setToggleInstructions(true);
  // };

  return (
    <div>
      <ul className="navbar">
        {/* <Link to="/" className="link" onClick={() => setModalContent(0)}>
          synth 1
        </Link>
        <Link to="/synth2" className="link" onClick={() => setModalContent(1)}>
          synth 2
        </Link> */}

        <a href="/" className="link" onClick={() => setModalContent(0)}>
          osc steps
        </a>
        <a
          href="/synth2"
          className="link"
          onClick={() => {
            setModalContent(1);
          }}
        >
          texture gen
        </a>

        <li onClick={() => instructionsmodal()}>Instructions</li>
        <div
          onClick={() => setToggleInstructions(false)}
          className="modalbackground"
          style={{ display: `${toggleinstructions ? "block" : "none"}` }}
        >
          <div className="modalcontent">
            <div
              className="synth1text"
              style={{ display: `${modalcontent === 0 ? "block" : "none"}` }}
            >
              <h1>OSC STEPS</h1>
              <p>
                A step sequencer and two oscillators in harmony, run through a
                reverb and comb filter delay.
              </p>
              <h2>Interface and Recording</h2>
              <p>
                Play single step by pressing the PLAY NOTE button. Start and
                stop the step sequencer by pressing START LOOOP and STOP LOOOP
                buttons. Select step sequencer scale from the SCALES dropdown
                menu. Timbre, envelope, tempo controls on left.
                <br />
                <br /> Press RECORD 10 SECONDS to download next 10 seconds of
                audio in .webm format. Convert .webm format to .wav/.mp3/etc. at{" "}
                <a href="https://cloudconvert.com/">cloud-convert</a>
              </p>
            </div>
            <div
              className="synth2text"
              style={{ display: `${modalcontent === 1 ? "block" : "none"}` }}
            >
              <h1>SYNTH 2</h1>
              <p>
                Two granular samplers, panned left and right and/or crossfaded.
                Left sampler DRY/WET is for reverb, right sampler DRY/WET is for
                delay.
              </p>
              <h2>Interface and Recording</h2>
              <p>
                Select preset audio files to be loaded from the server. Play
                Both to start looping the left and right sampler at the same
                time. Upload audio files from your computer to either sampler
                using Upload File buttons. Play each sampler individually using
                Play Note buttons.
                <br />
                <br /> Press RECORD 10 SECONDS to download next 10 seconds of
                audio in .webm format. Convert .webm format to .wav/.mp3/etc. at{" "}
                <a href="https://cloudconvert.com/">cloud-convert</a>
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

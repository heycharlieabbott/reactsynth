import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleinstructions, setToggleInstructions] = useState(false);
  const instructionsmodal = () => {
    setToggleInstructions(true);
  };

  const [modalcontent, setModalContent] = useState(0);
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
          synth 1
        </a>
        <a href="/synth2" className="link" onClick={() => setModalContent(1)}>
          synth 2
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
              <h1>SYNTH 1</h1>
              <p>
                this synthesizer has a step sequencer and two oscillator
                harmonizer
              </p>
            </div>
            <div
              className="synth2text"
              style={{ display: `${modalcontent === 1 ? "block" : "none"}` }}
            >
              <h1>SYNTH 2</h1>
              <p>
                this synthesizer uses two granular samplers, which can be panned
                left and right and faded between using the crossfade slider
              </p>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

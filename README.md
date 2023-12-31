# Web Synthesizer

This is a toolkit for experimental music production in the browser made using React, Tone.JS, and Firebase.

![websynthimage](https://github.com/heycharlieabbott/reactsynth/assets/52185182/9b9822a0-d742-431c-9cb0-b8a266ae9d41)

## [Live Site](https://websynthesizer.netlify.app/)

There are currently two synthesizers called "osc steps" and "texture gen", with more in development. Each synthesizer has a similar organizational structure that mimics traditional hardware synthesizer design. The structure from top to bottom is as follows:

1.  **User interface** (sliders, knobs, menus, etc.)

    - Example: [texture gen slider interface](https://github.com/heycharlieabbott/reactsynth1/blob/main/src/synth2/slidertwo.js)

2.  **Sequencer** (note generation, rhythmic patterns, loops, etc.)

    - Example: [osc steps sequencer](https://github.com/heycharlieabbott/reactsynth1/blob/main/src/synth1/sequencer.js)

3.  **Audio Module** Connections (routing, amplitude modulation, effects processors)

    - Example: [texture gen effects chain](https://github.com/heycharlieabbott/reactsynth1/blob/main/src/synth2/chaintwo.js)

4.  **Oscillators** (samplers, oscillators)
    - Example: [osc steps oscillator 1](https://github.com/heycharlieabbott/reactsynth1/blob/main/src/synth1/osc1.js)

All state information for Synth 2 is managed using the context API which allows for easy parameter randomization.

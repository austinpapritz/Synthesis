import React, { useContext } from 'react';
import { SynthContext } from '../../context/SynthContext.js';
import './Oscillator.css';

export default function Oscillator() {
  const { amplitude, setAmplitude, frequency, setFrequency } = useContext(SynthContext);

  let ready = false;
  let osc;
  let waveForm;
  let gui;

  function droneSynth() {
    osc1 = new Tone.Oscillator();
    osc1.volume.value = -12;
    osc1.frequency.value = 261.625;
    osc1.start();
    osc1.toDestination();

    osc2 = new Tone.Oscillator();
    osc2.volume.value = -12;
    osc2.frequency.value = 293.665;
    osc2.start();
    osc2.toDestination();

    osc3 = new Tone.Oscillator();
    osc3.volume.value = -12;
    osc3.frequency.value = 329.628;
    osc3.start();
    osc3.toDestination();

    osc4 = new Tone.Oscillator();
    osc4.volume.value = -12;
    osc4.frequency.value = 391.995;
    osc4.start();
    osc4.toDestination();

    osc5 = new Tone.Oscillator();
    osc5.volume.value = -12;
    osc5.frequency.value = 440;
    osc5.start();
    osc5.toDestination();

    waveForm = new Tone.Waveform();
    Tone.Master.connect(waveForm);
    Tone.Master.volume.value = -1;

    gui = new dat.GUI();
    gui.add(osc1.volume, 'value', -infinity, -5).name('OSC1 Volume');
    gui.add(osc1.frequency, 'value', 80, 1000).step(0.0001).name('OSC1 Frequency');
    gui.add(osc2.volume, 'value', -infinity, -5).name('OSC1 Volume');
    gui.add(osc2.frequency, 'value', 80, 1000).step(0.0001).name('OSC1 Frequency');
    gui.add(osc3.volume, 'value', -infinity, -5).name('OSC1 Volume');
    gui.add(osc3.frequency, 'value', 80, 1000).step(0.0001).name('OSC1 Frequency');
    gui.add(osc4.volume, 'value', -infinity, -5).name('OSC1 Volume');
    gui.add(osc4.frequency, 'value', 80, 1000).step(0.0001).name('OSC1 Frequency');
    gui.add(osc5.volume, 'value', -infinity, -5).name('OSC1 Volume');
    gui.add(osc5.frequency, 'value', 80, 1000).step(0.0001).name('OSC1 Frequency');
  }

  function draw() {
    if (ready) {
      background('black');
      stroke('white');
      noFill();

      let buffer = waveForm.getValue(0, 1);
      let start = 0;
      for (let i = 1; i < buffer.length; i++) {
        if (buffer[i - 1] < 0 && buffer[i] >= 0) {
          start = i;
          break;
        }
      }

      let end = buffer.length / 2 + start;

      beginShape();
      for (let i = start; i < end; i++) {
        let x = map(i, start, end, 0, width);
        let y = map(buffer[i], -1, 1, 0, height);
        vertex(x, y);
      }
      endShape();
    } else {
      fill('white');
      textAlign(CENTER, CENTER);
      text('CLICK', width / 2, height / 2);
    }
  }

  function mousePressed() {
    if (ready === false) {
      ready = true;
      droneSynth();
    }
  }

  console.log(frequency);
  console.log(amplitude);
  return (
    <div className="oscillator-container">
      <label>Amplitude</label>
      <input
        id="amplitude"
        type="range"
        className="slider"
        min="0"
        max="100"
        value={amplitude}
        onChange={(e) => setAmplitude(e.target.value)}
      ></input>
      <label>Frequency</label>
      <input
        id="frequency"
        type="range"
        className="slider"
        min="0"
        max="100"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      ></input>
    </div>
  );
}

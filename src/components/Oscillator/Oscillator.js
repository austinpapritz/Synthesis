import React, { useContext } from 'react';
import { SynthContext } from '../../context/SynthContext.js';
import './Oscillator.css';

export default function Oscillator() {
  const { amplitude, setAmplitude, frequency, setFrequency } = useContext(SynthContext);
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

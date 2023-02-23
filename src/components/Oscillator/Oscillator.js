import React from 'react';
import './Oscillator.css';

export default function Oscillator() {
  function handleChange(value) {
    console.log(value);
  }
  return (
    <div className="oscillator-container">
      <label>Amplitude</label>
      <input id="amplitude" type="range" className="slider" min="0" max="100"></input>
      <label>Frequency</label>
      <input
        id="frequency"
        type="range"
        className="slider"
        min="0"
        max="100"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
}

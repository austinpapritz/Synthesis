import React from 'react';
import './Controls.css';
import Oscillator from '../Oscillator/Oscillator.js';

export default function Controls() {
  return (
    <div className="controls-container">
      <Oscillator oscNum="1" />
      <Oscillator oscNum="2" />
      <Oscillator oscNum="3" />
      <Oscillator oscNum="4" />
      <Oscillator oscNum="5" />
    </div>
  );
}

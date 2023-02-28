import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import './App.css';
import { waveformRender } from './components/analyzer/Analyzer.js';
import Control from './components/control/Control.js';
import Lfo from './components/lfo/Lfo.js';
import { sine, sineLevel, sineLfo } from './components/oscillator/Oscillator.js';

function App() {
  const waveform = useRef(null);
  const waveformAnalyzer = new Tone.Analyser('waveform', 2048);

  useEffect(() => {
    waveformRender(waveformAnalyzer, Tone.Destination, waveform);
  });

  return (
    <div className="container">
      <div className="oscObject">
        <Control synthVolume={sineLevel} synth={sine} />
        <Lfo className="lfo" sineTremolo={sineLfo} />
      </div>
      <div className="WAVEFORM">
        <canvas
          ref={waveform}
          style={{
            width: '100%',
            height: '100%',
          }}
          width={window.innerWidth}
          height={window.innerHeight * 2}
        />
      </div>
    </div>
  );
}

export default App;

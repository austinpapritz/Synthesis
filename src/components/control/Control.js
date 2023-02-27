import React, { Fragment, useRef, useState } from 'react';
import * as Tone from 'tone';
import { CircleSlider } from 'react-circle-slider';

export default function Control({ synth, synthLevel }) {
  const dialSynthLevel = useRef(-30);
  const playingSynth = useRef(false);
  const freqSynth = useRef(150);
  const [status, setStatus] = useState(false);

  const showStatus = () => {
    if (status) {
      return (
        <div className="containerStatus">
          ON
          <div id="dialOn"></div>
        </div>
      );
    } else {
      return (
        <div className="containerStatus">
          OFF
          <div id="dialOff"></div>
        </div>
      );
    }
  };

  const handleLevel = (e) => {
    dialSynthLevel.current = e;
    synthLevel.volume.linearRampTo(e, 0.1, Tone.now());
  };

  const handleChangeFreq = (e) => {
    freqSynth.current = e;
    synth.frequency.value = e;
  };

  const handlePlay = () => {
    if (!playingSynth.current) {
      synth.triggerAttack(synth.frequency.value);
      playingSynth.current = true;
      setStatus(true);
    } else {
      const now = Tone.now();
      synth.triggerRelease(now);
      playingSynth.current = false;
      setStatus(false);
    }
  };

  return (
    <Fragment>
      <div className="sine">
        <button onClick={handlePlay}>{showStatus()}</button>
      </div>
      <div className="level">
        <CircleSlider
          value={dialSynthLevel.current}
          onChange={handleLevel}
          min={-30}
          max={-5}
          size={90}
          knobRadius={7}
          progressWidth={10}
          circleWidth={9}
        />
      </div>
      <div className="sine-level">OSC Level</div>
      <Fragment>
        <div className="freq">
          <CircleSlider
            onChange={handleChangeFreq}
            min={50}
            max={4000}
            value={freqSynth.current}
            showTooltip={true}
            stepSize={10}
            size={90}
            knobRadius={7}
            progressWidth={10}
            circleWidth={9}
          />
        </div>
        <div className="sineFreq">OSC Frequency</div>
      </Fragment>
    </Fragment>
  );
}

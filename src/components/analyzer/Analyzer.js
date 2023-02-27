/* eslint-disable new-cap */
import AudioMotionAnalyzer from 'audiomotion-analyzer';

export const waveformRender = (analyzer, context, ref) => {
  let WaveformCTX;
  WaveformCTX = ref.current.getContext('2d');
  context.connect(analyzer);
  WaveformLoop();
  function WaveformLoop() {
    let waveArray = analyzer.getValue();
    requestAnimationFrame(WaveformLoop);
    WaveformCTX.fillStyle = '#000000';
    WaveformCTX.lineWidth = 16;
    WaveformCTX.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
    WaveformCTX.beginPath();
    for (var i = 1; i < waveArray.length; i += 1) {
      let x = (i / waveArray.length) * (window.innerWidth * 2);
      if (i === 0) {
        WaveformCTX.moveTo(0, window.innerHeight + waveArray[i]);
      } else {
        WaveformCTX.lineTo(x, window.innerHeight + waveArray[i] * 1000);
      }
    }

    //WaveformCTX.strokeStyle = "white"; change color
    WaveformCTX.stroke();
  }
};

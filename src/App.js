import logo from './logo.svg';
import './App.css';
import Visualizer from './components/Visualizer/Visualizer.js';
import Controls from './components/Controls/Controls.js';

function App() {
  return (
    <div className="App">
      <Visualizer />
      <Controls />
    </div>
  );
}

export default App;

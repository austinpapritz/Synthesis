import { useContext, useState } from 'react';
import { createContext } from 'react';

const SynthContext = createContext();

const SynthProvider = ({ children }) => {
  const { amp, setAmp } = useState([]);

  return <SynthContext.Provider value={{ amp, setAmp }}>{children}</SynthContext.Provider>;
};

const useSynthContext = () => {
  const context = useContext(SynthContext);

  if (context === undefined) {
    throw new Error('useSynthContext must be used within a SynthProvider');
  }
  return context;
};

export { SynthProvider, useSynthContext };

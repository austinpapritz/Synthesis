import { useContext, useState } from 'react';
import { createContext } from 'react';

const SynthContext = createContext();

const SynthProvider = ({ children }) => {
  const [amplitude, setAmplitude] = useState(600);
  const [frequency, setFrequency] = useState(50);

  return (
    <SynthContext.Provider value={{ amplitude, setAmplitude, frequency, setFrequency }}>
      {children}
    </SynthContext.Provider>
  );
};

const useSynthContext = () => {
  const context = useContext(SynthContext);

  if (context === undefined) {
    throw new Error('useSynthContext must be used within a SynthProvider');
  }
  return context;
};

export { SynthProvider, SynthContext, useSynthContext };

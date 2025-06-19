import React, { createContext, useContext, useState, ReactNode } from 'react';

type PuntiContextType = {
  punti: number;
  aggiungiPunti: (n: number) => void;
  togliPunti: (n: number) => void;
  setPunti: (n: number) => void;
};

const PuntiContext = createContext<PuntiContextType | undefined>(undefined);

export const PuntiProvider = ({ children }: { children: ReactNode }) => {
  const [punti, setPunti] = useState(120); // valore iniziale

  const aggiungiPunti = (n: number) => setPunti(prev => prev + n);
  const togliPunti = (n: number) => setPunti(prev => prev - n);

  return (
    <PuntiContext.Provider value={{ punti, aggiungiPunti, togliPunti, setPunti }}>
      {children}
    </PuntiContext.Provider>
  );
};

export const usePunti = (): PuntiContextType => {
  const context = useContext(PuntiContext);
  if (!context) throw new Error('usePunti must be used inside PuntiProvider');
  return context;
};
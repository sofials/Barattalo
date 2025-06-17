import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Evento = {
  titolo: string
  categoria: string;
  immagine?: ImageSourcePropType;
  km?: number;
  isNew?: boolean;
  rating?: number;
};

export type EventoContextType = {
  annunci: Evento[];
  aggiungiEvento: (a: Evento) => void;
  rimuoviEvento: (titolo: string) => void;  // funzione rimuovi
};
export const categoriesE = [
  'Libri e Lettura',
  'Degustazioni',
  'Film e Cinema'
];

// immagine di default
const immagineDefault = require('./images/barattalo.jpeg');

// Helper per aggiungere isNew: false agli annunci di default
const setIsNewFalse = (eventi: Evento[]): Evento[] => {
  return eventi.map(a => ({
    ...a,
    isNew: false,
  }));
};

// Helper per impostare rating di default a 4 negli annunci
const setDefaultRating = (eventi: Evento[]): Evento[] => {
  return eventi.map(a => ({
    ...a,
    rating: typeof a.rating === 'number' && a.rating >= 0 ? a.rating : 4,
  }));
};

const eventiDefault: Evento[] = setDefaultRating([
  {
    titolo: 'Shakespare in love',
    categoria: 'Libri e Lettura',
    immagine: require('./icons/inlove.jpg'),
    km: 40,
    isNew: true, 
  },
  ...setIsNewFalse([
    {
      titolo: 'Letture per giovani',
      categoria: 'Libri e Lettura',
      immagine: require('./icons/libri.jpg'),
      km: 20
    },
    {
      titolo: 'Horror in prima linea',
      categoria: 'Libri e Lettura',
      immagine: require('./icons/aiuto.jpg'),
      km: 2

    },
    {
      titolo: 'Birre artigianali venete',
      categoria: 'Apprendimento',
      immagine: require('./icons/birre.jpg'),
      km: 35
    },
    {
      titolo: 'Formaggi di capra',
      categoria: 'Degustazioni',
      immagine: require('./icons/capra.jpg'),
      km: 15
    },
    {
      titolo: 'Grappa per tutti',
      categoria: 'Degustazione',
      immagine: require('./icons/grappa.jpg'),
      km: 5

    },
    {
      titolo: 'Western',
      categoria: 'Film e Cinema',
      immagine: require('./icons/west.jpg'),
      km: 4

    },
    {
      titolo: 'Dario Argento',
      categoria: 'Film e Cinema ',
      immagine: require('./icons/dario.jpg'),

      km: 6
    },
    {
      titolo: 'Cuori bollenti',
      categoria: 'Film e Cinema',
      immagine: require('./icons/cuori.jpg'),
      km: 96
    }
  ]),
]);

const EventoContext = createContext<EventoContextType | undefined>(undefined);

export const EventoProvider = ({ children }: { children: ReactNode }) => {
  const [eventi, setEventi] = useState<Evento[]>(eventiDefault);

  const aggiungiEvento = (a: Evento) => {
    const eventoConDefaults: Evento = {
      ...a,
      km: a.km ?? 10,
      immagine: a.immagine ?? immagineDefault,
      isNew: a.isNew ?? true,
      rating: typeof a.rating === 'number' && a.rating >= 0 ? a.rating : 4,
    };
    setEventi(prev => [...prev, eventoConDefaults]);
  };

  const rimuoviEvento = (titolo: string) => {
    setEventi(prev => prev.filter(a => !(a.titolo === titolo && a.isNew)));
  };

  return (
    <EventoContext.Provider value={{ eventi, aggiungiEvento, rimuoviEvento }}>
      {children}
    </EventoContext.Provider>
  );
};

export default EventoContext
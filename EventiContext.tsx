import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Annuncio } from './AnnunciContext';
import { useNavigation } from '@react-navigation/native';

export type Evento = {
  titolo: string
  categoriaE: string;
  immagine?: ImageSourcePropType;
  descrizione?: string;
  km?: number;
  isNew?: boolean;
  rating?: number;
};

export type EventoContextType = {
  eventi: Evento[];
  annunci: Annuncio[];
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
    categoriaE: 'Libri e Lettura',
    immagine: require('./icons/inlove.jpg'),
    km: 40,
    isNew: true,
    descrizione: 'Un viaggio tra le opere di Shakespeare, tra amore e passione, con letture e interpretazioni dal vivo.',
  },
  ...setIsNewFalse([
    {
      titolo: 'Horror in prima linea',
      categoriaE: 'Libri e Lettura',
      immagine: require('./icons/aiuto.jpg'),
      km: 2,
      descrizione: 'Letture ad alta tensione per gli amanti del brivido, tra romanzi e racconti horror.',
    },
    {
      titolo: 'Birre artigianali venete',
      categoriaE: 'Apprendimento',
      immagine: require('./icons/birre.jpg'),
      km: 35,
      descrizione: 'Degustazione e scoperta delle migliori birre artigianali del Veneto, con esperti birrai.',
    },
    {
      titolo: 'Formaggi di capra',
      categoriaE: 'Degustazioni',
      immagine: require('./icons/capra.jpg'),
      km: 15,
      descrizione: 'Assaggio guidato di formaggi di capra locali, tra tradizione e innovazione.',
    },
    {
      titolo: 'Grappa per tutti',
      categoriaE: 'Degustazione',
      immagine: require('./icons/grappa.jpg'),
      km: 5,
      descrizione: 'Un percorso tra le migliori grappe italiane, con degustazione e spiegazione delle tecniche di produzione.',
    },
    {
      titolo: 'Western',
      categoriaE: 'Film e Cinema',
      immagine: require('./icons/west.jpg'),
      km: 4,
      descrizione: 'Proiezione di grandi classici del cinema western, per rivivere le emozioni del Far West.',
    },
    {
      titolo: 'Dario Argento',
      categoriaE: 'Film e Cinema ',
      immagine: require('./icons/dario.jpg'),
      km: 6,
      descrizione: 'Omaggio al maestro del brivido italiano con la visione dei suoi film più celebri.',
    },
    {
      titolo: 'Cuori bollenti',
      categoriaE: 'Film e Cinema',
      immagine: require('./icons/cuori.jpg'),
      km: 96,
      descrizione: 'Una rassegna di film romantici per scaldare il cuore, tra passioni e storie indimenticabili.',
    },
    {
      titolo: 'Portici di Carta',
      categoriaE: 'Libri e Lettura',
      immagine: require('./assets/portici.jpg'),
      km: 10,
      descrizione: 'Vieni a scoprire una montagna di libri sotto i portici di Torino!',
      isNew: true,
      rating: 5,
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
    <EventoContext.Provider value={{ eventi, annunci: [], aggiungiEvento, rimuoviEvento }}>
      {children}
    </EventoContext.Provider>
  );
};
  export const useEventi = (): EventoContextType => {
    const context = useContext(EventoContext);
    if (!context) throw new Error('useEventi must be used inside EventoProvider');
    return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Evento = {
  titolo: string;
  categoria: string;
  immagine?: ImageSourcePropType;
  descrizione: string;
  km?: number;
};

export type EventoContextType = {
  eventi: Evento[];
  aggiungiEvento: (evento: Evento) => void;
};

export const categorie = [
  'Libri e Lettura',
  'Degustazioni',
  'Film e Cinema'
];

const eventiDefault: Evento[] = [
  {
    titolo: 'Shakespeare in love',
    categoria: 'Libri e Lettura',
    immagine: require('./icons/inlove.jpg'),
    km: 40,
    descrizione: 'Un viaggio tra le opere di Shakespeare, tra amore e passione, con letture e interpretazioni dal vivo.',
  },
  {
    titolo: 'Horror in prima linea',
    categoria: 'Libri e Lettura',
    immagine: require('./icons/aiuto.jpg'),
    km: 2,
    descrizione: 'Letture ad alta tensione per gli amanti del brivido, tra romanzi e racconti horror.',
  },
  {
    titolo: 'Birre artigianali venete',
    categoria: 'Degustazioni',
    immagine: require('./icons/birre.jpg'),
    km: 35,
    descrizione: 'Degustazione e scoperta delle migliori birre artigianali del Veneto, con esperti birrai.',
  },
  {
    titolo: 'Formaggi di capra',
    categoria: 'Degustazioni',
    immagine: require('./icons/capra.jpg'),
    km: 15,
    descrizione: 'Assaggio guidato di formaggi di capra locali, tra tradizione e innovazione.',
  },
  {
    titolo: 'Grappa per tutti',
    categoria: 'Degustazioni',
    immagine: require('./icons/grappa.jpg'),
    km: 5,
    descrizione: 'Un percorso tra le migliori grappe italiane, con degustazione e spiegazione delle tecniche di produzione.',
  },
  {
    titolo: 'Western',
    categoria: 'Film e Cinema',
    immagine: require('./icons/west.jpg'),
    km: 4,
    descrizione: 'Proiezione di grandi classici del cinema western, per rivivere le emozioni del Far West.',
  },
  {
    titolo: 'Dario Argento',
    categoria: 'Film e Cinema',
    immagine: require('./icons/dario.jpg'),
    km: 6,
    descrizione: 'Omaggio al maestro del brivido italiano con la visione dei suoi film più celebri.',
  },
  {
    titolo: 'Cuori bollenti',
    categoria: 'Film e Cinema',
    immagine: require('./icons/cuori.jpg'),
    km: 96,
    descrizione: 'Una rassegna di film romantici per scaldare il cuore, tra passioni e storie indimenticabili.',
  },
  {
    titolo: 'Portici di Carta',
    categoria: 'Libri e Lettura',
    immagine: require('./assets/portici.jpg'),
    km: 10,
    descrizione: 'Vieni a scoprire una montagna di libri sotto i portici di Torino!',
  }
];

const EventoContext = createContext<EventoContextType | undefined>(undefined);

export const EventoProvider = ({ children }: { children: ReactNode }) => {
  const [eventi, setEventi] = useState<Evento[]>(eventiDefault);

  const aggiungiEvento = (evento: Evento) => {
    const eventoConDefaults = {
      ...evento,
      km: evento.km ?? 10,
    };
    setEventi(prev => [...prev, eventoConDefaults]);
  };

  return (
    <EventoContext.Provider value={{ eventi, aggiungiEvento }}>
      {children}
    </EventoContext.Provider>
  );
};

export const useEventi = (): EventoContextType => {
  const context = useContext(EventoContext);
  if (!context) throw new Error('useEventi must be used inside EventoProvider');
  return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Annuncio = {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: ImageSourcePropType;
  km?: number;
  puntiAnnuncio: number;
  isNew?: boolean;
  rating?: number;
};

export type AnnuncioContextType = {
  annunci: Annuncio[];
  aggiungiAnnuncio: (a: Annuncio) => void;
};

export const categories = [
  'Apprendimento',
  'Tecnologia',
  'Artigianato e manualità',
  'Giardinaggio',
  'Lavori in casa',
  'Pulizie',
];

// immagine di default
const immagineDefault = require('./images/barattalo.jpeg');

// Helper per aggiungere isNew: false agli annunci di default
const setIsNewFalse = (annunci: Annuncio[]): Annuncio[] => {
  return annunci.map(a => ({
    ...a,
    isNew: false,
  }));
};

// Helper per impostare rating di default a 4 negli annunci
const setDefaultRating = (annunci: Annuncio[]): Annuncio[] => {
  return annunci.map(a => ({
    ...a,
    rating: typeof a.rating === 'number' && a.rating >= 0 ? a.rating : 4,
  }));
};

const annunciDefault: Annuncio[] = setDefaultRating([
  {
    titolo: 'Ripetizioni italiano',
    categoria: 'Apprendimento',
    immagine: require('./icons/italiano.png'),
    descrizione: 'Lezioni di italiano per tutti i livelli. Online o in presenza.',
    puntiAnnuncio: 50,
    isNew: true, 
  },
  ...setIsNewFalse([
    {
      titolo: 'Ripetizioni di fisica',
      categoria: 'Apprendimento',
      immagine: require('./images/ripetizioni_fisica.jpg'),
      km: 5,
      descrizione: 'Lezioni personalizzate per comprendere al meglio la fisica, dall’università alle scuole superiori.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Lezioni di spagnolo',
      categoria: 'Apprendimento',
      immagine: require('./images/spagnolo.jpg'),
      km: 5,
      descrizione: 'Impara lo spagnolo con lezioni pratiche e coinvolgenti, adatte a tutti i livelli.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Ripetizioni di inglese',
      categoria: 'Apprendimento',
      immagine: require('./images/inglese.jpeg'),
      km: 5,
      descrizione: 'Migliora il tuo inglese parlato e scritto con lezioni personalizzate e flessibili.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Assistenza per il pc',
      categoria: 'Tecnologia',
      immagine: require('./images/assistenza.jpg'),
      km: 20,
      descrizione: 'Supporto tecnico per problemi hardware e software del tuo computer, rapido e affidabile.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Trasferire file',
      categoria: 'Tecnologia',
      immagine: require('./images/telefono.jpg'),
      km: 25,
      descrizione: 'Aiuto professionale per trasferire file da dispositivi diversi in modo semplice e sicuro.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Capire lo spid',
      categoria: 'Tecnologia',
      immagine: require('./images/spid.jpeg'),
      km: 40,
      descrizione: 'Guida pratica per attivare e utilizzare lo SPID, l’identità digitale per i servizi online.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Laboratorio di cucito',
      categoria: 'Artigianato e manualità',
      immagine: require('./images/cucito.jpeg'),
      km: 20,
      descrizione: 'Corso creativo per imparare le basi del cucito e realizzare progetti unici con le tue mani.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Riciclo creativo',
      categoria: 'Artigianato e manualità',
      immagine: require('./images/rotolocolorato.png'),
      km: 30,
      descrizione: 'Laboratorio per trasformare materiali di recupero in oggetti originali e sostenibili.',
      puntiAnnuncio: 30,
    },
    {
      titolo: 'Decorazioni a mano',
      categoria: 'Artigianato e manualità',
      immagine: require('./images/decorazioni.png'),
      km: 2,
      descrizione: 'Realizza decorazioni artigianali fatte a mano per rendere ogni ambiente speciale.',
      puntiAnnuncio: 30,
    },
  ]),
]);


const AnnuncioContext = createContext<AnnuncioContextType | undefined>(undefined);

export const AnnuncioProvider = ({ children }: { children: ReactNode }) => {
  const [annunci, setAnnunci] = useState<Annuncio[]>(annunciDefault);

  const aggiungiAnnuncio = (a: Annuncio) => {
    const annuncioConDefaults: Annuncio = {
      ...a,
      km: a.km ?? 10,
      immagine: a.immagine ?? immagineDefault,
      isNew: a.isNew ?? true, // nuovi annunci di default
      rating: typeof a.rating === 'number' && a.rating >= 0 ? a.rating : 4, // rating default 4
    };
    setAnnunci(prev => [...prev, annuncioConDefaults]);
  };

  return (
    <AnnuncioContext.Provider value={{ annunci, aggiungiAnnuncio }}>
      {children}
    </AnnuncioContext.Provider>
  );
};

export const useAnnunci = (): AnnuncioContextType => {
  const context = useContext(AnnuncioContext);
  if (!context) throw new Error('useAnnunci must be used inside AnnuncioProvider');
  return context;
};

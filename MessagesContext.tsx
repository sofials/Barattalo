import React, { createContext, useState, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';

export type Message = {
  id: number;
  mainMessageId?: number; // 🔧 ID della conversazione principale
  sender: string;
  preview: string;
  image?: ImageSourcePropType;
  unread: boolean;
  receiver?: string;
  isnew: boolean;
  offertaTitolo?: string;
  offertaCategoria?: string;
  type: 'message' | 'event';

};


type MessagesContextType = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  gianniRead: boolean;
  setGianniRead: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialMessages: Message[] = [
  {
     id: 1,
    sender: 'Gianni',
    preview: 'Ciao, saresti disponibile per dare delle ripetizioni di italiano a mio figlio? Fr...',
    image: require('./assets/gianni.png'),
    unread: true, // <-- unread true solo per Gianni all'inizio
    isnew: false,
    receiver: 'Io',
    offertaTitolo: 'Ripetizioni di italiano',
    offertaCategoria: 'Apprendimento',
    type: 'message',
    
  },
  {
    id: 2,
    sender: 'Portici di Carta',
    preview: 'Paolo: Ciao, prendiamo un caffè prima dell’evento?',
    image: require('./assets/portici.jpg'),
    unread: false,
    isnew: false,
    receiver: 'Io',
    type: 'event',
  },
];

export const MessagesContext = createContext<MessagesContextType>({
  messages: [],
  setMessages: () => {
    throw new Error('setMessages non inizializzato');
  },
  gianniRead: false,
  setGianniRead: () => {
    throw new Error('setGianniRead non inizializzato');
  },
});

type Props = {
  children: ReactNode;
};

export const MessagesProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [gianniRead, setGianniRead] = useState(false);

  return (
    <MessagesContext.Provider value={{ messages, setMessages, gianniRead, setGianniRead }}>
      {children}
    </MessagesContext.Provider>
  );
};

import React, { createContext, useState, ReactNode } from 'react';

export type Notification = {
  id: number;
  title: string;
  preview: string;
  image: any;
  unread: boolean;
};

type NotificationsContextType = {
  notifications: Notification[];
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
  firstNotifRead: boolean;
  setFirstNotifRead: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Com’è andata con Giulia?',
    preview: 'Lascia una recensione per l’Aiuto che hai chiesto.',
    image: require('./assets/giulia.jpg'),
    unread: true,
  },
  {
    id: 2,
    title: 'Evento in arrivo',
    preview: 'Non dimenticare: domani c’è Portici di Carta!',
    image: require('./assets/portici.jpg'),
    unread: false,
  },
  {
    id: 3,
    title: 'Grazia ha votato il tuo Aiuto',
    preview: 'Grazia ti ha lasciato una recensione.',
    image: require('./assets/grazia.jpg'),
    unread: false,
  },
];

export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  setNotifications: () => {},
  firstNotifRead: false,
  setFirstNotifRead: () => {},
});

type Props = {
  children: ReactNode;
};

export const NotificationsProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [firstNotifRead, setFirstNotifRead] = useState(false);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications, firstNotifRead, setFirstNotifRead }}>
      {children}
    </NotificationsContext.Provider>
  );
};

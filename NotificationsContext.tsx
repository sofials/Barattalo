import React, { createContext, useState, ReactNode } from 'react';

export type Notification = {
  id: number;
  title: string;
  preview: string;
  image: any;
  unread: boolean;
  isNew: boolean;
};

type NotificationsContextType = {
  notifications: Notification[];
  setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
  firstNotifRead: boolean;
  setFirstNotifRead: React.Dispatch<React.SetStateAction<boolean>>;
  addNotification: (notif: Omit<Notification, 'id' | 'isNew'>) => void;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Com’è andata con Giulia?',
    preview: 'Lascia una recensione per l’Aiuto che hai chiesto.',
    image: require('./assets/giulia.jpg'),
    unread: true,
    isNew: false,
  },
  {
    id: 2,
    title: 'Evento in arrivo',
    preview: 'Non dimenticare: domani c’è Portici di Carta!',
    image: require('./assets/portici.jpg'),
    unread: false,
    isNew: false,
  },
  {
    id: 3,
    title: 'Grazia ha votato il tuo Aiuto',
    preview: 'Grazia ti ha lasciato una recensione.',
    image: require('./assets/grazia.jpg'),
    unread: false,
    isNew: false,
  },
];

export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  setNotifications: () => {},
  firstNotifRead: false,
  setFirstNotifRead: () => {},
  addNotification: () => {},
});

type Props = { children: ReactNode };

export const NotificationsProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [firstNotifRead, setFirstNotifRead] = useState(false);

  const addNotification = (notif: Omit<Notification, 'id' | 'isNew'>) => {
    setNotifications(prev => {
      const newId = prev.length > 0 ? Math.max(...prev.map(n => n.id)) + 1 : 1;
      const newNotif: Notification = { ...notif, id: newId, isNew: true };
      return [newNotif, ...prev];
    });
  };

  return (
    <NotificationsContext.Provider
      value={{ notifications, setNotifications, firstNotifRead, setFirstNotifRead, addNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowRight from './icons/arrowRight.svg';
import CameraDoodle from './icons/books.svg';
import styles from './Inbox.styles';

// Messaggi di prova
const messages = [
  {
    id: 1,
    sender: 'Gianni - Ripetizioni di Italiano',
    preview: 'Ciao, saresti disponibile per dare delle ripetizioni di italiano a mio figlio? Fr...',
    image: require('./assets/gianni.png'),
    unread: true,
  },
  {
    id: 2,
    sender: 'Portici di Carta',
    preview: 'Paolo: Ciao, prendiamo un caffè prima dell’evento?',
    image: require('./assets/portici.png'),
    unread: false,
  },
  {
    id: 3,
    sender: 'Marianna',
    preview: 'Grazie per il tuo aiuto, mio figlio ha preso 8 nella verifica di ieri. Sei stato molto prezioso.',
    image: require('./assets/marianna.png'),
    unread: false,
  },
];

const notifications = [
  {
    id: 1,
    title: 'Com’è andata con Giulia?',
    preview: 'Lascia una recensione per l’Aiuto che hai chiesto.',
    image: require('./assets/giulia.png'),
    unread: true,
  },
  {
    id: 2,
    title: 'Evento in arrivo',
    preview: 'Non dimenticare: domani c’è Portici di Carta!',
    image: require('./assets/portici.png'),
    unread: false,
  },
  {
    id: 3,
    title: 'Grazia ha votato il tuo Aiuto',
    preview: 'Grazia ti ha lasciato una recensione.',
    image: require('./assets/grazia.png'),
    unread: false,
  },
];

const Inbox: React.FC = () => {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<'messaggi' | 'notifiche'>('messaggi');
  const [gianniRead, setGianniRead] = useState(false);
  const [firstNotifRead, setFirstNotifRead] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.topBar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Inbox</Text>
        </View>
        <CameraDoodle width={40} height={40} />
      </View>

      <View style={styles.sectionTabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selected === 'messaggi' && styles.tabButtonActive,
          ]}
          onPress={() => setSelected('messaggi')}
        >
          <Text style={[
            styles.tabText,
            selected === 'messaggi' && styles.tabTextActive,
          ]}>
            Messaggi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selected === 'notifiche' && styles.tabButtonActive,
          ]}
          onPress={() => setSelected('notifiche')}
        >
          <Text style={[
            styles.tabText,
            selected === 'notifiche' && styles.tabTextActive,
          ]}>
            Notifiche
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContent}>
        {selected === 'messaggi' ? (
          <View style={{ width: '100%' }}>
            {messages.map((msg, idx) => {
              const isFirst = idx === 0;
              const MessageWrapper = isFirst ? TouchableOpacity : View;
              const wrapperProps = isFirst
                ? {
                    onPress: () => {
                      setGianniRead(true);
                      navigation.navigate('Chat');
                    },
                    activeOpacity: 0.7,
                  }
                : {};

              return (
                <MessageWrapper
                  key={msg.id}
                  style={[
                    styles.messageCard,
                    msg.unread && !gianniRead && styles.messageCardUnread,
                  ]}
                  {...wrapperProps}
                >
                  <Image
                    source={msg.image}
                    style={styles.proPic}
                    resizeMode="cover"
                  />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.sender}>{msg.sender}</Text>
                    <Text style={styles.preview}>{msg.preview}</Text>
                  </View>
                </MessageWrapper>
              );
            })}
          </View>
        ) : (
          <View style={{ width: '100%' }}>
            {notifications.map((notif, idx) => {
              const NotifWrapper = idx === 0 ? TouchableOpacity : View;
              const wrapperProps = idx === 0
                ? {
                    onPress: () => {
                      setFirstNotifRead(true);
                      navigation.navigate('Rating');
                    },
                    activeOpacity: 0.7,
                  }
                : {};

              return (
                <NotifWrapper
                  key={notif.id}
                  style={[
                    styles.messageCard,
                    notif.unread && idx === 0 && !firstNotifRead && styles.messageCardUnread,
                  ]}
                  {...wrapperProps}
                >
                  <Image
                    source={notif.image}
                    style={styles.proPic}
                    resizeMode="cover"
                  />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.sender}>{notif.title}</Text>
                    <Text style={styles.preview}>{notif.preview}</Text>
                  </View>
                </NotifWrapper>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default Inbox;
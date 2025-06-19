import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowRight from './icons/arrowRight.svg';
import CameraDoodle from './icons/books.svg';
import styles from './Inbox.styles';

import { MessagesContext, Message } from './MessagesContext';
import { NotificationsContext } from './NotificationsContext';

const InboxMain: React.FC = () => {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<'messaggi' | 'notifiche'>('messaggi');
  const [messageFilter, setMessageFilter] = useState<'all' | 'message' | 'event'>('all');

  const { messages, gianniRead, setGianniRead, setMessages } = useContext(MessagesContext);
  const { notifications, firstNotifRead, setFirstNotifRead } = useContext(NotificationsContext);

  const handleGianniPress = () => {
    setGianniRead(true);
    setMessages(prev =>
      prev.map(msg => (msg.id === 1 ? { ...msg, unread: false, isnew: false } : msg))
    );
    navigation.navigate('Chat');
  };

  const handleGiuliaNotificationPress = () => {
    setFirstNotifRead(true);
    navigation.navigate('Rating');
  };

  const handleGenericChatPress = (interlocutore: string, preview: string, id: number) => {
    navigation.navigate('DettaglioChat', { senderName: interlocutore, initialPreview: preview, id });
  };

  const filteredMessages = messages.filter(msg => {
    if (messageFilter === 'all') return true;
    return msg.type === messageFilter;
  });

  const groupedMessagesMap = new Map<number, Message>();
  for (const msg of filteredMessages) {
    groupedMessagesMap.set(msg.id, msg);
  }
  const groupedMessages = Array.from(groupedMessagesMap.values());

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Inbox</Text>
        </View>
        <CameraDoodle width={40} height={40} />
      </View>

      {/* Tabs */}
      <View style={styles.sectionTabs}>
        <TouchableOpacity
          style={[styles.tabButton, selected === 'messaggi' && styles.tabButtonActive]}
          onPress={() => setSelected('messaggi')}
        >
          <Text style={[styles.tabText, selected === 'messaggi' && styles.tabTextActive]}>
            Messaggi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selected === 'notifiche' && styles.tabButtonActive]}
          onPress={() => setSelected('notifiche')}
        >
          <Text style={[styles.tabText, selected === 'notifiche' && styles.tabTextActive]}>
            Notifiche
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.sectionContent}>
        {selected === 'messaggi' ? (
          <View style={{ width: '100%' }}>
            {/* Filtro messaggi */}
            <View style={styles.filterButtonsContainer}>
              <TouchableOpacity
  style={[styles.filterButton, messageFilter === 'all' && styles.filterButtonActive]}
  onPress={() => setMessageFilter('all')}
>
  <Text style={[styles.filterText, messageFilter === 'all' && styles.filterButtonActiveText]}>
    Tutti
  </Text>
</TouchableOpacity>

              <TouchableOpacity
  style={[styles.filterButton, messageFilter === 'message' && styles.filterButtonActive]}
  onPress={() => setMessageFilter('message')}
>
  <Text style={[styles.filterText, messageFilter === 'message' && styles.filterButtonActiveText]}>
    Messaggi
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.filterButton, messageFilter === 'event' && styles.filterButtonActive]}
  onPress={() => setMessageFilter('event')}
>
  <Text style={[styles.filterText, messageFilter === 'event' && styles.filterButtonActiveText]}>
    Eventi
  </Text>
</TouchableOpacity>

            </View>

            {groupedMessages.map(msg => {
              const isGianni = msg.sender === 'Gianni';
              const isPortici = msg.sender === 'Portici di Carta';

              const interlocutore = msg.isnew ? msg.receiver ?? 'Sconosciuto' : msg.sender ?? 'Sconosciuto';

              const onPressHandler = isGianni
                ? handleGianniPress
                : isPortici
                ? () => navigation.navigate('Portici')
                : () => handleGenericChatPress(interlocutore, msg.preview, msg.id);

              const displayName = msg.isnew
                ? `${msg.receiver ?? 'Sconosciuto'} - ${msg.offertaTitolo ?? 'Offerta'}`
                : msg.sender === 'Io' && msg.receiver === 'Laura'
                ? `Laura - ${msg.offertaTitolo ?? 'Offerta'}`
                : msg.sender === 'Gianni' && msg.offertaTitolo
                ? `Gianni - ${msg.offertaTitolo}`
                : msg.sender ?? 'Sconosciuto';

              return (
                <TouchableOpacity
                  key={msg.id}
                  style={[styles.messageCard, msg.unread && styles.messageCardUnread]}
                  onPress={onPressHandler}
                  activeOpacity={0.7}
                >
                  <Image source={msg.image} style={styles.proPic} resizeMode="cover" />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.sender}>{displayName}</Text>
                    <Text style={styles.preview}>{msg.preview}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View style={{ width: '100%' }}>
            {notifications.map(notif => {
              const isGiuliaNotif = notif.id === 1 && notif.title === 'Com’è andata con Giulia?';

              const Wrapper = isGiuliaNotif ? TouchableOpacity : View;
              const wrapperProps = isGiuliaNotif
                ? {
                    onPress: handleGiuliaNotificationPress,
                    activeOpacity: 0.7,
                  }
                : {};

              return (
                <Wrapper
                  key={notif.id}
                  style={[
                    styles.messageCard,
                    notif.unread && isGiuliaNotif && !firstNotifRead && styles.messageCardUnread,
                  ]}
                  {...wrapperProps}
                >
                  <Image source={notif.image} style={styles.proPic} resizeMode="cover" />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.sender}>{notif.title}</Text>
                    <Text style={styles.preview}>{notif.preview}</Text>
                  </View>
                </Wrapper>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};

export default InboxMain;

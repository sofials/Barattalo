import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowRight from './icons/arrowRight.svg';
import CameraDoodle from './icons/books.svg';
import styles from './Inbox.styles';

import { MessagesContext, Message } from './MessagesContext'; // importa anche il tipo Message
import { NotificationsContext } from './NotificationsContext';

const Inbox: React.FC = () => {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<'messaggi' | 'notifiche'>('messaggi');

  const { messages, gianniRead, setGianniRead, setMessages } = useContext(MessagesContext);
  const { notifications, firstNotifRead, setFirstNotifRead } = useContext(NotificationsContext);

  const handleGianniPress = () => {
    setGianniRead(true);
    setMessages(prev =>
      prev.map(msg =>
        msg.id === 1 ? { ...msg, unread: false, isnew: false } : msg
      )
    );
    navigation.navigate('ChatGianni');
  };

  const handleFirstNotifPress = () => {
    setFirstNotifRead(true);
    navigation.navigate('Rating');
  };

  // Funzione generica per aprire chat, passa sender e preview
  const handleGenericChatPress = (senderName: string, preview: string, requestId?: number) => {
    // Puoi anche passare requestId se serve per filtrare la chat nel dettaglio
    navigation.navigate('DettaglioChat', { senderName, initialPreview: preview, requestId });
  };

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
            {messages.map(msg => {
              const isGianni = msg.sender === 'Gianni';
              const isPortici = msg.sender === 'Portici di Carta';

              const onPressHandler = isGianni
                ? handleGianniPress
                : isPortici
                ? () => navigation.navigate('Portici')
                : () => handleGenericChatPress(msg.sender, msg.preview, msg.id);

              return (
                <TouchableOpacity
                  key={msg.id}
                  style={[styles.messageCard, msg.unread && styles.messageCardUnread]}
                  onPress={onPressHandler}
                  activeOpacity={0.7}
                >
                  <Image source={msg.image} style={styles.proPic} resizeMode="cover" />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.sender}>
                      {msg.sender === 'Io' && msg.receiver === 'Laura'
                        ? `Laura - ${msg.offertaTitolo ?? 'Offerta'}`
                        : msg.sender}
                    </Text>
                    <Text style={styles.preview}>{msg.preview}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <View style={{ width: '100%' }}>
            {notifications.map((notif, idx) => {
              const NotifWrapper = idx === 0 ? TouchableOpacity : View;
              const wrapperProps =
                idx === 0
                  ? {
                      onPress: handleFirstNotifPress,
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
                  <Image source={notif.image} style={styles.proPic} resizeMode="cover" />
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

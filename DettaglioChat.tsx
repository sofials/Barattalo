import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import ArrowRight from './icons/arrowRight.svg';
import CameraDoodle from './icons/books.svg';
import { MessagesContext, Message } from './MessagesContext';

import type { RootStackParamList } from './InboxStack';

type DettaglioChatRouteProp = RouteProp<RootStackParamList, 'DettaglioChat'>;

const DettaglioChat: React.FC = () => {
  const route = useRoute<DettaglioChatRouteProp>();
  const navigation = useNavigation();

  const { senderName, initialPreview, id } = route.params;
  const { messages, setMessages } = useContext(MessagesContext);
  const scrollViewRef = useRef<ScrollView>(null);
  const [input, setInput] = useState('');

  // Filtra i messaggi tra "Io" e interlocutore e — se presente — con requestId specifico
  let chatMessages = messages
    .filter(m =>
      ((m.sender === 'Io' && m.receiver === senderName) ||
       (m.sender === senderName && m.receiver === 'Io'))
      && (id ? m.id === id : true)
    )
    .sort((a, b) => a.id - b.id);

  // Se non ci sono messaggi e c'è initialPreview, aggiungilo temporaneamente
  if (chatMessages.length === 0 && initialPreview && initialPreview.trim() !== '') {
    chatMessages = [
      {
        id: 0,
        sender: senderName,
        receiver: 'Io',
        preview: initialPreview,
        unread: false,
        isnew: false,
        type: 'message',
      },
    ];
  }

  const interlocutorName = senderName;

  const fromMe = (msg: Message) => msg.sender === 'Io';

  // Prende dati contatto (immagine, offerta) da uno qualsiasi dei messaggi tra voi due e con requestId (se presente)
  const contactData = messages.find(
    m =>
      (m.sender === interlocutorName || m.receiver === interlocutorName)
      && (id ? m.id === id : true)
  );

  const sendMessage = () => {
    if (input.trim() === '') return;

    const newMessage: Message = {
  id: 123,
  sender: 'Mario',
  preview: 'Ciao!',
  unread: false,
  isnew: false,
  receiver: interlocutorName,
  type: 'message',
};

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }, 200);
  }, [interlocutorName, id]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Chat</Text>
        </View>
        <CameraDoodle width={40} height={40} />
      </View>

      {/* Info interlocutore */}
      <View style={styles.infoRow}>
        {contactData?.image ? (
          <Image source={contactData.image} style={styles.avatar} />
        ) : (
          <View
            style={[
              styles.avatar,
              { backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
            ]}
          >
            <Text style={{ fontSize: 24, color: '#fff' }}>
              {interlocutorName.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}

        <View style={{ marginLeft: 16, flexShrink: 1 }}>
          <Text style={styles.h1}>{interlocutorName}</Text>
          {contactData?.offertaTitolo && (
            <Text style={styles.sottotitolo}>
              le scrivi per:{' '}
              <Text style={{ color: '#6B53FF', fontWeight: 'bold' }}>
                {contactData.offertaTitolo}
              </Text>
            </Text>
          )}
        </View>
      </View>

      {/* Divider */}
      <Image
        source={require('./icons/divider.png')}
        style={{ width: '100%', height: 16, marginBottom: 8 }}
        resizeMode="contain"
      />

      {/* Chat + Input */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ flex: 1, paddingHorizontal: 16 }}
          contentContainerStyle={{ paddingVertical: 16 }}
          keyboardShouldPersistTaps="handled"
        >
          {chatMessages.map(msg => (
            <View
              key={msg.id}
              style={fromMe(msg) ? styles.baloonMe : styles.baloonSender}
            >
              <Text style={fromMe(msg) ? styles.textMe : styles.textSender}>
                {msg.preview}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Scrivi un messaggio..."
            value={input}
            onChangeText={setInput}
            placeholderTextColor="#aaa"
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Invia</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};


const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#6B53FF',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B53FF',
  },
  sottotitolo: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },
  baloonSender: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF4F4',
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 10,
    maxWidth: '80%',
  },
  textSender: {
    color: '#222',
    fontSize: 16,
  },
  baloonMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#689399',
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 10,
    maxWidth: '80%',
  },
  textMe: {
    color: '#fff',
    fontSize: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 100,
    borderRadius: 22,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
    color: '#222',
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#6B53FF',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

export default DettaglioChat;

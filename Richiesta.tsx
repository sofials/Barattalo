import React, { useEffect, useRef, useState, useContext } from 'react';
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
import ArrowRight from './icons/arrowRight.svg';
import CameraDoodle from './icons/books.svg';
import { usePunti } from './PuntiContext';
import { Annuncio } from './DettaglioAnnuncio';
import { MessagesContext } from './MessagesContext';

type RichiestaProps = {
  messaggio: string;
  onBack: () => void;
  annuncio: Annuncio;
};

const Richiesta: React.FC<RichiestaProps> = ({ messaggio, annuncio, onBack }) => {
  const { togliPunti } = usePunti();
  const { messages, setMessages } = useContext(MessagesContext);

  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    togliPunti(30);

    setMessages(prev => {
      const exists = prev.some(
        m => m.preview === messaggio && m.receiver === 'Laura' && m.sender === 'Io'
      );
      if (!exists) {
        // Calcola il massimo requestId esistente
        const maxRequestId = prev.reduce((maxId, msg) => {
          return msg.id && msg.id > maxId ? msg.id : maxId;
        }, 0);

        const initialMessage = {
          id: Date.now(),
          sender: 'Io',
          preview: messaggio,
          unread: true,
          source: 'user',
          image: require('./assets/anna.jpg'),
          receiver: 'Laura',
          isnew: true,
          offertaTitolo: annuncio.titolo,
          requestId: maxRequestId + 1,  // assegna nuovo requestId incrementale
        };
        return [initialMessage, ...prev];
      }
      return prev;
    });
  }, [messaggio, setMessages, togliPunti, annuncio.titolo]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === '') return;

    // Trova il requestId della richiesta principale (per associare messaggi collegati)
    const mainRequest = messages.find(
      m => m.preview === messaggio && m.sender === 'Io' && m.receiver === 'Laura'
    );

    const newMessage = {
      id: Date.now(),
      sender: 'Io',
      preview: input.trim(),
      unread: true,
      source: 'user',
      image: require('./assets/anna.jpg'),
      receiver: 'Laura',
      isnew: true,
      requestId: mainRequest ? mainRequest.id : undefined, // mantiene lo stesso requestId
    };

    console.log('[📨 INVIO] Aggiunto al contesto:', newMessage);
    setMessages(prev => [newMessage, ...prev]);
    setInput('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Barra superiore */}
      <View style={styles.topBar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={onBack}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Richiesta</Text>
        </View>
        <CameraDoodle width={40} height={40} />
      </View>

      {/* Info destinatario */}
      <View style={styles.infoRow}>
        <Image source={require('./assets/anna.jpg')} style={styles.avatar} />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.h1}>Laura</Text>
          <Text style={styles.sottotitolo}>
            richiesta inviata per:{' '}
            <Text style={{ color: '#6B53FF', fontWeight: 'bold' }}>
              {annuncio.titolo}
            </Text>
          </Text>
        </View>
      </View>

      {/* Divider */}
      <Image
        source={require('./icons/divider.png')}
        style={{ width: '100%', height: 16, marginBottom: 8 }}
        resizeMode="contain"
      />

      {/* Chat */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 16 }}
          contentContainerStyle={{ paddingVertical: 16 }}
          ref={scrollViewRef}
          keyboardShouldPersistTaps="handled"
        >
          {messages
            .filter(m => m.receiver === 'Laura')
            .map(msg => (
              <View
                key={msg.id}
                style={msg.sender === 'Io' ? styles.baloonMe : styles.baloonOther}
              >
                <Text style={msg.sender === 'Io' ? styles.textMe : styles.textOther}>
                  {msg.preview}
                </Text>
              </View>
            ))}
        </ScrollView>

        {/* Input per inviare messaggi */}
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

export default Richiesta;

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
  baloonMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#689399',
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 10,
    maxWidth: '80%',
  },
  baloonOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#ddd',
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
  textOther: {
    color: '#222',
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
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
    color: '#222',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#6B53FF',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

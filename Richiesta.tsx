import React, { useEffect, useRef, useState } from 'react';
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
import { Annuncio} from './DettaglioAnnuncio';

type RichiestaProps = {
  messaggio: string;
  onBack: () => void;
  annuncio: Annuncio;  // aggiungi questa riga
};

const Richiesta: React.FC<RichiestaProps> = ({ messaggio, annuncio, onBack }) => {
  const { togliPunti } = usePunti();
  const [messages, setMessages] = useState([{ id: 1, text: messaggio, from: 'me' }]);
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    togliPunti(30);
  }, []);

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages(prev => [...prev, { id: Date.now(), text: input, from: 'me' }]);
    setInput('');
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
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
             <Text style={{ color: '#6B53FF', fontWeight: 'bold' }}>{annuncio.titolo}</Text>
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
        >
          {messages.map((msg) => (
            <View key={msg.id} style={styles.baloonMe}>
              <Text style={styles.textMe}>{msg.text}</Text>
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
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
    color: '#222',
  },
  sendButton: {
    backgroundColor: '#6B53FF',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

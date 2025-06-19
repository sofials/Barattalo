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
import { usePunti } from './PuntiContext';
import { Annuncio } from './DettaglioAnnuncio';
import { MessagesContext, Message } from './MessagesContext';

// Importa NotificationsContext per aggiungere notifica
import { NotificationsContext } from './NotificationsContext';

type RichiestaProps = {
  messaggio: string;
  onBack: () => void;
  annuncio: Annuncio;
};

let uniqueCounter = 0;

const Richiesta: React.FC<RichiestaProps> = ({ messaggio, annuncio, onBack }) => {
  const { punti, togliPunti } = usePunti();
  const { messages, setMessages } = useContext(MessagesContext);

  // Usa NotificationsContext
  const { addNotification } = useContext(NotificationsContext);

  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const [mainMessageId, setMainMessageId] = useState<number | null>(null);

  useEffect(() => {
    togliPunti(30);
  }, []);

  useEffect(() => {
    setMessages(prev => {
      const existing = prev.find(
        m =>
          m.isnew &&
          m.preview === messaggio &&
          m.receiver === 'Laura' &&
          m.sender === 'Io' &&
          m.mainMessageId === m.id
      );

      if (existing) {
        setMainMessageId(existing.id);
        return prev;
      }

      uniqueCounter++;
      const newMainId = Date.now() + uniqueCounter;
      setMainMessageId(newMainId);

      const newMessage: Message = {
        id: newMainId,
        mainMessageId: newMainId,
        sender: 'Io',
        preview: messaggio,
        unread: false,  // <-- QUI unread false per i nuovi messaggi
        image: require('./assets/anna.jpg'),
        receiver: 'Laura',
        isnew: true,
        offertaTitolo: annuncio.titolo,
        offertaCategoria: annuncio.categoria,
        type: 'message' as const,
      };

      // Aggiungi notifica al contesto
      addNotification({
        title: 'Laura ha accettato la tua richiesta',
        preview: 'Vedi cosa ti ha scritto Laura',
        image: require('./assets/anna.jpg'),
        unread: true,
      });

      return [newMessage, ...prev];
    });
  }, [messaggio, annuncio.titolo, setMessages]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === '' || mainMessageId === null) return;

    uniqueCounter++;
    const newId = Date.now() + uniqueCounter;

    const newMessage: Message = {
      id: newId,
      mainMessageId,
      sender: 'Io',
      preview: input.trim(),
      unread: false,  // <-- QUI unread false per i nuovi messaggi
      image: require('./assets/anna.jpg'),
      receiver: 'Laura',
      isnew: true,
      type: 'message' as const,
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const filteredMessages = messages.filter(
    m => m.isnew && m.mainMessageId === mainMessageId
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', position: 'relative' }}>
      <View style={puntiStyles.puntiBox}>
        <View style={puntiStyles.puntiRiquadro}>
          <Text style={puntiStyles.puntiText}>{punti} punti</Text>
        </View>
      </View>

      <View style={styles.topBar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={onBack}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Richiesta</Text>
        </View>
      </View>

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

      <Image
        source={require('./icons/divider.png')}
        style={{ width: '100%', height: 16, marginBottom: 8 }}
        resizeMode="contain"
      />

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
          {filteredMessages.map(msg => (
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

const puntiStyles = StyleSheet.create({
  puntiBox: {
    position: 'absolute',
    top: 32,
    right: 24,
    zIndex: 20,
  },
  puntiRiquadro: {
    backgroundColor: '#EBDBCD',
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  puntiText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B53FF',
  },
});

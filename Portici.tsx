import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowRight from './icons/arrowRight.svg';

const groupMessages = [
  {
    id: 1,
    text: "Ciao a tutti! Chi viene a Portici di Carta domani?",
    from: 'Anna',
    avatar: require('./assets/anna.jpg'),
  },
  {
    id: 2,
    text: "Io ci sono! Vi va un caffè prima dell’evento?",
    from: 'Luca',
    avatar: require('./assets/gianni.png'),
  },
  {
    id: 3,
    text: "Ottima idea! A che ora ci troviamo?",
    from: 'Anna',
    avatar: require('./assets/anna.jpg'),
  },
  {
    id: 4,
    text: "Direi alle 9:30 davanti all’ingresso principale, che ne dite?",
    from: 'Giulia',
    avatar: require('./assets/giulia.jpg'),
  },
  {
    id: 5,
    text: "Perfetto per me! Porto anche una mia amica.",
    from: 'Luca',
    avatar: require('./assets/gianni.png'),
  },
  {
    id: 6,
    text: "A domani allora! Non vedo l’ora 😊",
    from: 'Giulia',
    avatar: require('./assets/giulia.jpg'),
  },
];

const Portici: React.FC = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState(groupMessages);
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([
      ...messages,
      {
        id: Date.now(),
        text: input,
        from: 'Tu',
        avatar: require('./assets/portici.jpg'),
      },
    ]);
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Portici di Carta</Text>
        </View>
        <Image
          source={require('./assets/portici.jpg')}
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
      </View>

      {/* Info Evento */}
      <View style={styles.infoRow}>
        <Image
          source={require('./assets/portici.jpg')}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.h1}>Portici di Carta</Text>
          <Text style={styles.sottotitolo}>
            Chat di gruppo per l’evento
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={{ width: '100%', height: 16, marginBottom: 8, backgroundColor: '#D8D1FF' }} />

      {/* Chat */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 16 }}
          contentContainerStyle={{ paddingVertical: 16 }}
          ref={scrollViewRef}
        >
          {messages.map((msg, idx) => (
            <View key={msg.id} style={msg.from === 'Tu' ? styles.baloonMe : styles.baloonOther}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={msg.avatar} style={styles.userAvatar} />
                <Text style={styles.userName}>{msg.from}</Text>
              </View>
              <Text style={msg.from === 'Tu' ? styles.textMe : styles.textOther}>{msg.text}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#2B31BA',
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
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B31BA',
  },
  sottotitolo: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },
  baloonOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#EBDBCD',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    maxWidth: '80%',
    marginLeft: 0,
  },
  baloonMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#D8D1FF',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    maxWidth: '80%',
    marginRight: 0,
  },
  textOther: {
    color: '#2B31BA',
    fontSize: 15,
    marginTop: 4,
  },
  textMe: {
    color: '#fff',
    fontSize: 15,
    marginTop: 4,
  },
  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D8D1FF',
  },
  userName: {
    fontWeight: 'bold',
    color: '#2B31BA',
    fontSize: 13,
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
    backgroundColor: '#2B31BA',
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
});

export default Portici;
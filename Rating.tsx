import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowRight from './icons/arrowRight.svg';
import CameraDoodle from './icons/books.svg';
import Star from './icons/star.svg';
import StarFull from './icons/starFull.svg';

const Rating: React.FC = () => {
  const navigation = useNavigation<any>();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Banner superiore */}
      <View style={styles.topBar}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowRight width={32} height={32} />
          </TouchableOpacity>
          <Text style={styles.title}>Notifiche</Text>
        </View>
        <CameraDoodle width={40} height={40} />
      </View>

      {/* Info Giulia */}
      <View style={styles.infoRow}>
        <Image
          source={require('./assets/giulia.jpg')}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.h1}>Giulia</Text>
          <Text style={styles.sottotitolo}>
            vuole sapere cosa pensi di: <Text style={{ color: '#6B53FF', fontWeight: 'bold' }}>Aiuto Spid</Text>
          </Text>
        </View>
      </View>

      {/* Divider */}
      <Image
        source={require('./icons/divider.png')}
        style={{ width: '100%', height: 16, marginBottom: 8 }}
        resizeMode="contain"
      />

      {/* Sezione stelle */}
      <View style={{ paddingHorizontal: 24, marginTop: 16 }}>
        <Text style={styles.h2}>Quante stelle daresti all'Aiuto?</Text>
        <Text style={styles.paragrafo}>Scrivi la tua recensione qui sotto</Text>
        <View style={{ flexDirection: 'row', marginVertical: 16 }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity key={num} onPress={() => setRating(num)} activeOpacity={0.7}>
              {rating >= num ? (
                <StarFull width={40} height={40} style={{ marginRight: 8 }} />
              ) : (
                <Star width={40} height={40} style={{ marginRight: 8 }} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.h3}>Vuoi scrivere qualcosa su questo Aiuto? Dicci di più!</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Scrivi qui la tua recensione..."
          value={review}
          onChangeText={setReview}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />
      </View>
      <TouchableOpacity
        style={styles.sendButton}
        onPress={() => navigation.navigate('Inbox')}
        activeOpacity={0.8}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
          Invia
        </Text>
      </TouchableOpacity>
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
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  h3: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    marginTop: 16,
  },
  paragrafo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  textArea: {
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    padding: 16,
    minHeight: 100,
    color: '#222',
  },
  sendButton: {
    backgroundColor: '#6B53FF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    alignItems: 'center',
  },
});

export default Rating;
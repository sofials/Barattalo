import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import styles from './Eventi.styles';
import BooksIcon from './icons/books.svg';
import Girl01 from './icons/girl01.svg';

const eventi = [
  {
    id: 1,
    titolo: 'Portici di Carta',
    immagine: require('./assets/portici.jpg'),
    descrizione: 'Vieni a scoprire una montagna di libri sotto i portici di Torino!',
  },
  {
    id: 2,
    titolo: 'La Notte si Riempie di Stelle',
    immagine: require('./assets/cinema.png'),
    descrizione: 'Il Museo Nazionale del Cinema di Torino apre le porte per una notte speciale.',
  },
  {
    id: 3,
    titolo: 'Degustazione di vini',
    immagine: require('./assets/vino.jpg'),
    descrizione: 'Vieni a scoprire i migliori vini piemontesi in una serata di degustazione esclusiva.',
  },
];

const Eventi = () => {
  const [search, setSearch] = useState('');

  const eventiFiltrati = eventi.filter(e =>
    e.titolo.toLowerCase().includes(search.toLowerCase()) ||
    e.descrizione.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
      {/* TopBar più in basso */}
      <View style={styles.topBar}>
        <BooksIcon width={40} height={40} />
        <Text style={styles.titolo}>Eventi</Text>
      </View>

      {/* Barra di ricerca subito dopo la topBar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Cerca un evento..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#222"
      />

      <ScrollView style={styles.eventiContainer} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.eventoSezione}>
          {/* Sottotitolo più grande */}
          <Text style={styles.sottotitolo}>Potrebbero interessarti:</Text>
          {eventiFiltrati.map(evento => (
            <View key={evento.id} style={styles.eventoItem}>
              <Image
                source={evento.immagine}
                style={styles.eventoImg}
                resizeMode="cover"
              />
              <View style={styles.eventoContent}>
                <Text style={styles.eventoTesto}>{evento.titolo}</Text>
                <Text style={styles.eventoDescrizione}>{evento.descrizione}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Icona in basso a destra */}
      <Girl01 width={80} height={80} style={styles.girlIcon} />
    </View>
  );
};

export default Eventi;

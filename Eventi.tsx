import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useEventi, categories, Evento } from './EventiContext';
import styles from './Eventi.styles';
import CameraDoodle from './icons/books.svg';
import Filtri from './Filtri';
import DettaglioEvento from './DettaglioEvento';

const immagineDefault = require('./images/barattalo.jpeg');
const { width: screenWidth } = Dimensions.get('window');

const Eventi: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filtroCategorie, setFiltroCategorie] = useState<string[]>([]);
  const [filtroDistanza, setFiltroDistanza] = useState<number>(50);
  const [showFiltri, setShowFiltri] = useState(false);
  const [eventoSelezionato, setEventoSelezionato] = useState<Evento | null>(null);

  const filteredEventi = () =>
    eventi.filter(a => {
      if (a.isNew) return false;
      if (filtroCategorie.length > 0 && !filtroCategorie.includes(a.categoria)) return false;
      if (!a.titolo.toLowerCase().includes(search.toLowerCase())) return false;
      if (a.km !== undefined && a.km > filtroDistanza) return false;
      return true;
    });

  const categorieDaMostrare = filtroCategorie.length > 0 ? filtroCategorie : categories;

  if (eventoSelezionato) {
    return (
      <DettaglioEvento
        evento={eventoSelezionato}
        onBack={() => setEventoSelezionato(null)}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      {/* Header fisso con titolo e barra ricerca */}
      <View style={styles.headerFixed}>
        <View style={styles.titoloWrapper}>
          <CameraDoodle width={40} height={40} />
          <Text style={styles.titoloTesto}>Annunci</Text>
        </View>

        <View style={styles.searchWrapper}>
          <View style={[styles.searchBox, { width: Math.min(340, screenWidth * 0.9) }]}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Cerca..."
                placeholderTextColor="#333"
                value={search}
                onChangeText={setSearch}
                style={styles.searchInput}
                autoCorrect={false}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => setShowFiltri(true)}
              >
                <Text style={styles.filterButtonText}>Filtri</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    
    </View>
  );
};

export default Eventi;

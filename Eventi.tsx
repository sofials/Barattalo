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
import { useEventi, categorie, Evento } from './EventiContext';
import styles from './Eventi.styles';
import CameraDoodle from './icons/books.svg';
import FiltriEventi from './FiltriEventi';
import DettaglioEvento from './DettaglioEvento';
import { useNavigation } from '@react-navigation/native';
import Portici from './Portici';

const immagineDefault = require('./images/barattalo.jpeg');
const { width: screenWidth } = Dimensions.get('window');

const Eventi: React.FC = () => {
  const { eventi } = useEventi();
  const [search, setSearch] = useState('');
  const [filtroCategorie, setFiltroCategorie] = useState<string[]>([]);
  const [filtroDistanza, setFiltroDistanza] = useState<number>(50);
  const [showFiltri, setShowFiltri] = useState(false);
  const [eventoSelezionato, setEventoSelezionato] = useState<Evento | null>(null);
  const navigation = useNavigation();

  const filteredEventi = () =>
    eventi.filter((a: Evento) => {
      if (filtroCategorie.length > 0 && !filtroCategorie.includes(a.categoria)) return false;
      if (!a.titolo.toLowerCase().includes(search.toLowerCase())) return false;
      if (a.km !== undefined && a.km > filtroDistanza) return false;
      return true;
    });

  const categorieDaMostrare = filtroCategorie.length > 0 ? filtroCategorie : categorie;

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
          <Text style={styles.titoloTesto}>Eventi</Text>
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

      {/* Lista eventi */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 220 }}
      >
        {categorieDaMostrare.map(categoria => {
          const filtered = filteredEventi().filter(a => a.categoria === categoria);
          if (filtered.length === 0) return null;

          return (
            <View key={categoria} style={styles.categoria}>
              <Text style={styles.categoriaTitolo}>{categoria}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
                style={{ height: 180 }}
              >
                {filtered.map((a, i: number) => {
                  const isDefaultImage = a.immagine === immagineDefault;

                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.card}
                      onPress={() => setEventoSelezionato(a)}
                    >
                      <Image
                        source={a.immagine ?? immagineDefault}
                        style={isDefaultImage ? styles.cardImageDefault : styles.cardImage}
                        resizeMode={isDefaultImage ? 'contain' : 'cover'}
                      />
                      <Text style={styles.cardTitle}>{a.titolo}</Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>

      <FiltriEventi
        visible={showFiltri}
        initialCategories={filtroCategorie}
        initialDistance={filtroDistanza}
        onClose={() => setShowFiltri(false)}
        onApply={(selectedCategories, distanceKm) => {
          setFiltroCategorie(selectedCategories);
          setFiltroDistanza(distanceKm);
          setShowFiltri(false);
        }}
      />
    </View>
  );
};

export default Eventi;

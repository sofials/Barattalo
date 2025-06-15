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
import { useAnnunci, categories, Annuncio } from './AnnunciContext';
import styles from './Offerte.styles';
import CameraDoodle from './icons/books.svg';
import Filtri from './Filtri';
import DettaglioAnnuncio from './DettaglioAnnuncio';

const immagineDefault = require('./images/barattalo.jpeg');
const { width: screenWidth } = Dimensions.get('window');

const Offerte: React.FC = () => {
  const { annunci } = useAnnunci();
  const [search, setSearch] = useState('');
  const [filtroCategorie, setFiltroCategorie] = useState<string[]>([]);
  const [filtroDistanza, setFiltroDistanza] = useState<number>(50);
  const [showFiltri, setShowFiltri] = useState(false);
  const [annuncioSelezionato, setAnnuncioSelezionato] = useState<Annuncio | null>(null);

  // Calcolo filtrati una volta sola
  const filteredAnnunci = annunci.filter(a => {
    if (a.isNew) return false;
    if (filtroCategorie.length > 0 && !filtroCategorie.includes(a.categoria)) return false;
    if (!a.titolo.toLowerCase().includes(search.toLowerCase())) return false;
    if (a.km !== undefined && a.km > filtroDistanza) return false;
    return true;
  });

  const categorieDaMostrare = filtroCategorie.length > 0 ? filtroCategorie : categories;

  if (annuncioSelezionato) {
    return (
      <DettaglioAnnuncio
        annuncio={annuncioSelezionato}
        onBack={() => setAnnuncioSelezionato(null)}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      {/* Header fisso con titolo e barra ricerca */}
      <View style={styles.headerFixed}>
        <View style={styles.titoloWrapper}>
          <CameraDoodle width={32} height={32} style={styles.titoloIcona} />
          <Text style={styles.titoloTesto}>Annunci</Text>
        </View>

        <View style={styles.searchWrapper}>
          <View style={[styles.searchBox, { width: Math.min(340, screenWidth * 0.9) }]}>
            <View style={styles.searchContainer}>
              <TextInput
                placeholder="Cerca annunci..."
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
              {/* Rimosso icona extra qui */}
            </View>
          </View>
        </View>
      </View>

      {/* Lista annunci */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 180 }}
      >
        {categorieDaMostrare.map(categoria => {
          const filtered = filteredAnnunci.filter(a => a.categoria === categoria);
          if (filtered.length === 0) return null;

          return (
            <View key={categoria} style={styles.categoria}>
              <Text style={styles.categoriaTitolo}>{categoria}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
              >
                {filtered.map((a, i) => {
                  // Controllo immagine default più robusto: se a.immagine non esiste o è null
                  const isDefaultImage = !a.immagine;
                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.card}
                      onPress={() => setAnnuncioSelezionato(a)}
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

      <Filtri
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

export default Offerte;

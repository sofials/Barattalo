import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { useAnnunci, categories, Annuncio } from './AnnunciContext';
import { usePunti } from './PuntiContext';
import styles from './Offerte.styles';
import CameraDoodle from './icons/books.svg';
import Filtri from './Filtri';
import DettaglioAnnuncio from './DettaglioAnnuncio';
import Prenotazione from './Prenotazione';
import Richiesta from './Richiesta';

const immagineDefault = require('./images/barattalo.jpeg');
const { width: screenWidth } = Dimensions.get('window');

const Offerte: React.FC = () => {
  const route = useRoute<any>();
  const { annunci } = useAnnunci();
  const { punti } = usePunti();

  const [search, setSearch] = useState('');
  const [filtroCategorie, setFiltroCategorie] = useState<string[]>([]);
  const [filtroDistanza, setFiltroDistanza] = useState<number>(50);
  const [showFiltri, setShowFiltri] = useState(false);
  const [annuncioSelezionato, setAnnuncioSelezionato] = useState<Annuncio | null>(null);
  const [prenotazioneAttiva, setPrenotazioneAttiva] = useState<Annuncio | null>(null);
  const [messaggioInviato, setMessaggioInviato] = useState<string | null>(null);

  // Quando la tab diventa attiva o cambia il parametro search, aggiorna il filtro
  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.search !== undefined) {
        setSearch(route.params.search);
      }
    }, [route.params?.search])
  );

  const filteredAnnunci = () =>
    annunci.filter(a => {
      if (a.isNew) return false;
      if (filtroCategorie.length > 0 && !filtroCategorie.includes(a.categoria)) return false;
      if (!a.titolo.toLowerCase().includes(search.toLowerCase())) return false;
      if (a.km !== undefined && a.km > filtroDistanza) return false;
      return true;
    });

  const categorieDaMostrare = filtroCategorie.length > 0 ? filtroCategorie : categories;

  if (messaggioInviato && prenotazioneAttiva) {
    return (
      <Richiesta
        messaggio={messaggioInviato}
        annuncio={prenotazioneAttiva}
        onBack={() => {
          setMessaggioInviato(null);
          setPrenotazioneAttiva(null);
        }}
      />
    );
  }

  if (prenotazioneAttiva) {
    return (
      <Prenotazione
        annuncio={prenotazioneAttiva}
        onBack={() => setPrenotazioneAttiva(null)}
        onConferma={(msg) => setMessaggioInviato(msg)}
      />
    );
  }

  if (annuncioSelezionato) {
    return (
      <DettaglioAnnuncio
        annuncio={annuncioSelezionato}
        onBack={() => setAnnuncioSelezionato(null)}
        onRichiedi={() => {
          setPrenotazioneAttiva(annuncioSelezionato);
          setAnnuncioSelezionato(null);
        }}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      {/* Header fisso */}
      <View style={styles.headerFixed}>
        <View style={styles.titoloWrapper}>
          <CameraDoodle width={40} height={40} />
          <Text style={styles.titoloTesto}>Annunci</Text>
        </View>
        <View style={styles.puntiBox}>
          <View style={styles.puntiRiquadro}>
            <Text style={styles.puntiText}>{punti} punti</Text>
          </View>
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

      {/* Lista annunci */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 220 }}
      >
        {categorieDaMostrare.map(categoria => {
          const filtered = filteredAnnunci().filter(a => a.categoria === categoria);
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
                {filtered.map((a, i) => {
                  const isDefaultImage = a.immagine === immagineDefault;
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

      {/* Filtro Modale */}
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

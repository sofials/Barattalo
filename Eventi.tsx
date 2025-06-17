import React, { useState, createContext, ReactNode } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useEventi, categoriesE, Evento } from './EventiContext';
import styles from './Eventi.styles';
import CameraDoodle from './icons/books.svg';
import Filtri from './Filtri';
import DettaglioEvento from './DettaglioEvento';
import { useNavigation } from '@react-navigation/native';
import Portici from './Portici'; // Assicurati di importare il componente Portici

const immagineDefault = require('./images/barattalo.jpeg');
const { width: screenWidth } = Dimensions.get('window');

// Usa solo il tipo Evento importato da EventiContext

const Eventi: React.FC = () => {
  const { eventi } = useEventi();
  const [search, setSearch] = useState('');
  const [filtroCategorieE, setFiltroCategorieE] = useState<string[]>([]);
  const [filtroDistanza, setFiltroDistanza] = useState<number>(50);
  const [showFiltri, setShowFiltri] = useState(false);
  const [eventoSelezionato, setEventoSelezionato] = useState<(Evento & { descrizione: string; puntiAnnuncio: number }) | null>(null);
  const navigation = useNavigation();

  const filteredEventi = () =>
    eventi.filter((a: Evento) => {
      if (a.isNew) return false;
      if (filtroCategorieE.length > 0 && !filtroCategorieE.includes(a.categoriaE)) return false;
      if (!a.titolo.toLowerCase().includes(search.toLowerCase())) return false;
      if (a.km !== undefined && a.km > filtroDistanza) return false;
      return true;
    });

  const categorieEDaMostrare = filtroCategorieE.length > 0 ? filtroCategorieE : categoriesE;

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

      {/* Lista annunci */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 220 }}
      >
        {categorieEDaMostrare.map(categoriaE => {
          const filtered = filteredEventi().filter(a => a.categoriaE === categoriaE);
          if (filtered.length === 0) return null;

          return (
            <View key={categoriaE} style={styles.categoria}>
              <Text style={styles.categoriaTitolo}>{categoriaE}</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
                style={{ height: 180 }}  // Altezza fissa per contenitore ScrollView orizzontale
              >
                {filtered.map((a, i: number) => {
                  const isDefaultImage = a.immagine === immagineDefault;
                  const rating = typeof a.rating === 'number' ? a.rating : 4;

                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.card}
                      onPress={() =>
                        setEventoSelezionato({
                          ...a,
                          descrizione: a.descrizione ?? '',
                          puntiAnnuncio: a.rating ?? 0,
                        })
                      }
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
        initialCategories={filtroCategorieE}
        initialDistance={filtroDistanza}
        onClose={() => setShowFiltri(false)}
        onApply={(selectedCategories, distanceKm) => {
          setFiltroCategorieE(selectedCategories);
          setFiltroDistanza(distanceKm);
          setShowFiltri(false);
        }}
      />
    </View>
  );
};

export default Eventi;

export type EventoContextType = {
  eventi: Evento[];
  // altre proprietà eventualmente già presenti
};

export const EventoContext = createContext<EventoContextType | undefined>(undefined);

export const EventoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [eventi, setEventi] = React.useState<Evento[]>([]); // oppure il tuo stato eventi

  return (
    <EventoContext.Provider value={{ eventi }}>
      {children}
    </EventoContext.Provider>
  );
};

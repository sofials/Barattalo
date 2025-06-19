import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './DettaglioAnnuncio.styles';
import { usePunti } from './PuntiContext';  // Importa il context punti

export type Annuncio = {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: any;
  km?: number;
  puntiAnnuncio: number;
  rating?: number;
};

type DettaglioAnnuncioProps = {
  annuncio: Annuncio;
  onBack: () => void;
  onRichiedi: () => void;
};

const DettaglioAnnuncio: React.FC<DettaglioAnnuncioProps> = ({ annuncio, onBack, onRichiedi }) => {
  const { punti } = usePunti();  // Leggi i punti

  const hasRating = typeof annuncio.rating === 'number' && annuncio.rating >= 0;

  const renderStars = (rating?: number) => {
    if (typeof rating !== "number" || rating < 0) return null;
    const starColor = styles.richiediButton.backgroundColor;
    return (
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        {[...Array(5)].map((_, i) => (
          <Text key={i} style={{ color: i < rating ? starColor : 'lightgray', fontSize: 20, marginRight: 2 }}>
            ★
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Box punti in alto a destra */}
      <View style={styles.puntiBox}>
        <View style={styles.puntiRiquadro}>
          <Text style={styles.puntiText}>{punti} punti</Text>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 140 }}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Annunci</Text>
        </TouchableOpacity>

        <Image
          source={annuncio.immagine ?? require('./images/barattalo.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.title}>{annuncio.titolo}</Text>
        <Text style={styles.category}>{annuncio.categoria}</Text>

        <Text style={styles.titleDescription}>Descrizione</Text>
        <Text style={styles.description}>{annuncio.descrizione}</Text>

        {hasRating && (
          <>
            <Text style={styles.titleDescription}>Recensione</Text>
            {renderStars(annuncio.rating)}
          </>
        )}
      </ScrollView>

      <TouchableOpacity onPress={onRichiedi} style={styles.richiediButton} activeOpacity={0.8}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.richiediButtonText}>Richiedi</Text>
          <Text style={styles.richiediButtonPoints}>{annuncio.puntiAnnuncio} punti</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DettaglioAnnuncio;

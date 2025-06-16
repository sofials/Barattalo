import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import styles from './DettaglioAnnuncio.styles';

export type Annuncio = {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: ImageSourcePropType;
  km?: number;
  puntiAnnuncio: number;
  rating?: number;
};

type DettaglioAnnuncioProps = {
  annuncio: Annuncio;
  onBack: () => void;
};

const DettaglioAnnuncio: React.FC<DettaglioAnnuncioProps> = ({ annuncio, onBack }) => {
  const handleRichiediPress = () => {
    console.log("Richiesta inviata al proprietario");
  };

  // Variabile booleana che indica se il rating è valido
  const hasRating = typeof annuncio.rating === 'number' && annuncio.rating >= 0;

  // Funzione per mostrare le stelle piene o vuote con colore dello sfondo del bottone
  const renderStars = (rating?: number) => {
    if (typeof rating !== "number" || rating < 0) {
      return null;
    }

    const starColor = styles.richiediButton.backgroundColor; // '#d8d1ff'

    return (
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        {[...Array(5)].map((_, i) => (
          <Text
            key={i}
            style={{ color: i < rating ? starColor : 'lightgray', fontSize: 20, marginRight: 2 }}
          >
            ★
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
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

      <TouchableOpacity
        onPress={handleRichiediPress}
        style={styles.richiediButton}
        activeOpacity={0.8}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.richiediButtonText}>Richiedi</Text>
          <Text style={styles.richiediButtonPoints}>{annuncio.puntiAnnuncio} punti</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DettaglioAnnuncio;

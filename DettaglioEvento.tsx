import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import styles from './DettaglioEvento.styles'; // Puoi mantenerlo o crearne uno nuovo per eventi

export type Evento = {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: ImageSourcePropType;
  km?: number;
  puntiAnnuncio: number;
  rating?: number;
};

type DettaglioEventoProps = {
  evento: Evento;
  onBack: () => void;
};

const DettaglioEvento: React.FC<DettaglioEventoProps> = ({ evento, onBack }) => {
  const handleRichiediPress = () => {
    console.log('Partecipazione richiesta all’evento');
  };

  const hasRating = typeof evento.rating === 'number' && evento.rating >= 0;

  const renderStars = (rating?: number) => {
    if (typeof rating !== 'number' || rating < 0) return null;

    const starColor = styles.richiediButton.backgroundColor;

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
          <Text style={styles.backButtonText}>← Eventi</Text>
        </TouchableOpacity>

        <Image
          source={evento.immagine ?? require('./images/barattalo.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.title}>{evento.titolo}</Text>
        <Text style={styles.category}>{evento.categoria}</Text>

        <Text style={styles.titleDescription}>Descrizione</Text>
        <Text style={styles.description}>{evento.descrizione}</Text>

        {hasRating && (
          <>
            <Text style={styles.titleDescription}>Recensione</Text>
            {renderStars(evento.rating)}
          </>
        )}
      </ScrollView>

      <TouchableOpacity
        onPress={handleRichiediPress}
        style={styles.richiediButton}
        activeOpacity={0.8}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.richiediButtonText}>Partecipa</Text>
          <Text style={styles.richiediButtonPoints}>{evento.puntiAnnuncio} punti</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DettaglioEvento;

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ImageSourcePropType } from 'react-native';
import styles from './DettaglioAnnuncio.styles';

export type Annuncio = {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: ImageSourcePropType;
  km?: number;
};

type DettaglioAnnuncioProps = {
  annuncio: Annuncio;
  onBack: () => void;
};

const DettaglioAnnuncio: React.FC<DettaglioAnnuncioProps> = ({ annuncio, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Indietro</Text>
      </TouchableOpacity>

      <Image
        source={annuncio.immagine ?? require('./images/barattalo.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{annuncio.titolo}</Text>
      <Text style={styles.category}>{annuncio.categoria}</Text>
      {annuncio.km !== undefined && (
        <Text style={styles.km}>{annuncio.km} km</Text>
      )}
      <Text style={styles.description}>{annuncio.descrizione}</Text>
    </View>
  );
};

export default DettaglioAnnuncio;

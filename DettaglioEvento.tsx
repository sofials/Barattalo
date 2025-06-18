import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DettaglioEvento.styles';

export type Evento = {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: ImageSourcePropType;
  km?: number;
};

type DettaglioEventoProps = {
  evento: Evento;
  onBack: () => void;
};

const DettaglioEvento: React.FC<DettaglioEventoProps> = ({ evento, onBack }) => {
  const navigation = useNavigation<any>();

  const handleRichiediPress = () => {
    if (evento.titolo === 'Portici di Carta') {
      navigation.navigate('Portici');
    } else {
      console.log('Partecipazione richiesta all’evento');
    }
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
      </ScrollView>

      <TouchableOpacity
        onPress={handleRichiediPress}
        style={styles.richiediButton}
        activeOpacity={0.8}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.richiediButtonText}>Partecipa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DettaglioEvento;

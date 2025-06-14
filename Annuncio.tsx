import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Annuncio: React.FC<any> = ({ route }) => {
  const { annuncio } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: annuncio.immagine }} style={styles.img} />
      <Text style={styles.titolo}>{annuncio.titolo}</Text>
      <Text style={styles.descrizione}>{annuncio.descrizione}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  titolo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  descrizione: {
    fontSize: 16,
    color: '#444',
  },
});

export default Annuncio;
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

const reviews = [
  {
    name: 'Simone',
    image: require('./images/marco.jpeg'),
    stars: 5,
    annuncio: 'Ripetizioni di italiano',
    description: 'Elio è un insegnante fantastico! Le sue lezioni sono sempre interessanti e coinvolgenti.',
  },
  {
    name: 'Giulia', 
    image: require('./images/giulia.jpeg'),
    stars: 5,
    annuncio: 'Ripetizioni di italiano',
    description: 'Molto paziente e disponibile, ho imparato tanto grazie a lui!',
  },
  {
    name: 'Marco',
    image: require('./images/simone.jpeg'),
    stars: 5,
    annuncio: 'Ripetizioni di italiano',
    description: 'Elio ha una grande passione per l\'insegnamento, lo consiglio vivamente!',
  },
];

const Profilo: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* AVATAR E NOME */}
        <View style={styles.centered}>
          <Image source={require('./images/elio.jpg')} style={styles.avatar} />
          <View style={styles.pointsBox}>
            <Text style={styles.pointsText}>Elio 700pt</Text>
          </View>
        </View>

        {/* BIOGRAFIA */}
        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Biografia</Text>
          <Text style={styles.description}>
            Ciao sono Elio! Sono un ex insegnante in pensione, amo leggere, amo raccontare storie e amo vivere la vita! Se hai bisogno di aiuto chiedi pure!
          </Text>
        </View>

        {/* ANNUNCI */}
        <View style={styles.box}>
          <Text style={styles.sectionTitle}>I miei annunci</Text>
          <View style={styles.annunciRow}>
            <View style={styles.annuncio}>
              <View style={styles.annuncioIcon}><Text style={styles.annuncioEmoji}>📘</Text></View>
              <Text style={styles.annuncioText}>Ripetizioni di italiano</Text>
            </View>
          </View>
        </View>

        {/* RECENSIONI */}
        <View style={[styles.box, { maxHeight: 350 }]}>
          <Text style={[styles.sectionTitle, { textAlign: 'center' }]}>Recensioni</Text>
          <Text style={styles.ratingValue}>5</Text>
          <Text style={styles.stars}>★ ★ ★ ★ ★</Text>

          <FlatList
            data={reviews}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.reviewCard}>
                <Image source={item.image} style={styles.reviewImage} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.reviewName}>{item.name}</Text>
                  <Text style={styles.reviewAnnuncio}> • {item.annuncio}</Text>
                  <Text style={styles.reviewStars}>
                    {'★'.repeat(item.stars)}{'☆'.repeat(5 - item.stars)}
                  </Text>
                  <Text style={styles.reviewDescription}>{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  centered: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  pointsBox: {
    marginTop: 10,
    backgroundColor: '#efd7cd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  pointsText: {
    fontWeight: '600',
    color: '#333',
  },
  box: {
    backgroundColor: '#f0e9e3',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  sectionTitle: {
    color: '#9e938a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    marginTop: 6,
    color: '#333',
    fontSize: 14,
  },
  annunciRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  annuncio: {
    width: '30%',
    alignItems: 'center',
  },
  annuncioIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  annuncioEmoji: {
    fontSize: 24,
  },
  annuncioText: {
    fontSize: 12,
    textAlign: 'center',
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  stars: {
    fontSize: 20,
    color: '#f5b301',
    textAlign: 'center',
    marginBottom: 16,
  },
  reviewCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    borderColor: '#d4c8ff',
    borderWidth: 1,
    marginBottom: 12,
  },
  reviewImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  reviewStars: {
    fontSize: 18,
    color: '#f5b301',
  },
  reviewDescription: {
    marginTop: 4,
    fontSize: 14,
    color: '#444',
  },
  reviewAnnuncio: {
  fontSize: 12,
  color: '#777',
  marginLeft: 4,
},
});

export default Profilo;

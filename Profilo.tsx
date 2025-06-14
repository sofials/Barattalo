import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Elio from './icons/elio.svg';
import BlueIdea from './icons/blueIdea.svg';

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

const averageRating = (
  reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length
).toFixed(1);

const Profilo: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <BlueIdea width={60} height={90} style={styles.blueIdeaIcon} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.centered}>
          <View style={styles.svgAvatarWrapper}>
            <Elio width={140} height={140} />
          </View>
          <Text style={styles.nome}>Elio</Text>
          <View style={styles.pointsBox}>
            <Text style={styles.pointsText}>120 punti</Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Biografia</Text>
          <Text style={styles.description}>
            Ciao sono Elio! Sono un ex insegnante in pensione. Amo leggere, amo raccontare storie e amo vivere la vita! Se hai bisogno di aiuto chiedi pure!
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Annunci</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <View style={styles.annuncioCard}>
              <Image
                source={require('./icons/italiano.png')}
                style={styles.annuncioCardImg}
                resizeMode="cover"
              />
              <View style={styles.annuncioCardTextBox}>
                <Text style={styles.annuncioCardText}>Ripetizioni di italiano</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Recensioni</Text>
          <Text style={styles.ratingAverage}>⭐️ {averageRating} / 5</Text>
          {reviews.map((review, index) => (
            <View key={index} style={styles.reviewCard}>
              <Image source={review.image} style={styles.reviewImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <Text style={styles.reviewStars}>⭐️⭐️⭐️⭐️⭐️</Text>
                <Text style={styles.reviewAnnuncio}>{review.annuncio}</Text>
                <Text style={styles.reviewDescription}>{review.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    padding: 20,
  },
  centered: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 10,
    marginTop: 60,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2B31BA',
  },
  pointsBox: {
    backgroundColor: '#EBDBCD',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 6,
  },
  pointsText: {
    color: '#2B31BA',
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    borderColor: '#D8D1FF',
    borderWidth: 1,
  },
  sectionTitle: {
    color: '#2B31BA',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  annunciRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  annuncioCard: {
    width: 120,
    height: 120,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor: '#D8D1FF',
    marginRight: 12,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#2B31BA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    alignItems: 'center',
  },
  annuncioCardImg: {
    width: '100%',
    height: 75,
  },
  annuncioCardTextBox: {
    backgroundColor: '#FFF',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  annuncioCardText: {
    fontSize: 13,
    color: '#2B31BA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratingAverage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B31BA',
    marginBottom: 12,
  },
  reviewCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    borderColor: '#D8D1FF',
    borderWidth: 1,
    marginBottom: 10,
  },
  reviewImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2B31BA',
  },
  reviewStars: {
    fontSize: 14,
    color: '#F5B301',
  },
  reviewAnnuncio: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  reviewDescription: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
  },
  svgAvatarWrapper: {
  width: 140,
  height: 140,
  borderRadius: 70,
  overflow: 'hidden',
  marginBottom: 10,
  marginTop: 30,
  borderWidth: 2,
  borderColor: '#D8D1FF',
  justifyContent: 'center',
  alignItems: 'center',
},
blueIdeaIcon: {
  position: 'absolute',
  top: 24,
  left: 20,
  zIndex: 10,
}

});

export default Profilo;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableOpacity } from 'react-native';
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

type Annuncio = {
  nome: string;
  descrizione: string;
  punti: number;
  disponibilita: string;
};

const Profilo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAnnuncio, setSelectedAnnuncio] = useState<Annuncio | null>(null);

  return (
    <View style={styles.wrapper}>
      <BlueIdea width={60} height={90} style={styles.blueIdeaIcon} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.centered}>
          <Image source={require('./images/elio.jpg')} style={styles.avatar} />
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
          <View style={styles.annunciRow}>
            <TouchableOpacity
              onPress={() => {
                setSelectedAnnuncio({
                  nome: 'Ripetizioni di italiano',
                  descrizione: 'Lezioni di italiano per tutti i livelli. Online o in presenza.',
                  punti: 50,
                  disponibilita: 'Lunedì - Venerdì dalle 15:00 alle 18:00'
                });
                setModalVisible(true);
              }}
            >
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
            </TouchableOpacity>
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
                <Text style={styles.reviewStars}>{'⭐️'.repeat(review.stars)}</Text>
                <Text style={styles.reviewAnnuncio}>{review.annuncio}</Text>
                <Text style={styles.reviewDescription}>{review.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal per dettagli annuncio */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseIcon}>
              <Text style={styles.modalCloseIconText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>{selectedAnnuncio?.nome}</Text>
            <Text style={styles.modalLabel}>Descrizione</Text>
            <Text style={styles.modalText}>{selectedAnnuncio?.descrizione}</Text>
            <Text style={styles.modalLabel}>Punti necessari</Text>
            <Text style={styles.modalText}>{selectedAnnuncio?.punti} pt</Text>
            <Text style={styles.modalLabel}>Disponibilità</Text>
            <Text style={styles.modalText}>{selectedAnnuncio?.disponibilita}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  blueIdeaIcon: {
    position: 'absolute',
    top: 24,
    left: 20,
    zIndex: 10,
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
    justifyContent: 'flex-start',
    marginTop: 12,
  },
  annuncioCard: {
    width: 120,
    height: 120,
    borderRadius: 11,
    overflow: 'hidden',
    backgroundColor: '#D8D1FF',
    marginRight: 12,
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
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B31BA',
    marginBottom: 12,
  },
  modalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  modalText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#2B31BA',
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalCloseText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalCloseIcon: {
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: '#2B31BA',
  borderRadius: 20,
  width: 30,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
},
modalCloseIconText: {
  color: '#FFF',
  fontSize: 18,
  fontWeight: 'bold',
},
});

export default Profilo;//

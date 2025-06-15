import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import BlueIdea from './icons/blueIdea.svg';
import { useAnnunci } from './AnnunciContext'; // Assumo ci sia questo hook

type Annuncio = {
  titolo: string;
  descrizione: string;
  categoria: string;
  puntiAnnuncio: number;
  disponibilita?: string;
};

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
  const { annunci } = useAnnunci(); // Prendo gli annunci dal contesto
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
          <ScrollView horizontal style={styles.annunciRow} showsHorizontalScrollIndicator={false}>
            {annunci.length === 0 && (
              <Text style={{ color: '#999' }}>Nessun annuncio disponibile</Text>
            )}
            {annunci.map((annuncio, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedAnnuncio(annuncio);
                  setModalVisible(true);
                }}
              >
                <View style={styles.annuncioCard}>
                  {/* Qui puoi mettere un'icona o immagine generica */}
                  <View style={styles.annuncioCardPlaceholder}>
                    <Text style={styles.annuncioCardText}>{annuncio.titolo}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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

      {/* Modal dettagli annuncio */}
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

            <Text style={styles.modalTitle}>{selectedAnnuncio?.titolo}</Text>
            <Text style={styles.modalLabel}>Descrizione</Text>
            <Text style={styles.modalText}>{selectedAnnuncio?.descrizione}</Text>
            <Text style={styles.modalLabel}>Categoria</Text>
            <Text style={styles.modalText}>{selectedAnnuncio?.categoria}</Text>
            <Text style={styles.modalLabel}>Punti necessari</Text>
            <Text style={styles.modalText}>{selectedAnnuncio?.puntiAnnuncio} pt</Text>
            {selectedAnnuncio?.disponibilita && (
              <>
                <Text style={styles.modalLabel}>Disponibilità</Text>
                <Text style={styles.modalText}>{selectedAnnuncio.disponibilita}</Text>
              </>
            )}
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
    marginTop: 12,
  },
  annuncioCard: {
    width: 140,
    height: 140,
    borderRadius: 11,
    backgroundColor: '#D8D1FF',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  annuncioCardPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  annuncioCardText: {
    color: '#2B31BA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratingAverage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2B31BA',
  },
  reviewCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#F0F0F0',
    padding: 12,
    borderRadius: 8,
  },
  reviewImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  reviewName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2B31BA',
  },
  reviewStars: {
    color: '#FFD700',
  },
  reviewAnnuncio: {
    fontStyle: 'italic',
    color: '#555',
  },
  reviewDescription: {
   
color: '#333',
},
modalOverlay: {
flex: 1,
backgroundColor: '#000000AA',
justifyContent: 'center',
padding: 20,
},
modalContent: {
backgroundColor: '#FFF',
padding: 24,
borderRadius: 16,
},
modalCloseIcon: {
position: 'absolute',
right: 12,
top: 12,
},
modalCloseIconText: {
fontSize: 20,
color: '#2B31BA',
},
modalTitle: {
fontSize: 20,
fontWeight: 'bold',
color: '#2B31BA',
marginBottom: 12,
},
modalLabel: {
fontWeight: '600',
marginTop: 8,
color: '#555',
},
modalText: {
fontSize: 14,
color: '#333',
},
});

export default Profilo;
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import BlueIdea from './icons/blueIdea.svg';
import { useAnnunci } from './AnnunciContext';
import { usePunti } from './PuntiContext';
import { styles } from './Profilo.styles';

type Annuncio = {
  titolo: string;
  descrizione: string;
  categoria: string;
  puntiAnnuncio: number;
  disponibilita?: string;
  isNew?: boolean;
  immagine?: any;
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
    description: "Elio ha una grande passione per l'insegnamento, lo consiglio vivamente!",
  },
];

const averageRating = (
  reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length
).toFixed(1);

const Profilo: React.FC = () => {
  const { annunci, rimuoviAnnuncio } = useAnnunci();
  const { punti, aggiungiPunti, togliPunti } = usePunti();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAnnuncio, setSelectedAnnuncio] = useState<Annuncio | null>(null);

  const annunciNuovi = annunci.filter(a => a.isNew);

  const handleRemoveAnnuncio = () => {
    if (selectedAnnuncio) {
      rimuoviAnnuncio(selectedAnnuncio.titolo);  // Passa la chiave o id giusto (qui titolo)
      setModalVisible(false);
      setSelectedAnnuncio(null);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <BlueIdea width={60} height={90} style={styles.blueIdeaIcon} />

        <View style={styles.centered}>
          <Image source={require('./images/elio.jpg')} style={styles.avatar} />
          <Text style={styles.nome}>Elio</Text>
          <View style={styles.pointsBox}>
            <Text style={styles.pointsText}>{punti} punti</Text>
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
          <ScrollView
            horizontal
            style={styles.annunciRow}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 2 }}
          >
            {annunciNuovi.length === 0 && (
              <Text style={{ color: '#999' }}>Nessun annuncio nuovo</Text>
            )}
            {annunciNuovi.map((annuncio, index) => (
              <TouchableOpacity
                key={index.toString()}
                onPress={() => {
                  setSelectedAnnuncio(annuncio);
                  setModalVisible(true);
                }}
                style={{ paddingVertical: 4 }}
              >
                <View style={styles.annuncioCard}>
                  <Image
                    source={annuncio.immagine ?? require('./images/barattalo.jpeg')}
                    style={styles.annuncioImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.annuncioCardText}>{annuncio.titolo}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Recensioni</Text>
          <Text style={styles.ratingAverage}>⭐️ {averageRating} / 5</Text>
          {reviews.map((review, index) => (
            <View key={index.toString()} style={styles.reviewCard}>
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

            {selectedAnnuncio?.isNew && (
              <TouchableOpacity
                onPress={handleRemoveAnnuncio}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Rimuovi annuncio</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profilo;

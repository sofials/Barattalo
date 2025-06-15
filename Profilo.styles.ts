import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    height: 180, // aumenta l'altezza per far spazio al testo
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    marginRight: 12,
    justifyContent: 'flex-start', // testo sotto immagine
    alignItems: 'center',
    padding: 10,
  },
  annuncioImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 6,
    resizeMode: 'cover',
  },
  annuncioCardText: {
    color: '#2B31BA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  annuncioCardPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

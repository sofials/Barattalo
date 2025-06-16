import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },
  closeButton: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  closeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  categoriesContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  pillNonSelected: {
    backgroundColor: '#d8d1ff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 14,
    alignSelf: 'flex-start',
  },
  pillNonSelectedText: {
    color: '#2B31BA',
    fontWeight: '600',
    fontSize: 16,
  },

  pillSelected: {
    backgroundColor: '#2B31BA',  // viola scuro come bottone Applica
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 14,
    alignSelf: 'flex-start',
  },
  pillSelectedText: {
    color: '#fff',               // testo bianco
    fontWeight: '600',
    fontSize: 16,
  },

  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  distanceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  resetIcon: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  resetAllButton: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },
  resetAllText: {
    color: '#444',
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: '#d8d1ff',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 15,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#2B31BA',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;

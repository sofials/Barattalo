import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerFixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 20,
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  titoloWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  titoloTesto: {
    fontWeight: 'bold',
    color: '#6B53FF',
    fontSize: 26,
    marginLeft: 12,
    lineHeight: 32,
    marginTop: 20,
  },

  searchWrapper: {
    alignItems: 'center',
  },

  searchBox: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#d8d1ff',
    borderRadius: 12,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: '#a99be6',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
    color: '#000',
    backgroundColor: '#fff',
    fontWeight: 'normal',
  },

  filterButton: {
    backgroundColor: '#d8d1ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  filterButtonText: {
    color: '#2B31BA',
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  categoria: {
    marginBottom: 24,
  },

  categoriaTitolo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2B31BA',
    marginBottom: 12,
  },

  cardList: {
    paddingLeft: 4,
    alignItems: 'center', // centrare verticalmente le card nello ScrollView orizzontale
  },

  card: {
    width: 140,
    height: 160,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },

  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },

  cardImageDefault: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },

  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
  },

  puntiBox: {
    position: 'absolute',
    top: 32,
    right: 24,
    zIndex: 20,
  },

  puntiRiquadro: {
    backgroundColor: '#EBDBCD',
    borderRadius: 11,
    paddingHorizontal: 10, // più stretto
    paddingVertical: 4,    // più basso
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  puntiText: {
    fontSize: 18,          // più piccolo
    fontWeight: 'bold',
    color: '#6B53FF',
  },
});

export default styles;

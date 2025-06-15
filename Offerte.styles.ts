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
  // Ho ridotto dimensioni da 80x80 a 24x24 per coerenza con JSX
  titoloIcona: {
    marginRight: 8,
    width: 24,
    height: 24,
  },
  titoloTesto: {
    fontWeight: 'bold',
    color: '#6B53FF',
    fontSize: 26,
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
    fontWeight: 'bold',
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
    color: '#4A4A4A',
    marginBottom: 12,
  },

  cardList: {
    paddingLeft: 4,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: 140,
  },

  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  cardImageDefault: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },

  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;

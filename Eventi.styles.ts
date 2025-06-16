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
    color: '#3B82F6', // un bel blu per differenziare dagli annunci
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
    backgroundColor: '#e0ecff',
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
    borderColor: '#90b4f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
    color: '#000',
    backgroundColor: '#fff',
    fontWeight: 'normal',
  },

  filterButton: {
    backgroundColor: '#e0ecff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  filterButtonText: {
    color: '#1D4ED8',
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
    color: '#1D4ED8',
    marginBottom: 12,
  },

  cardList: {
    paddingLeft: 4,
    alignItems: 'center',
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
});

export default styles;

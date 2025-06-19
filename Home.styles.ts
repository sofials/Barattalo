import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#6B53FF',
  },
  h2: {
    fontSize: 20,
    color: '#555',
    marginBottom: 24,
  },
  doodle: {
    marginTop: 0,
    marginBottom: -40,
  },

  // --- BARRA RICERCA DA OFFERTA ---

  searchWrapper: {
    alignItems: 'center',
    width: '100%',
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
});

export default styles;

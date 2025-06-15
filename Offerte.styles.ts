import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // 🔍 Barra di ricerca (sticky)
  searchWrapper: {
    position: 'absolute',
    top: 50, // spazio più sicuro per status bar
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchBox: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#d8d1ff', // sfondo lilla chiaro
    borderRadius: 12,
    padding: 10,
    elevation: 4, // ombra su Android
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
    borderColor: '#a99be6', // bordo in tinta
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
    color: '#000', // testo digitato nero
    backgroundColor: '#fff', // sfondo interno input
    fontWeight: 'bold',
  },

  // 🟣 Pulsante filtri
  filterButton: {
    backgroundColor: '#d8d1ff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  filterButtonText: {
    color: '#2B31BA',
    fontWeight: 'bold',
  },

  // 📜 Contenuto scrollabile
  container: {
    flex: 1,
    paddingTop: 120, // spazio aumentato per non coprire nulla
    paddingHorizontal: 16,
  },

  // 🏷️ Sezioni per categoria
  categoria: {
    marginBottom: 24,
  },
  categoriaTitolo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  // 🃏 Card orizzontali
  cardList: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  card: {
    width: 140,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#d8d1ff',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  cardImageDefault: {
  width: '100%',
  height: 100,
  backgroundColor: '#fff', // sfondo grigio per default
  borderRadius: 8,
},

});

export default styles;

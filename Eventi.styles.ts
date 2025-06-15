import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  eventiContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  booksIcon: {
    position: 'absolute',
    marginTop: 20,
    top: 60,
    left: 16,
    zIndex: 10,
  },
  eventoSezione: {
    marginTop: 20,
    marginBottom: 40,
  },
  h2: {
    fontSize: 26,
    marginBottom: 0,
    marginTop: 30,
    color: '#6B53FF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF4F4',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  eventoImg: {
    width: 60,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  eventoContent: {
    flex: 1,
    overflow: 'hidden',
  },
  eventoTesto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B31BA',
    marginBottom: 4,
  },
  eventoDescrizione: {
    fontSize: 14,
    color: '#666',
  },
  girlIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 80,
    height: 80,
    zIndex: 10,
  },
  searchBar: {
    backgroundColor: '#D8D1FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#eee',
    color: '#333',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 56,
    paddingLeft: 16,
    marginBottom: 10,
  },
  titolo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B53FF',
    marginLeft: 12,
    marginTop: 17,
  },
  sottotitolo: {
    fontSize: 20,
    color: '#6267CC',
    marginBottom: 18,
    marginTop: 0,
    textAlign: 'left',
    fontWeight: '600',
  },
});

export default styles;

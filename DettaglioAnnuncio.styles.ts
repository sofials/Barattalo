import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
    paddingTop: 20,
  },
  backButtonText: {
    fontSize: 26,
    color: '#6B53FF',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#6B53FF',
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    color: '#808080',
  },
  richiediButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    width: 150,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#d8d1ff',
    borderRadius: 30,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateX: -75 }],
  },
  richiediButtonText: {
    color: '#2B31BA',
    fontWeight: 'bold',
    fontSize: 18,
  },
  richiediButtonPoints: {
    color: '#2B31BA',
    fontSize: 14,
    marginTop: 4,
  },

  // Nuovi stili per punti in alto a destra
  puntiBox: {
    position: 'absolute',
    top: 32,
    right: 24,
    zIndex: 20,
  },

  puntiRiquadro: {
    backgroundColor: '#EBDBCD',
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  puntiText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B53FF',
  },
});

export default styles;

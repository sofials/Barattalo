import { StyleSheet } from 'react-native';

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
  searchInput: {
  width: '90%',
  height: 44,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#ccc',
  paddingHorizontal: 16,
  fontSize: 16,
  marginBottom: 24,
  backgroundColor: '#fff',
  marginTop: 40,
},
});

export default styles;
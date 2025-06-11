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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  h2: {
    fontSize: 20,
    color: '#555',
    marginBottom: 24,
  },
  doodle: {
    marginTop: 16,
    marginBottom: 16,
  },
  navbar: {
    width: '100%',
  },
  detailSection: {
    marginBottom: 16,
  },
  detailCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  detailDate: {
    color: '#888',
    fontSize: 12,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 12,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#fff',
  },
});

export default styles;
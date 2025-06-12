import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
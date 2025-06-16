import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  backButton: {
    paddingVertical: 14,
  },

  backButtonText: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: '500',
  },

  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 6,
  },

  category: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 20,
  },

  titleDescription: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginTop: 12,
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },

  richiediButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#dce9ff',
    paddingVertical: 16,
    paddingHorizontal: 24,

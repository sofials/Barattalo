import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6B53FF',
    lineHeight: 28,
      marginTop: 21,
    // Rimosso marginBottom e alignSelf per evitare disallineamenti nella riga
  },

  formWrapper: {
    backgroundColor: '#e4dbff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  labelRow: {
    width: 100,
    paddingTop: 12,
  },

  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2B31BA',
    flexWrap: 'nowrap',
  },

  inputRow: {
    flex: 1,
  },

  input: {
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  pickerWrapper: {
    borderColor: '#6B53FF',
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

picker: {
  minHeight: 50,      // altezza minima
  width: '100%',
},

  button: {
    backgroundColor: '#e4dbff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#2B31BA',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

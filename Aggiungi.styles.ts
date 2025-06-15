import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B31BA',
    marginBottom: 24,
    alignSelf: 'center',
  },

  formWrapper: {
    backgroundColor: '#d8d1ff',
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
    width: 100, // larghezza fissa per evitare il capo
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },

  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  picker: {
    height: 50,
    width: '100%',
  },

  button: {
    backgroundColor: '#d8d1ff',
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

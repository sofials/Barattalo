import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAnnunci, categories } from './AnnunciContext';
import styles from './Aggiungi.styles';

const Aggiungi: React.FC = () => {
  const { aggiungiAnnuncio } = useAnnunci();

  const [titolo, setTitolo] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [categoria, setCategoria] = useState(categories[0] || '');
  const [puntiAnnuncio, setPuntiAnnuncio] = useState<number>(30); // default coerente

  const handleSubmit = () => {
    if (!titolo.trim()) {
      Alert.alert('Errore', 'Inserisci il titolo');
      return;
    }

    if (!descrizione.trim()) {
      Alert.alert('Errore', 'Inserisci la descrizione');
      return;
    }

    if (!categories.includes(categoria)) {
      Alert.alert('Errore', 'Seleziona una categoria valida');
      return;
    }

    if (puntiAnnuncio < 1 || puntiAnnuncio > 100) {
      Alert.alert('Errore', 'I punti devono essere compresi tra 1 e 100');
      return;
    }

    aggiungiAnnuncio({
      titolo,
      descrizione,
      categoria,
      puntiAnnuncio,
      isNew: true,
    });

    setTitolo('');
    setDescrizione('');
    setCategoria(categories[0] || '');
    setPuntiAnnuncio(30);
  };

  const handlePuntiChange = (text: string) => {
    const num = parseInt(text, 10);
    if (!isNaN(num) && num >= 1 && num <= 100) {
      setPuntiAnnuncio(num);
    } else if (text === '') {
      setPuntiAnnuncio(0);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={[styles.container, { paddingTop: 40, flexGrow: 1 }]}>
        <Text style={styles.header}>Inserisci annuncio</Text>

        <View style={styles.formWrapper}>
          {/* Titolo */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Titolo:</Text>
            </View>
            <View style={styles.inputRow}>
              <TextInput
                value={titolo}
                onChangeText={setTitolo}
                placeholder="Scrivi il titolo"
                style={styles.input}
              />
            </View>
          </View>

          {/* Descrizione */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Descrizione:</Text>
            </View>
            <View style={styles.inputRow}>
              <TextInput
                value={descrizione}
                onChangeText={setDescrizione}
                placeholder="Scrivi la descrizione"
                multiline
                style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
              />
            </View>
          </View>

          {/* Categoria */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Categoria:</Text>
            </View>
            <View style={styles.inputRow}>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={categoria}
                  onValueChange={(itemValue) => setCategoria(itemValue)}
                  style={styles.picker}
                >
                  {categories.map((cat) => (
                    <Picker.Item key={cat} label={cat} value={cat} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          {/* Punti */}
          <View style={styles.row}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Punti:</Text>
            </View>
            <View style={styles.inputRow}>
              <TextInput
                value={puntiAnnuncio ? puntiAnnuncio.toString() : ''}
                onChangeText={handlePuntiChange}
                keyboardType="numeric"
                style={styles.input}
                maxLength={3}
              />
            </View>
          </View>
        </View>

        {/* Bottone */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Aggiungi annuncio</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Aggiungi;

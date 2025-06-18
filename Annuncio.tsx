import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Richiesta from './Richiesta';
import Prenotazione from './Prenotazione'
import { usePunti } from './PuntiContext';

const Annuncio: React.FC<any> = ({ route }) => {
  const { annuncio } = route.params;
  const navigation = useNavigation<any>();
  const { punti } = usePunti();

  // Stato per il popup
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [message, setMessage] = useState('');

  // Funzione per mostrare le stelle
  const renderStars = (stelle: number) => (
    <View style={{ flexDirection: 'row', marginVertical: 4 }}>
      {[...Array(5)].map((_, i) => (
        <Text key={i} style={{ color: i < stelle ? '#FFB300' : '#D8D1FF', fontSize: 20 }}>★</Text>
      ))}
    </View>
  );

  // Gestione selezione data/ora
  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };
  const onChangeTime = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      // Mantieni la data, cambia solo ora/minuti
      const newDate = new Date(date);
      newDate.setHours(selectedTime.getHours());
      newDate.setMinutes(selectedTime.getMinutes());
      setDate(newDate);
    }
  };

  // Formatta data e ora
  const formatDate = (d: Date) =>
    `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${d.getFullYear()}`;
  const formatTime = (d: Date) =>
    `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      {/* Punti in alto a destra */}
      <View style={styles.puntiBox}>
        <View style={styles.puntiRiquadro}>
          <Text style={styles.puntiText}>{punti} punti</Text>
        </View>
      </View>
      <Image source={annuncio.immagine} style={styles.img} />
      <Text style={styles.titolo}>{annuncio.titolo}</Text>
      <Text style={styles.utente}>
        Offerto da: <Text style={{ color: '#2B31BA', fontWeight: 'bold' }}>{annuncio.utente}</Text>
      </Text>
      {renderStars(annuncio.stelle ?? 0)}
      <Text style={styles.descrizione}>{annuncio.descrizione}</Text>
      <TouchableOpacity
        style={styles.richiediBtn}
        onPress={() => navigation.navigate('Prenotazione', { annuncio })}
      >
        <Text style={styles.richiediBtnText}>Richiedi {annuncio.puntiAnnuncio} punti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  puntiBox: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 10,
  },
  puntiRiquadro: {
    backgroundColor: '#EBDBCD',
    borderRadius: 11,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  puntiText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B53FF',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  titolo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  utente: {
    fontSize: 16,
    marginBottom: 4,
    color: '#444',
  },
  descrizione: {
    fontSize: 16,
    color: '#444',
    marginBottom: 24,
  },
  richiediBtn: {
    backgroundColor: '#2B31BA',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  richiediBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'stretch',
    elevation: 6,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B31BA',
    marginBottom: 18,
    textAlign: 'center',
  },
  inputBtn: {
    backgroundColor: '#EBDBCD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  inputBtnText: {
    color: '#2B31BA',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8D1FF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 60,
    marginBottom: 16,
    color: '#222',
    backgroundColor: '#F9F9F9',
  },
  inviaBtn: {
    backgroundColor: '#6B53FF',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  inviaBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Annuncio;
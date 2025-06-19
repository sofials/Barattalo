import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';

const Prenotazione: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { annuncio } = route.params as any;

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [message, setMessage] = useState('');

  const formatDate = (d: Date) =>
    `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  const formatTime = (d: Date) =>
    `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Prenota una lezione</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ marginBottom: 12 }}>
        <Text>Data: {formatDate(date)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={{ marginBottom: 12 }}>
        <Text>Orario: {formatTime(date)}</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Scrivi un messaggio..."
        value={message}
        onChangeText={setMessage}
        style={{
          borderWidth: 1,
          borderColor: '#D8D1FF',
          borderRadius: 8,
          padding: 12,
          fontSize: 16,
          minHeight: 60,
          marginBottom: 16,
        }}
        multiline
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#6B53FF',
          borderRadius: 10,
          paddingVertical: 14,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Richiesta', {
            annuncio,
            data: date,
            messaggio: message,
          });
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Invia</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(_, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(_, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) {
              const newDate = new Date(date);
              newDate.setHours(selectedTime.getHours());
              newDate.setMinutes(selectedTime.getMinutes());
              setDate(newDate);
            }
          }}
        />
      )}
    </View>
  );
};

export default Prenotazione;
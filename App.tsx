import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App: React.FC = () => {
  const handlePress = () => {
    Alert.alert('Hai premuto il pulsante!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ciao UXD App con TypeScript! 👋</Text>
      <Button title="Premi qui!" onPress={handlePress} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

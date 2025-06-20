import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IdeaDoodle from './icons/ideaDoodle.svg';
import NotificationsIcon from './icons/notifications.svg';
import HomeDoodles from './icons/homeDoodles.svg';
import New from './icons/new.svg';
import styles from './Home.styles';

const { width } = Dimensions.get('window');

export default function Home() {
  const [search, setSearch] = useState('');
  const [hasNew, setHasNew] = useState(true);
  const navigation = useNavigation<any>();

  const onSearchSubmit = () => {
    if (search.trim() === '') return; // evita ricerca vuota
    navigation.navigate('Annunci', { search });
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <IdeaDoodle width={90} height={90} style={{ marginLeft: -20 }} />
        <View style={{ position: 'relative' }}>
          <TouchableOpacity
            onPress={() => {
              setHasNew(false);
              navigation.navigate('Inbox');
            }}
          >
            <NotificationsIcon width={32} height={32} />
            {hasNew && (
              <View style={{ position: 'absolute', top: -6, right: -6, opacity: 0.7 }}>
                <New width={18} height={18} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.h1}>Ciao, Elio!</Text>
        <View style={styles.searchWrapper}>
          <View style={styles.searchBox}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Cosa ti serve oggi?"
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={onSearchSubmit}
                returnKeyType="search"
              />
              <TouchableOpacity onPress={onSearchSubmit} style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Cerca</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Qui la modifica */}
        <HomeDoodles width={width} height={undefined} style={styles.doodle} />
      </View>
    </View>
  );
}

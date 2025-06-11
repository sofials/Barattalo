import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import IdeaDoodle from './icons/ideaDoodle.svg';
import NotificationsIcon from './icons/notifications.svg';
import HomeDoodles from './icons/homeDoodles.svg';
import MainTabs from './MainTabs';
import styles from './Home.styles';

const { width } = Dimensions.get('window');

export default function Home() {
  const [messaggio, setMessaggio] = useState('');

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <IdeaDoodle width={36} height={36} />
        <NotificationsIcon width={32} height={32} />
      </View>

      {/* Header centrale */}
      <View style={styles.centerContent}>
        <Text style={styles.h1}>Ciao Dario</Text>
        <Text style={styles.h2}>Cosa ti serve oggi?</Text>
        <HomeDoodles width={width * 0.7} height={width * 0.7} style={styles.doodle} />
      </View>

    </View>
  );
}

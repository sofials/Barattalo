import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

import MainTabs from './MainTabs';
import InboxStack from './InboxStack';

import { AnnuncioProvider } from './AnnunciContext';
import { EventoProvider } from './EventiContext';
import { PuntiProvider } from './PuntiContext';
import { MessagesProvider } from './MessagesContext';
import { NotificationsProvider } from './NotificationsContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      // Font richiesto da react-native-paper
      'MaterialCommunityIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) return null;

  return (
      <MessagesProvider>
        <AnnuncioProvider>
          <EventoProvider>
            <PuntiProvider>
              <NotificationsProvider>
                <NavigationContainer>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MainTabs" component={MainTabs} />
                    <Stack.Screen name="Inbox" component={InboxStack} />
                  </Stack.Navigator>
                </NavigationContainer>
              </NotificationsProvider>
            </PuntiProvider>
          </EventoProvider>
        </AnnuncioProvider>
      </MessagesProvider>
  );
}

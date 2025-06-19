import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabs from './MainTabs';

import { AnnuncioProvider } from './AnnunciContext'; 
import { EventoProvider } from './EventiContext';
import { PuntiProvider } from './PuntiContext';
import { Provider as PaperProvider } from 'react-native-paper';
import { MessagesProvider } from './MessagesContext';
import { NotificationsProvider } from './NotificationsContext';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
       <MessagesProvider>
      <AnnuncioProvider>
        <EventoProvider>
          <PuntiProvider>
              <NotificationsProvider>
                <NavigationContainer>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="MainTabs" component={MainTabs} />
                    {/* Rimuovi altri screen come Inbox, Chat, Rating, Portici */}
                  </Stack.Navigator>
                </NavigationContainer>
              </NotificationsProvider>
          </PuntiProvider>
        </EventoProvider>
      </AnnuncioProvider>
        </MessagesProvider>
    </PaperProvider>
  );
};

export default App;

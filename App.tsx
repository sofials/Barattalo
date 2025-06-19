import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';
import InboxStack from './InboxStack';

import { AnnuncioProvider } from './AnnunciContext'; 
import { EventoProvider } from './EventiContext';
import { PuntiProvider } from './PuntiContext';
import { Provider as PaperProvider } from 'react-native-paper';
import { MessagesProvider } from './MessagesContext';
import { NotificationsProvider } from './NotificationsContext';

const Stack = createNativeStackNavigator();

const App: React.FC = () => (
  <PaperProvider>
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
  </PaperProvider>
);

export default App;

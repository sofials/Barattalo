import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import Inbox from './Inbox';
import Chat from './Chat';
import Rating from './Rating'
import Portici from './Portici';
import Richiesta from './Richiesta';
import Prenotazione from './Prenotazione';
import { AnnuncioProvider } from './AnnunciContext'; 
import { EventoProvider } from './EventiContext';
import { PuntiProvider } from './PuntiContext';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
     <PaperProvider>
  <AnnuncioProvider>
    <EventoProvider>
    <PuntiProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="Portici" component={Portici}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PuntiProvider>
    </EventoProvider>
    </AnnuncioProvider>
    </PaperProvider>
  );
};



export default App;

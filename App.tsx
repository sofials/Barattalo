import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import Inbox from './Inbox';
import Chat from './Chat';
import Rating from './Rating'
import { AnnuncioProvider } from './AnnunciContext'; 

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
  <AnnuncioProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Rating" component={Rating} />
      </Stack.Navigator>
    </NavigationContainer>
    </AnnuncioProvider>
  );
};



export default App;

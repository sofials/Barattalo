import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inbox from './Inbox';
import ChatGianni from './Chat';      // chat specifica Gianni
import Rating from './Rating';
import ChatPortici from './Portici';  // chat specifica Portici
import DettaglioChat from './DettaglioChat'; // chat generica

export type RootStackParamList = {
  Inbox: undefined;
  ChatGianni: undefined;
  Rating: undefined;
  Portici: undefined;
  DettaglioChat: { senderName: string; initialPreview?:string; id:number;};
};

const Stack = createStackNavigator<RootStackParamList>();

const InboxStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Inbox" component={Inbox} />
    <Stack.Screen name="ChatGianni" component={ChatGianni} />
    <Stack.Screen name="Rating" component={Rating} />
    <Stack.Screen name="Portici" component={ChatPortici} />
    <Stack.Screen name="DettaglioChat" component={DettaglioChat} />
  </Stack.Navigator>
);

export default InboxStack;

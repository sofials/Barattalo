import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InboxMain from './Inbox';
import Chat from './Chat';
import Rating from './Rating';
import Portici from './Portici';
import DettaglioChat from './DettaglioChat';

export type RootStackParamList = {
  InboxMain: undefined;
  Chat: undefined;
  Rating: undefined;
  Portici: undefined;
  DettaglioChat: { senderName: string; initialPreview?: string; id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const InboxStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="InboxMain" component={InboxMain} />
    <Stack.Screen name="Chat" component={Chat} />
    <Stack.Screen name="Rating" component={Rating} />
    <Stack.Screen name="Portici" component={Portici} />
    <Stack.Screen name="DettaglioChat" component={DettaglioChat} />
  </Stack.Navigator>
);

export default InboxStack;

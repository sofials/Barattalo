import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Offerte from './Offerte';
import Aggiungi from './Aggiungi';
import Eventi from './Eventi';
import Profilo from './Profilo';

import InboxStack from './InboxStack';

import HomeIcon from './icons/homeIcon.svg';
import OffersIcon from './icons/offersIcon.svg';
import AddIcon from './icons/addIcon.svg';
import EventsIcon from './icons/eventsIcon.svg';
import ProfileIcon from './icons/profileIcon.svg';
import CurrentPage from './icons/currentPage.svg';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerBackVisible: false,
      tabBarIcon: ({ color, size, focused }) => {
        if (route.name === 'Inbox') {
          // Nessuna icona per la tab Inbox (vuota)
          return null;
        }

        let IconComponent;
        if (route.name === 'Home') IconComponent = HomeIcon;
        else if (route.name === 'Annunci') IconComponent = OffersIcon;
        else if (route.name === 'Aggiungi') IconComponent = AddIcon;
        else if (route.name === 'Eventi') IconComponent = EventsIcon;
        else if (route.name === 'Profilo') IconComponent = ProfileIcon;
        else return null;

        return (
          <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            <IconComponent width={size} height={size} fill={color} />
            {focused && (
              <CurrentPage
                width={size}
                height={size}
                style={StyleSheet.absoluteFill}
              />
            )}
          </View>
        );
      },
      tabBarActiveTintColor: '#6B53FF',
      tabBarInactiveTintColor: 'black',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Annunci" component={Offerte} />
    <Tab.Screen name="Aggiungi" component={Aggiungi} />
    <Tab.Screen name="Eventi" component={Eventi} />
    <Tab.Screen name="Profilo" component={Profilo} />
    <Tab.Screen
      name="Inbox"
      component={InboxStack}
      options={{ tabBarLabel: 'Inbox' }}
    />
  </Tab.Navigator>
);

export default MainTabs;

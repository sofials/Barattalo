import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Offerte from './Offerte';
import Aggiungi from './Aggiungi';
import Eventi from './Eventi';
import Profilo from './Profilo';
import HomeIcon from './icons/homeIcon.svg';
import OffersIcon from './icons/offersIcon.svg';
import AddIcon from './icons/addIcon.svg';
import EventsIcon from './icons/eventsIcon.svg';
import ProfileIcon from './icons/profileIcon.svg';
// ^._.^ 
const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Home') return <HomeIcon width={size} height={size} fill={color} />;
        if (route.name === 'Offerte') return <OffersIcon width={size} height={size} fill={color} />;
        if (route.name === 'Aggiungi') return <AddIcon width={size} height={size} fill={color} />;
        if (route.name === 'Eventi') return <EventsIcon width={size} height={size} fill={color} />;
        if (route.name === 'Profilo') return <ProfileIcon width={size} height={size} fill={color} />;
        return null;
      },
      tabBarActiveTintColor: '#3cb371',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Offerte" component={Offerte} />
    <Tab.Screen name="Aggiungi" component={Aggiungi} />
    <Tab.Screen name="Eventi" component={Eventi} />
    <Tab.Screen name="Profilo" component={Profilo} />
  </Tab.Navigator>
);

export default MainTabs;
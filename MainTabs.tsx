import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

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
import CurrentPage from './icons/currentPage.svg';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerBackVisible: false,
      tabBarStyle: { height: 60 },
      tabBarItemStyle: { flex: 1 },
      tabBarIcon: ({ color, size, focused }) => {
        let IconComponent;
        switch (route.name) {
          case 'Home': IconComponent = HomeIcon; break;
          case 'Annunci': IconComponent = OffersIcon; break;
          case 'Aggiungi': IconComponent = AddIcon; break;
          case 'Eventi': IconComponent = EventsIcon; break;
          case 'Profilo': IconComponent = ProfileIcon; break;
          default: return null;
        }

        return (
          <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            <IconComponent fill={color} style={{ flex: 1, width: undefined, height: undefined }} />
            {focused && (
              <CurrentPage
                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                width={size}
                height={size}
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
    <Tab.Screen
      name="Home"
      component={Home}
      listeners={({ navigation, route }) => ({
        tabPress: e => {
          navigation.navigate('Home');
        },
      })}
    />
    <Tab.Screen
      name="Annunci"
      component={Offerte}
      listeners={({ navigation, route }) => ({
        tabPress: e => {
          navigation.navigate('Annunci');
        },
      })}
    />
    <Tab.Screen
      name="Aggiungi"
      component={Aggiungi}
      listeners={({ navigation, route }) => ({
        tabPress: e => {
          navigation.navigate('Aggiungi');
        },
      })}
    />
    <Tab.Screen
      name="Eventi"
      component={Eventi}
      listeners={({ navigation, route }) => ({
        tabPress: e => {
          navigation.navigate('Eventi');
        },
      })}
    />
    <Tab.Screen
      name="Profilo"
      component={Profilo}
      listeners={({ navigation, route }) => ({
        tabPress: e => {
          navigation.navigate('Profilo');
        },
      })}
    />
  </Tab.Navigator>
);

export default MainTabs;

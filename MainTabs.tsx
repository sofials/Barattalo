import React from 'react';
import { View, StyleSheet } from 'react-native';
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
import CurrentPage from './icons/currentPage.svg';
import styles from './Navbar.styles';

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerBackVisible: false,
      tabBarIcon: ({ color, size, focused }) => {
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
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

const MainTabs: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerBackVisible: false,
        tabBarStyle: {
          height: 60 + insets.bottom, // altezza + area sicura in basso
          paddingBottom: 5 + insets.bottom, // spazio in basso + safe area
        },
        tabBarItemStyle: {
          width: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon: ({ color, size, focused }) => {
          let IconComponent;
          switch (route.name) {
            case 'Home':
              IconComponent = HomeIcon;
              break;
            case 'Annunci':
              IconComponent = OffersIcon;
              break;
            case 'Aggiungi':
              IconComponent = AddIcon;
              break;
            case 'Eventi':
              IconComponent = EventsIcon;
              break;
            case 'Profilo':
              IconComponent = ProfileIcon;
              break;
            default:
              return null;
          }

          const iconSize = Math.min(size, 30);

          return (
            <View
              style={{
                width: iconSize,
                height: iconSize,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconComponent width={iconSize} height={iconSize} fill={color} />
              {focused && (
                <CurrentPage
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  width={iconSize}
                  height={iconSize}
                />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#6B53FF',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Annunci" component={Offerte} />
      <Tab.Screen name="Aggiungi" component={Aggiungi} />
      <Tab.Screen name="Eventi" component={Eventi} />
      <Tab.Screen name="Profilo" component={Profilo} />
    </Tab.Navigator>
  );
};

export default MainTabs;

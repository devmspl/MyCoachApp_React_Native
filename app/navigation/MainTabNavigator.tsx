import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeStack from './HomeStack';
import {COLORS} from '../styles';
import {TabNavigatorParams} from './types';
import ContentStack from './ContentStack';
import CreateStack from './CreateStack';
import SavingStack from './SavingsStack';
import TransactionsStack from './TransactionsStack';

// ICONS




const Tab = createBottomTabNavigator<TabNavigatorParams>();
const MainTabNavigator = () => {``
  const [isActionVisible, setIsActionVisible] = React.useState(false);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: COLORS.white,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <Entypo
                  style={{marginTop: 10}}
                  color={focused ? COLORS.primary : 'gray'}
                  size={focused ? 25 : 24}
                  name="home"
                />
              );
            },
          }}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <AntDesign
                  style={{marginTop: 10}}
                  color={focused ? COLORS.primary : 'gray'}
                  size={focused ? 25 : 24}
                  name="search1"
                />
              );
            },
          }}
          name="Content"
          component={ContentStack}
        />
        <Tab.Screen
          // listeners={{
          //   tabPress: e => {
          //     e.preventDefault();
          //     setIsActionVisible(true);
          //   },
          // }}
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarIcon: ({focused}) => {
              return (
                <EvilIcons
                style={{marginTop: 10}}
                color={focused ? COLORS.primary : 'gray'}
                size={focused ? 35 : 34}
                name="play"
              />
              );
            },
          }}
          name="Create"
          component={CreateStack}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <EvilIcons
                  style={{marginTop: 10}}
                  color={focused ? COLORS.primary : 'gray'}
                  size={focused ? 35 : 34}
                  name="play"
                />
              );
            },
          }}
          name="Savings"
          component={SavingStack}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <AntDesign
                  style={{marginTop: 10}}
                  color={focused ? COLORS.primary : 'gray'}
                  size={focused ? 25 : 24}
                  name="user"
                />
              );
            },
          }}
          name="Transactions"
          component={TransactionsStack}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainTabNavigator;

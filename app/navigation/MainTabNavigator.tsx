import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {COLORS} from '../styles';
import {TabNavigatorParams} from './types';
import ContentStack from './ContentStack';
import CreateStack from './CreateStack';
import SavingStack from './SavingsStack';
import TransactionsStack from './TransactionsStack';

// ICONS
import Home from '../../assets/TabIcons/Home.svg';
import Content from '../../assets/TabIcons/Content.svg';
import Create from '../../assets/TabIcons/Create.svg';
import Insight from '../../assets/TabIcons/Insights.svg';
import Transaction from '../../assets/TabIcons/Transaction.svg';

import HomeOn from '../../assets/TabIcons/HomeOn.svg';
import ContentOn from '../../assets/TabIcons/ContentOn.svg';
import CreateOn from '../../assets/TabIcons/CreateOn.svg';
import InsightOn from '../../assets/TabIcons/InsightOn.svg';
import TransactionOn from '../../assets/TabIcons/TransactionOn.svg';
import {View} from 'react-native';

const Tab = createBottomTabNavigator<TabNavigatorParams>();
const MainTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home" 
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 90,
            backgroundColor: COLORS.white,
            paddingTop: 15,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return <View>{focused ? <HomeOn /> : <Home />}</View>;
            },
          }}
          name="Home"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return <View>{focused ? <ContentOn /> : <Content />}</View>;
            },
          }}
          name="Content"
          component={ContentStack}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarIcon: ({focused}) => {
              return <View>{focused ? <CreateOn /> : <Create />}</View>;
            },
          }}
          name="Create"
          component={CreateStack}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return <View>{focused ? <InsightOn /> : <Insight />}</View>;
            },
          }}
          name="Savings"
          component={SavingStack}
        />
        <Tab.Screen
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <View>{focused ? <TransactionOn /> : <Transaction />}</View>
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

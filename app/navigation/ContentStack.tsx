import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import ContentScreen from '../screens/ContentScreen';
import { ContentStackParams } from './types';

const Stack = createNativeStackNavigator<ContentStackParams>();
const ContentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Content" component={ContentScreen} />
    </Stack.Navigator>
  );
};

export default ContentStack;
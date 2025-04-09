import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {  SavingsStackParams } from './types';
import SavingsScreen from '../screens/SavingsScreen';

const Stack = createNativeStackNavigator<SavingsStackParams>();
const SavingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Savings" component={SavingsScreen} />
    </Stack.Navigator>
  );
};

export default SavingStack;
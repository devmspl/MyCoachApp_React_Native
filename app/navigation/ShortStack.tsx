import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ShortScreen from '../screens/ShortScreen';

const Stack = createNativeStackNavigator();
const ShortStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Short" component={ShortScreen} />
    </Stack.Navigator>
  );
};

export default ShortStack;

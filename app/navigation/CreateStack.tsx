import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CreateStackParams } from './types';
import CreateScreen from '../screens/CreateScreen';

const Stack = createNativeStackNavigator<CreateStackParams>();
const CreateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
};

export default CreateStack;
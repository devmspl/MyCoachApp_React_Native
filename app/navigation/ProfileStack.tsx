import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import FollowerScreen from '../screens/follow/FollowerScreen';
import FollowingScreen from '../screens/follow/FollowingScreen';
import QrScreen from '../screens/QrScreen';
import OthersProfileScreen from '../screens/OthersProfileScreen';
import OthersStoryScreen from '../screens/OthersStoryScreen';
import PostViewScreen from '../screens/PostViewScreen';
import {ProfileStackStackParams} from './types';

// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<ProfileStackStackParams>();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="OthersProfile" component={OthersProfileScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Follower" component={FollowerScreen} />
      <Stack.Screen name="Following" component={FollowingScreen} />
      <Stack.Screen name="PostView" component={PostViewScreen} />
      <Stack.Screen name="QrScreen" component={QrScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

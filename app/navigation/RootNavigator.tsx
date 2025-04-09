import React, {useState} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import SignupScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import VerifyOtpScreen from '../screens/auth/VerifyOtpScreen';
import SetNewPasswordScreen from '../screens/auth/SetNewPasswordScreen';
import SettingScreen from '../screens/SettingScreen';

import {RootStackParams} from './types';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth, tokenSelector} from '../redux/feature/auth/authSlice';
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreen from '../screens/SplashScreen';
import OnboardingOne from '../screens/OnBoardings/OnboardingOne';
import OnboardingTwo from '../screens/OnBoardings/OnboardingTwo';
import OnboardingThree from '../screens/OnBoardings/OnboardingThree';
import OnboardingFour from '../screens/OnBoardings/OnboardingFour';
import OnboardingFive from '../screens/OnBoardings/OnboardingFive';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = ({localAuth, isFirstTimeOpen}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const token = useSelector(tokenSelector);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!token ? (
        <>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
          <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
          <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
          <Stack.Screen name="OnboardingFour" component={OnboardingFour} />
          <Stack.Screen name="OnboardingFive" component={OnboardingFive} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
          <Stack.Screen
            name="SetNewPassword"
            component={SetNewPasswordScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTab" component={MainTabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

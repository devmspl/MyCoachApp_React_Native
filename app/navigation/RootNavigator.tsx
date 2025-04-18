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
import OnboardingOne from '../screens/OnBoardings/onBoarding1/OnboardingOne';
import OnboardingTwo from '../screens/OnBoardings/onBoarding2/OnboardingTwo';
import OnboardingThree from '../screens/OnBoardings/onBoarding3/OnboardingThree';
import OnboardingFour from '../screens/OnBoardings/onBoarding3/QuizQuestionairre';
import OnboardingFive from '../screens/OnBoardings/onBoarding4/OnboardingFour';
import PlaidBankSelectionScreen from '../screens/OnBoardings/onBoarding4/PlaidBankSelection';

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
          <Stack.Screen name='PlaidBankSelection' component={PlaidBankSelectionScreen} />
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

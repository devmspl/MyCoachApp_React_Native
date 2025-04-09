import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/MainLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {COLORS} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import moment from 'moment';
import PhoneInput from 'react-native-phone-input';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {LOCAL_KEYS} from '../../utils/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout onBack={navigation.goBack}>
      <ScrollView contentContainerStyle={{padding: 10}}>
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/images/welcomeImg.png')}
            style={{
              resizeMode: 'contain',
              width: '110%',
              height: 200,
            }}
          />
        </View>
        <BigText bold style={{alignSelf: 'center'}}>
          Let's you in
        </BigText>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            flexDirection: 'row',
            backgroundColor: 'rgba(0,0,0,0.02)',
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Image
            source={require('../../../assets/images/facebook.png')}
            style={{
              resizeMode: 'contain',
              width: 25,
              height: 25,
              marginRight: 10,
            }}
          />
          <RegularText>Continue with Facebook</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            flexDirection: 'row',
            backgroundColor: 'rgba(0,0,0,0.02)',
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Image
            source={require('../../../assets/icon/google.png')}
            style={{
              resizeMode: 'contain',
              width: 25,
              height: 25,
              marginRight: 10,
            }}
          />
          <RegularText>Continue with Google</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '95%',
            flexDirection: 'row',
            backgroundColor: 'rgba(0,0,0,0.02)',
            borderColor: 'rgba(0,0,0,0.08)',
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign
            style={{marginRight: 10}}
            name="apple1"
            size={25}
            color={COLORS.black}
          />
          <RegularText>Continue with Apple</RegularText>
        </TouchableOpacity>
        <RegularText style={{alignSelf: 'center', marginVertical: 25}}>
          or
        </RegularText>
        <PrimaryBtn
          onPress={() => navigation.navigate('Login')}
          text="Sign in with password"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <SmallText style={{fontSize: 12}}>Don't have an account ? </SmallText>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <SmallText
              style={{
                color: COLORS.primary,
                marginLeft: 5,
                fontSize: 12,
              }}>
              Sign Up
            </SmallText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default WelcomeScreen;

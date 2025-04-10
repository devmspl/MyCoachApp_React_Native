import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {MyText} from '../../../components/MyText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useDispatch} from 'react-redux';
import Input from '../../../components/Input';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [view, setView] = React.useState(1);

  return (
    <MainLayout>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.logoView}></View>

        <View style={styles.viewBtn}>
          <Pressable
            onPress={() => setView(1)}
            style={{
              backgroundColor: view === 1 ? 'white' : COLORS.lightgrey,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm}>Login</MyText>
          </Pressable>

          <Pressable
            onPress={() => setView(2)}
            style={{
              backgroundColor: view === 2 ? 'white' : COLORS.lightgrey,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm}>Sign up</MyText>
          </Pressable>
        </View>

        <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold} style={{marginBottom:10}}>
          Welcome Back
        </MyText>
        <MyText size={FONT_SIZE.sm} color={'gray'}>
          Let’s get you back on the track to financial stability
        </MyText>

        <View>
          {/* EMAIL */}
          <View style={styles.inputView}>
            <MaterialCommunityIcons
              name="email-variant"
              size={22}
              color={COLORS.darkgrey}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={COLORS.darkgrey}
            />
          </View>

          {/* Password */}
          <View style={styles.inputView}>
            <Entypo name="key" size={20} color={COLORS.darkgrey} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={COLORS.darkgrey}
              secureTextEntry={!isPasswordVisible}
            />
            {/* <Feather
              style={{}}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={'gray'}
            /> */}
          </View>
        </View>

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <MyText color={COLORS.primary} size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
            I forgot the password
          </MyText>
        </TouchableOpacity>

        <View style={{marginTop: 20}}>
          <PrimaryBtn loading={loading} text={'Log in to your account'} />
        </View>
      </View>
    </MainLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoView: {
    alignSelf: 'center',
    marginVertical: 25,
    backgroundColor: COLORS.grey,
    height: 50,
    width: 180,
    marginBottom: 20,
  },
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.lightgrey,
    borderRadius: 5,
    height: 30,
    width: 180,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  inputView: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.lightgrey,
    paddingHorizontal: 10,
  },
  input: {
    height: 45,
    paddingHorizontal: 10,
    width: '90%',
    color: COLORS.black,
  },
});

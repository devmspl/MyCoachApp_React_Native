import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {MyText} from '../../../components/MyText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useDispatch} from 'react-redux';
import GoogleIcon from '../../../../assets/svg/Google.svg';
import {setAuth} from '../../../redux/feature/auth/authSlice';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [view, setView] = React.useState(1);
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const handleLogin = () => {
    dispatch(
      setAuth({
        user: [
          {
            name: 'John Doe',
            email: 'BkV5u@example.com',
            phone: '1234567890',
            address: '123 Main St, Anytown, USA',
          },
        ],
        token: '1fdsfdf2fdsggf3sedgsdgdsg3dsgsd3gsdgdfg3',
      }),
    );

    navigation.navigate('MainTab');
  };

  return (
    <MainLayout>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.logoView}></View>

        <View style={styles.viewBtn}>
          <Pressable
            onPress={() => setView(1)}
            style={{
              backgroundColor: view === 1 ? 'white' : COLORS.grey,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm} color={'black'}>Login</MyText>
            {/* <MyText size={FONT_SIZE.sm} color={view === 1 ? 'black' : 'white'}>Login</MyText> */}
          </Pressable>

          <Pressable
            onPress={() => setView(2)}
            style={{
              backgroundColor: view === 2 ? 'white' : COLORS.grey,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm} color={'black'}>Sign up</MyText>
            {/* <MyText size={FONT_SIZE.sm} color={view === 2 ? 'black' : 'white'}>Sign up</MyText> */}
          </Pressable>
        </View>

        {/* {LOGIN} */}
        {view === 1 && (
          <>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold}>
              Welcome Back
            </MyText>
        
            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
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
              // onPress={() => navigation.navigate('ForgotPassword')}
            >
              <MyText
                // color={COLORS.primary}
                size={FONT_SIZE.sm}
                bold={FONT_WEIGHT.bold}>
                I forgot the password
              </MyText>
            </TouchableOpacity>

            <View style={{marginTop: 20}}>
              <PrimaryBtn
                onPress={handleLogin}
                loading={loading}
                text={'Log in to your account'}
              />
            </View>
          </>
        )}

        {/* {SIGN UP} */}
        {view === 2 && (
          <>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold}>
              Sign up to your account
            </MyText>
            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              Let’s get you started on the track to financial stability
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

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  marginTop: 10,
                  width: '90%',
                }}>
                <Fontisto
                  onPress={() => setTermsAccepted(!termsAccepted)}
                  name={termsAccepted ? 'checkbox-active' : 'checkbox-passive'}
                  size={20}
                  color={termsAccepted ? COLORS.primary : COLORS.grey}
                />
                <MyText size={FONT_SIZE.xs}>
                  By creating an account, you have agree to our{' '}
                  <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                    Terms & Conditions
                  </MyText>
                  <MyText size={FONT_SIZE.xs}> and </MyText>
                  <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                    Privacy Policy
                  </MyText>
                </MyText>
              </View>

              {/* <View style={styles.inputView}>
                <Entypo name="key" size={20} color={COLORS.darkgrey} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={COLORS.darkgrey}
                  secureTextEntry={!isPasswordVisible}
                />
              </View> */}
              {/* <Feather
              style={{}}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={'gray'}
            /> */}
            </View>

            <PrimaryBtn
              onPress={() => navigation.navigate('OnboardingOne')}
              containerStyle={{marginTop: 20}}
              loading={loading}
              text={'Create Account'}
            />

            {Platform.OS === 'ios' && (
              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="apple1" size={24} color="black" />
                <MyText bold={FONT_WEIGHT.bold}>Continue with Apple</MyText>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.socialBtn}>
              <GoogleIcon />
              <MyText bold={FONT_WEIGHT.bold}>Continue with Google</MyText>
            </TouchableOpacity>
          </>
        )}
      </View>
    </MainLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoView: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    height: 50,
    width: 180,
    marginBottom: 20,
  },
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    height: 30,
    width: 180,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  inputView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderWidth:1,
    borderColor:COLORS.grey
  },
  input: {
    height: 45,
    paddingHorizontal: 10,
    width: '90%',
    color: COLORS.black,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginTop: 15,
  },
});

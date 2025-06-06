import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MyText, SmallText} from '../../../components/MyText';
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
import {api_login, api_signup} from '../../../api/auth';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('* Email address is required *'),
  password: yup.string().min(8).required('* Password is required *'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  // ),
});

const SignupView = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const handleSignUp = async (payload: any) => {
    setLoading(true);
    const {email, password} = payload;
    // const email = "sukhi@gmail.com";
    // const password = "12345678";
    console.log(email, password, 'payload from signup');
    try {
      const res = await api_signup(email, password);
      Alert.alert('Success', res.message || 'Account created!');
      //@ts-ignore
      navigation.navigate('OnboardingOne', {token: res.token});
    } catch (error: any) {
      console.log(error, 'error from signup');
      
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount={true}
        validationSchema={SignupSchema}
        onSubmit={res => {
          handleSignUp(res);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
          handleBlur,
        }) => (
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
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </View>
              {touched.email && errors.email && (
                <SmallText style={styles.errorText}>{errors.email}</SmallText>
              )}

              {/* Password */}
              <View style={styles.inputView}>
                <Entypo name="key" size={20} color={COLORS.darkgrey} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={COLORS.darkgrey}
                  //   secureTextEntry={!isPasswordVisible}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
              </View>
              {touched.password && errors.password && (
                <SmallText style={styles.errorText}>
                  {errors.password}
                </SmallText>
              )}
              {/* <Feather
              style={{}}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={'gray'}
            /> */}

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
              onPress={handleSubmit}
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
            <TouchableOpacity
              onPress={() => navigation.navigate('OnboardingOne')}
              style={styles.socialBtn}>
              <GoogleIcon />
              <MyText bold={FONT_WEIGHT.bold}>Continue with Google</MyText>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 40,
  },
  inputView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
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

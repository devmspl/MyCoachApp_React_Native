import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {Formik} from 'formik';
import * as yup from 'yup';
import {api_signup} from '../../../api/auth';

import {matrixTransform} from 'react-native-svg/lib/typescript/elements/Shape';

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

const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [defaultVal, setDefaultVal] = React.useState(null);

  const handleSignUp = async (data: any) => {
    setLoading(true);
    try {
      console.log(data);
      const res = await api_signup(data);
      Alert.alert('Alert', res.message || 'success!');
      navigation.navigate('FillProfile');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout onBack={navigation.goBack}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount={true}
        validationSchema={SignupSchema}
        onSubmit={res => {
          handleSignUp(res);
          console.log(res);
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
          <ScrollView>
            <View
              style={{marginHorizontal: 30, marginTop: 15, marginBottom: 20}}>
              <BigText style={{fontSize: 33}} bold>
                Create Your
              </BigText>
              <BigText style={{fontSize: 33}} bold>
                Account
              </BigText>
            </View>
            <View>
              {/* EMAIL */}
              <View
                style={{
                  marginHorizontal: 30,
                  marginVertical: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  paddingHorizontal: 10,
                }}>
                <MaterialCommunityIcons
                  name="email"
                  size={20}
                  color={'rgba(0,0,0,0.3)'}
                />
                <TextInput
                  style={{
                    height: 55,
                    paddingHorizontal: 10,
                    width: '90%',
                    color: COLORS.black,
                  }}
                  placeholder="Email"
                  placeholderTextColor={COLORS.grey}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
              </View>
              {touched.email && errors.email && (
                <SmallText
                  style={{
                    color: 'red',
                    marginTop: -10,
                    marginBottom: 10,
                    marginLeft: 40,
                  }}>
                  {errors.email}
                </SmallText>
              )}
              {/* Password */}
              <View
                style={{
                  marginHorizontal: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  paddingHorizontal: 10,
                }}>
                <Entypo name="lock" size={20} color={'rgba(0,0,0,0.3)'} />
                <TextInput
                  style={{
                    height: 60,
                    paddingHorizontal: 10,
                    width: '85%',
                    color: COLORS.black,
                  }}
                  placeholder="Password"
                  placeholderTextColor={COLORS.grey}
                  secureTextEntry={!isPasswordVisible}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                <Feather
                  style={{}}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                  name={isPasswordVisible ? 'eye' : 'eye-off'}
                  size={20}
                  color={'gray'}
                />
              </View>
              {touched.password && errors?.password && (
                <SmallText
                  style={{
                    color: 'red',
                    marginTop: 5,
                    marginBottom: 10,
                    marginLeft: 40,
                  }}>
                  {errors.password}
                </SmallText>
              )}
            </View>

            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: COLORS.primary,
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  marginVertical: 20,
                }}></View>
              <SmallText>Remember me</SmallText>
            </View> */}

            <View style={{marginTop: 50}}>
              <PrimaryBtn
                loading={loading}
                text={'Sign up'}
                onPress={handleSubmit}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RegularText style={{marginVertical: 40}}>
                or continue with
              </RegularText>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}>
                <Image
                  source={require('../../../../assets/images/facebook.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}>
                <Image
                  source={require('../../../../assets/icon/google.png')}
                  style={{
                    resizeMode: 'contain',
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}>
                <AntDesign name="apple1" size={30} color={COLORS.black} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 80,
              }}>
              <SmallText style={{fontSize: 12}}>
                Don't have an account ?
              </SmallText>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <SmallText
                  style={{
                    color: COLORS.primary,
                    marginLeft: 5,
                    fontSize: 12,
                  }}>
                  Sign in
                </SmallText>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    </MainLayout>
  );
};

export default SignupScreen;

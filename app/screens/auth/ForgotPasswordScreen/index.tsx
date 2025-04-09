import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {api_sendOTP_onBoth} from '../../../api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {min} from 'moment';

const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email.'),
  phone: yup.string().min(10).max(10),
});

const ForgotPasswordScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [active, setActive] = React.useState(1);
  const token = useSelector((s: any) => s.auth.accessToken);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleSendOtp = async (email: any, phone: any) => {
    console.log('email and phone', email, phone);

    setLoading(true);
    try {
      const res = await api_sendOTP_onBoth(email, phone);
      console.log({res});
      Alert.alert('Alert', 'OTP sent successfully');
      // @ts-ignore
      navigation.navigate('VerifyOtp', {token: res?.message.token});
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        'Alert',
        'Please enter your registered email or phone number.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Forgot Password" onBack={navigation.goBack}>
      <Formik
        initialValues={{
          email: '',
          phone: '',
        }}
        validateOnMount={true}
        validationSchema={ForgotPasswordSchema}
        onSubmit={res => {
          console.log(res);
          handleSendOtp(res.email, res.phone);
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
          <ScrollView style={{padding: 15}}>
            <View
              style={{
                height: 210,
                width: '70%',
                backgroundColor: 'white',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../../../../assets/images/SetPasswordImg.png')}
                style={{
                  resizeMode: 'contain',
                  width: '110%',
                  height: '100%',
                }}
              />
            </View>
            <RegularText style={{marginTop: 10, marginBottom: 20}}>
              Select which contact details should we use to reset your password
            </RegularText>
            <TouchableOpacity
              onPress={() => {
                setActive(1);
              }}
              style={{
                flexDirection: 'row',
                height: 110,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: active === 1 ? COLORS.primary : 'lightgray',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  borderRadius: 50,
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="message1" size={25} color={COLORS.primary} />
              </View>
              <View style={{marginLeft: 20}}>
                <Text>via SMS</Text>
                <TextInput
                  editable={active === 1 ? true : false}
                  style={{
                    color: COLORS.black,
                    height: 40,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 10,
                    marginLeft: -5,
                  }}
                  placeholder="Enter your mobile number..."
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                />
                {touched.phone && errors.phone && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginTop: 5,
                    }}>
                    {errors.phone}
                  </SmallText>
                )}
                {/* <Text style={{fontWeight: 'bold', color: 'black'}}>
                  +9876*****21
                </Text> */}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setActive(2);
              }}
              style={{
                flexDirection: 'row',
                height: 110,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: active === 2 ? COLORS.primary : 'lightgray',

                alignItems: 'center',
                paddingHorizontal: 20,
                marginTop: 20,
              }}>
              <View
                style={{
                  height: 65,
                  width: 65,
                  borderRadius: 50,
                  backgroundColor: 'rgba(0,0,0,0.08)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="mail" size={25} color={COLORS.primary} />
              </View>
              <View style={{marginLeft: 20}}>
                <Text>via EMAIL</Text>
                <TextInput
                  editable={active === 2 ? true : false}
                  style={{
                    color: COLORS.black,
                    height: 40,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 10,
                    marginLeft: -5,
                  }}
                  placeholder="Enter your email..."
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginTop: 5,
                    }}>
                    {errors.email}
                  </SmallText>
                )}
              </View>
            </TouchableOpacity>
            <View style={{marginTop: 45}}>
              <PrimaryBtn
                loading={loading}
                text={'Continue'}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </MainLayout>
  );
};

export default ForgotPasswordScreen;

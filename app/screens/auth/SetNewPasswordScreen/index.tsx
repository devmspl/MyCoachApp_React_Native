import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import SetNewPasswordModal from '../../../components/SetNewPasswordModal';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {api_setNewPassword} from '../../../api/auth';

const SetNewPasswordSchema = yup.object().shape({
  newPassword: yup.string().min(8).required('* Password is required *'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], '* Passwords must match *'),
});

const ErrorText = ({text}: any) => {
  return (
    <SmallText
      style={{
        color: 'red',
        marginBottom: 10,
        marginLeft: 40,
        marginTop: -10,
      }}>
      {text}
    </SmallText>
  );
};

const SetNewPasswordScreen = () => {
  const [newPassData, setNewPassData] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = React.useState(false);
  const params = useRoute<any>().params;
  console.log({params});
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleSetNewPassword = async (data: any) => {
    setLoading(true);
    try {
      const res = await api_setNewPassword(data, params.token);
      console.log({res});
      // Alert.alert('Alert', res?.message || 'success!');
      setNewPassData(true);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {newPassData && <SetNewPasswordModal setNewPassData={setNewPassData} />}
      <MainLayout title="Create New Password" onBack={navigation.goBack}>
        <Formik
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
          }}
          validateOnMount={true}
          validationSchema={SetNewPasswordSchema}
          onSubmit={res => {
            handleSetNewPassword(res.newPassword);
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
                style={{
                  marginHorizontal: 30,
                  marginBottom: 20,
                  height: 280,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../../assets/images/SetPasswordImg.png')}
                  style={{
                    resizeMode: 'contain',
                    width: '110%',
                    height: 280,
                  }}
                />
              </View>
              <RegularText style={{marginLeft: 20}}>
                Create Your New Password
              </RegularText>
              <View>
                {/* New Password */}
                <View
                  style={{
                    marginHorizontal: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    paddingHorizontal: 10,
                    marginVertical: 10,
                    marginTop: 15,
                  }}>
                  <Image
                    source={require('../../../../assets/icon/lock.png')}
                    style={{
                      resizeMode: 'contain',
                      width: 20,
                      height: 20,
                      opacity: 0.5,
                    }}
                  />
                  {/* <Entypo name="lock" size={20} color={'rgba(0,0,0,0.3)'} /> */}
                  <TextInput
                    style={{
                      height: 60,
                      paddingHorizontal: 10,
                      width: '85%',
                      color: COLORS.black,
                    }}
                    placeholder="New Password"
                    placeholderTextColor={COLORS.grey}
                    secureTextEntry={!isPasswordVisible}
                    value={values.newPassword}
                    onChangeText={handleChange('newPassword')}
                    onBlur={() => setFieldTouched('newPassword')}
                  />
                  <Feather
                    style={{}}
                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color={'gray'}
                  />
                </View>
                {touched.newPassword && errors.newPassword && (
                  <ErrorText text={errors.newPassword || ''} />
                )}
                {/* Confirm Password */}
                <View
                  style={{
                    marginHorizontal: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    paddingHorizontal: 10,
                  }}>
                  {/* <Image
                    source={require('../../../../assets/icon/lock.png')}
                    style={{
                      resizeMode: 'contain',
                      width: 20,
                      height: 20,
                      opacity: 0.5,
                    }}
                  /> */}
                  {/* <Entypo name="lock" size={20} color={'rgba(0,0,0,0.3)'} /> */}
                  <TextInput
                    style={{
                      height: 60,
                      paddingHorizontal: 10,
                      width: '85%',
                      color: COLORS.black,
                    }}
                    placeholder="Confirm Password"
                    placeholderTextColor={COLORS.grey}
                    secureTextEntry={!isPasswordVisible2}
                    value={values.confirmNewPassword}
                    onChangeText={handleChange('confirmNewPassword')}
                    onBlur={() => setFieldTouched('confirmNewPassword')}
                  />
                  <Feather
                    style={{}}
                    onPress={() => setIsPasswordVisible2(!isPasswordVisible2)}
                    name={isPasswordVisible2 ? 'eye-off' : 'eye'}
                    size={20}
                    color={'gray'}
                  />
                </View>
                {touched.confirmNewPassword && errors?.confirmNewPassword && (
                  <SmallText
                    style={{
                      color: 'red',
                      marginTop: 5,
                      marginLeft: 40,
                    }}>
                    {errors.confirmNewPassword}
                  </SmallText>
                )}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 30,
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
                <SmallText bold>Remember me</SmallText>
              </View>

              <View>
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
    </>
  );
};

export default SetNewPasswordScreen;

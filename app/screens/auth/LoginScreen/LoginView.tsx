import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useDispatch} from 'react-redux';
import {api_login} from '../../../api/auth';
import {setAuth} from '../../../redux/feature/auth/authSlice';
import {MyText, SmallText} from '../../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import * as yup from 'yup';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email.')
    .required('* Email address is required *'),
  password: yup.string().min(8).required('* Password is required *'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  // ),
});

const LoginView = () => {
  // type RootStackParams = {
  //   MainTab: {token: any};
  // };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (payload: any) => {
    setLoading(true);
    try {
      const res = await api_login(payload);
      if (res?.success) {
        // console.log(res, 'login api res');
        dispatch(setAuth(res));
        Alert.alert('Success', res.message || 'LOGIN SUCCESSFULLY');
        navigation.navigate('MainTab');
      }
    } catch (error: any) {
      Alert.alert('Alert', error.message);
      console.log(error, 'error during login');
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
        validationSchema={LoginSchema}
        onSubmit={res => {
          handleLogin(res);
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
            </View>
            {/* <Feather
              style={{}}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={20}
              color={'gray'}
            /> */}

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
                onPress={handleSubmit}
                loading={loading}
                text={'Log in to your account'}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginView;

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
});

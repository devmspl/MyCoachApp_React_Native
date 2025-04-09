import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import {BigText, RegularText, SmallText} from '../../../components/MyText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../styles';
import PrimaryBtn from '../../../components/PrimaryBtn';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import OtpInputs from 'react-native-otp-inputs';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {api_otpVerify} from '../../../api/auth';

const VerifyOtpScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [otp, setOtp] = useState('');
  const [active, setActive] = React.useState(1);
  const params = useRoute<any>().params;
  console.log({params});

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const t = params.token;
      console.log({t, otp});
      const res = await api_otpVerify(otp, t);
      console.log({res});
      Alert.alert('Alert', res.message || 'OTP Successfully Verified');
      // @ts-ignore
      navigation.navigate('SetNewPassword', {token: params.token});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Forgot Password" onBack={navigation.goBack}>
      <ScrollView style={{padding: 15}}>
        <View
          style={{
            height: 160,
            width: '70%',
            backgroundColor: 'white',
            alignSelf: 'center',
          }}></View>
        <RegularText
          style={{marginTop: 10, alignSelf: 'center', marginBottom: 40}}>
          Code has been sent to registered Email
        </RegularText>

        {/* <OtpInputs
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}
          autofillFromClipboard={false}
          inputStyles={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            width: 65,
            borderColor: 'lightgray',
            borderWidth: 1,
            margin: 5,
            fontSize: 25,
            textAlign: 'center',
            borderRadius: 10,
            fontWeight: 'bold',
          }}
          handleChange={code => setOtp(code)}
          numberOfInputs={4}
        /> */}
        <View style={{marginTop: 240}}>
          <PrimaryBtn
            text={'Verify'}
            loading={loading}
            onPress={handleVerifyOtp}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

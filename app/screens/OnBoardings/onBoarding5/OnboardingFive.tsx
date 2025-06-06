import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MyText} from '../../../components/MyText';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SelectInput from '../../../components/SelectInput';
import {api_onbaordingFive} from '../../../api/onboardings';

const OnboardingFive = () => {
  type RootStackParams = {
    BankSelection: {};
    Login: {
      token: any;
    };
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedBank, setSelectedBank] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [accountName, setAccountName] = React.useState(false);
  const [accountNumber, setAccountNumber] = React.useState(false);
  const [ibanNumber, setibanNumber] = React.useState(false);
  const token = useRoute<any>().params.token;
  //  console.log('token from route params ', token);

  const handleBank = async () => {
    setIsLoading(true);
    const payload = {
      bank_name: selectedBank,
      account_name: accountName,
      account_number: accountNumber,
      iban: ibanNumber,
    };
    // console.log('payload', payload);
    // console.log('Payload JSON:', JSON.stringify(payload));
    try {
      const res = await api_onbaordingFive(payload, token);
      // console.log({res});
      Alert.alert(
        'Success',
        res.message || 'BANK DETAILS UPDATED SUCCESSFULLY',
      );
      navigation.navigate('Login', {token: token});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20, flex: 1}}>
        <View style={{flex: 1}}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons name="arrow-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.slideView}>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            </View>
            <AntDesign name="arrowleft" size={1} color="white" />
          </View>

          {/* {CONTENT} */}
          <View style={{marginTop: 20}}>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold}>
              Provide Your Bank Details
            </MyText>

            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              Providing your bank account helps you to link and manage your
              finances better.
            </MyText>

            <View style={styles.plaidView}>
              <TouchableOpacity
                style={styles.plaidBtn}
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate({name: 'BankSelection', params: {}})
                }>
                <MyText size={FONT_SIZE.sm} color={COLORS.white}>
                  Link with Plaid
                </MyText>
                <Image
                  source={require('../../../../assets/icon/plaid.png')}
                  style={styles.plaidIcon}
                />
              </TouchableOpacity>
            </View>

            <SelectInput
              data={[
                {label: 'JPMorgan Chase & Co.', value: 'chase'},
                {label: 'Bank of America', value: 'boa'},
                {label: 'Wells Fargo', value: 'wells-fargo'},
                {label: 'Citigroup', value: 'citi'},
                {label: 'Goldman Sachs', value: 'goldman-sachs'},
                {label: 'Morgan Stanley', value: 'morgan-stanley'},
                {label: 'American Express Bank', value: 'amex'},
                {label: 'U.S. Bank', value: 'us-bank'},
                {label: 'PNC Financial Services', value: 'pnc'},
                {label: 'TD Bank', value: 'td-bank'},
              ]}
              value={selectedBank}
              onSelect={item => setSelectedBank(item.value)}
              placeholder="Bank Name"
            />

            <Input onChangeText={setAccountName} placeholder="Account Name" />
            <Input
              onChangeText={setAccountNumber}
              placeholder="Account Number"
            />
            <Input onChangeText={setibanNumber} placeholder="IBAN Number" />

            {/* {IMP NOTE} */}
            <View
              style={{
                padding: 15,
                backgroundColor: COLORS.lightBg,
                marginTop: 20,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <AntDesign name="infocirlceo" size={15} color="black" />
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.sm}>
                  Important note:
                </MyText>
              </View>

              <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.sm}>
                  •
                </MyText>
                <MyText size={FONT_SIZE.sm}>
                  Please ensure yiur account name matches the name on the ID
                  card you provided.
                </MyText>
              </View>
              <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.sm}>
                  •
                </MyText>
                <MyText size={FONT_SIZE.sm}>
                  Please ensure yiur account name matches the name on the ID
                  card you provided.
                </MyText>
              </View>
            </View>
          </View>
        </View>
        <PrimaryBtn
          onPress={handleBank}
          containerStyle={{marginVertical: 20}}
          text="Confirm"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingFive;

const styles = StyleSheet.create({
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginVertical: 20,
  },
  btn: {
    borderRadius: 10,
    width: 40,
    height: 8,
    backgroundColor: COLORS.grey,
  },
  plaidView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: -30,
  },
  plaidBtn: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  plaidIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

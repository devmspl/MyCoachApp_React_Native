import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {BigText, RegularText, SmallText} from './MyText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PrimaryBtn from './PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {SheetManager} from 'react-native-actions-sheet';
import {COLORS} from '../styles';

const SetNewPasswordModal = ({setNewPassData}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 350,
            width: '80%',
            backgroundColor: 'white',
            borderRadius: 20,
          }}>
          <View
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: COLORS.primary,
              alignSelf: 'center',
              marginTop: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5 name="check" size={25} color={COLORS.primary} />
            </View>
          </View>
          <RegularText
            bold
            style={{
              color: COLORS.primary,
              fontSize: 20,
              marginTop: 20,
              alignSelf: 'center',
            }}>
            Congratulations!
          </RegularText>
          <RegularText
            style={{
              color: COLORS.black,
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            Your account is ready to use
          </RegularText>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              height: 45,
              backgroundColor: COLORS.primary,
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <RegularText style={{color: 'white'}}>Go to HomePage</RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SetNewPasswordModal;

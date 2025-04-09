import {View, Text} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {RegularText} from '../../components/MyText';
import {COLORS} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, logOut} from '../../redux/feature/auth/authSlice';

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();

  const auth = useSelector(authSelector);
  const handleLogout = () => {
    dispatch(logOut(null));
  };

  return (
    <MainLayout title="Settings" onBack={navigation.goBack}>
      <View style={{marginBottom: 30, marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '65%',
          }}>
          <SimpleLineIcons name="user-follow" size={20} color={COLORS.black} />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            Follow and Invite Friends
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '40%',
          }}>
          <FontAwesome name="bell-o" size={22} color={COLORS.black} />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            Notifications
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '30%',
          }}>
          <SimpleLineIcons name="lock" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            Privacy
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '30%',
          }}>
          <Ionicons
            name="ios-shield-checkmark-outline"
            size={24}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            Security
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '30%',
          }}>
          <AntDesign name="barschart" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>Ads</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '30%',
          }}>
          <FontAwesome name="user-o" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            Account
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '30%',
          }}>
          <Ionicons
            name="md-help-circle-outline"
            size={25}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>Help</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '30%',
          }}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            About
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
            marginBottom: 10,

            width: '40%',
          }}>
          <AntDesign name="eyeo" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 15, fontSize: 16}}>
            Dark Theme
          </RegularText>
        </TouchableOpacity>
      </View>

      <View style={{marginLeft: 5}}>
        <TouchableOpacity style={{width: '45%', marginVertical: 10}}>
          <RegularText
            style={{
              marginLeft: 15,
              fontSize: 14,
              color: COLORS.blue,
            }}>
            Add or Switch Account
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '70%', marginVertical: 10}}
          onPress={handleLogout}>
          <RegularText
            style={{
              marginLeft: 15,
              fontSize: 14,

              color: COLORS.blue,
            }}>
            Logout {auth?.user_name}
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '40%', marginVertical: 10}}>
          <RegularText
            style={{
              marginLeft: 15,
              fontSize: 14,
              marginBottom: 10,
              color: COLORS.blue,
            }}>
            Logout All Account
          </RegularText>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default SettingScreen;

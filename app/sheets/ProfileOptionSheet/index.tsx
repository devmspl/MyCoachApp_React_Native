import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {COLORS} from '../../styles';
import {RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

const ProfileOptionSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const close = () => {
    SheetManager.hide(SHEETS.ProfileOptionSheet);
  };
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => {
            close();
            navigation.navigate('Setting');
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <EvilIcons name="gear" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Settings</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            close();
            navigation.navigate('ArchivePosts');
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <EvilIcons name="archive" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Archive</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            close();
            navigation.navigate('YourActivity');
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Ionicons name="ios-time-outline" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Your Activity</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('QrScreen');
            close();
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <MaterialCommunityIcons
            name="line-scan"
            size={24}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 10}}>QR Code</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Saved');
            close();
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <FontAwesome name="bookmark-o" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Saved</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CloseFriends');
            close();
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Ionicons name="ios-people-outline" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Close Friends</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favorite');
            close();
          }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <AntDesign name="hearto" size={22} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Favorites</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 10}}>Information Center</RegularText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ProfileOptionSheet;

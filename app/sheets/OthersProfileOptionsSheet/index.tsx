import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {COLORS} from '../../styles';
import {RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

const OthersProfileOptionSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const close = () => {
    SheetManager.hide(SHEETS.ProfileOptionSheet);
  };
  return (
    <ActionSheet
      id={props.sheetId}
      gestureEnabled
      containerStyle={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          //   onPress={() => {
          //     close();
          //     navigation.navigate('Setting');
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Ionicons
            name="alert-circle-outline"
            size={26}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 10}}>Report</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => {
          //     close();
          //     navigation.navigate('ArchivePosts');
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <MaterialCommunityIcons
            name="block-helper"
            size={24}
            color={COLORS.black}
          />
          <RegularText style={{marginLeft: 10}}>Block</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => {
          //     close();
          //     navigation.navigate('YourActivity');
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <SimpleLineIcons name="user" size={23} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>About this Account</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => {
          //     navigation.navigate('QrScreen');
          //     close();
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <SimpleLineIcons name="shield" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Restrict</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => {
          //     navigation.navigate('Saved');
          //     close();
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Feather color={'#414141'} name="eye-off" size={23} />
          <RegularText style={{marginLeft: 10}}>Hide Your Story</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => {
          //     navigation.navigate('CloseFriends');
          //     close();
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <AntDesign name="copy1" size={24} color={COLORS.black} />
          <RegularText style={{marginLeft: 10}}>Copy Profile URL</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={() => {
          //     navigation.navigate('Favorite');
          //     close();
          //   }}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
            marginBottom: 50,
          }}>
          <Feather color={'#414141'} name="send" size={24} />
          <RegularText style={{marginLeft: 10}}>Share this Profile</RegularText>
        </TouchableOpacity>
      </View>
      <View style={{}}></View>
    </ActionSheet>
  );
};

export default OthersProfileOptionSheet;

import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import {SHEETS} from './sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import {COLORS} from '../styles';
import {RegularText} from '../components/MyText';
import {useNavigation} from '@react-navigation/native';

const ShortOptionSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.ShortOptionSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <View style={{marginBottom: 50}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <EvilIcons name="gear" size={24} color={COLORS.primary} />
          <RegularText style={{marginLeft: 10, color: COLORS.primary}}>
            Report..
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <EvilIcons name="archive" size={24} color={COLORS.grey} />
          <RegularText style={{marginLeft: 10}}>Not Intreset</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Ionicons name="ios-time-outline" size={24} color={COLORS.grey} />
          <RegularText style={{marginLeft: 10}}>Copy Link</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Ionicons name="qr-code-outline" size={24} color={COLORS.grey} />
          <RegularText style={{marginLeft: 10}}>Share to..</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Feather name="bookmark" size={24} color={COLORS.grey} />
          <RegularText style={{marginLeft: 10}}>Save</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 5,
          }}>
          <Ionicons name="ios-people-outline" size={24} color={COLORS.grey} />
          <RegularText style={{marginLeft: 10}}>Remix this short</RegularText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ShortOptionSheet;

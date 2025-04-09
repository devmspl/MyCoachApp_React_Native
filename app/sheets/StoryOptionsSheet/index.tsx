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

const StoryOptionsSheet = (props: any) => {
  return (
    <ActionSheet
      id={props.sheetId}
      gestureEnabled
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
      <View style={{marginVertical: 20}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            borderBottomColor: 'lightgray',
            borderTopColor: 'lightgray',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            height: 50,
          }}>
          <RegularText style={{marginLeft: 10, color: 'red'}}>
            Delete
          </RegularText>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            height: 50,
          }}>
          <RegularText style={{marginLeft: 10, color: COLORS.black}}>
            Save...
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            height: 50,
          }}>
          <RegularText style={{marginLeft: 10, color: COLORS.black}}>
            Story settings
          </RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props?.payload?.closeSheet}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            height: 50,
          }}>
          <RegularText style={{marginLeft: 10, color: COLORS.black}}>
            Cancel
          </RegularText>
        </TouchableOpacity>
      </View>
      <View style={{}}></View>
    </ActionSheet>
  );
};

export default StoryOptionsSheet;

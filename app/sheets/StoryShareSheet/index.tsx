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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {RegularText, SmallText} from '../../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../styles';
import MainLayout from '../../components/MainLayout';
import SearchBox from '../../components/SearchBox';
import {useNavigation} from '@react-navigation/native';

const StoryShareSheet = (props: any) => {
  const navigation = useNavigation();
  return (
    <ActionSheet
      id={props.sheetId}
      gestureEnabled
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
      <SearchBox />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                marginHorizontal: 15,
                marginVertical: 5,
              }}>
              <View
                style={{
                  backgroundColor: 'grey',
                  width: 60,
                  height: 60,
                  borderRadius: 45,
                }}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate('OthersProfile')}
                style={{
                  flex: 1,
                }}>
                <RegularText bold>Jane Copper </RegularText>
                <SmallText>Videographer</SmallText>
              </TouchableOpacity>
              {index % 2 === 0 ? (
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: 10,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <SmallText style={{color: COLORS.white}} bold>
                    Send
                  </SmallText>
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 10,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                  }}>
                  <SmallText style={{color: COLORS.primary}} bold>
                    Sent
                  </SmallText>
                </View>
              )}
              {/* <View
                style={{
                  backgroundColor: COLORS.primary,
                  paddingHorizontal: 10,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <SmallText style={{color: COLORS.white}} bold>
                  Send
                </SmallText>
              </View> */}
            </View>
          );
        }}
      />
    </ActionSheet>
  );
};

export default StoryShareSheet;

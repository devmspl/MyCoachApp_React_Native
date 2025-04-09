import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../sheets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import {COLORS} from '../../styles';
import {RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {onSharePost} from '../../utils/helper';

const PostOptionSheet = (props: any) => {
  const [isFav, setIsFav] = React.useState(false);
  const [isFollow, setIsFollow] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const close = () => {
    SheetManager.hide(SHEETS.ProfileOptionSheet);
  };
  return (
    <ActionSheet
      id={props.sheetId}
      gestureEnabled
      containerStyle={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
      <View style={{marginBottom: 70, marginTop: 10}}>
        <View
          style={{
            height: 100,
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="copy1" size={24} color={COLORS.white} />
            </View>
            <Text style={{textAlign: 'center', color: 'black'}}>Link</Text>
          </View>
          <View>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather
                onPress={() => onSharePost()}
                color={COLORS.white}
                name="send"
                size={24}
              />
            </View>
            <Text style={{textAlign: 'center', color: 'black'}}>Share</Text>
          </View>
          <View>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="alert-circle" size={30} color={COLORS.white} />
            </View>
            <Text style={{textAlign: 'center', color: COLORS.primary}}>
              Report
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
            marginTop: 20,
          }}>
          <AntDesign
            name={isFav ? 'heart' : 'hearto'}
            color={isFav ? 'red' : COLORS.grey}
            size={23}
            onPress={() => {
              setIsFav(!isFav);
            }}
          />
          <RegularText style={{marginLeft: 10, color: COLORS.grey}}>
            Add to Favorites
          </RegularText>
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
          <Feather color={COLORS.grey} name="eye-off" size={23} />
          <RegularText style={{marginLeft: 10, color: COLORS.grey}}>
            Hide
          </RegularText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsFollow(!isFollow)}
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <FontAwesome name="user-circle-o" size={24} color={COLORS.grey} />
          <RegularText
            style={{
              marginLeft: 10,
              color: isFollow ? COLORS.primary : COLORS.grey,
            }}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </RegularText>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default PostOptionSheet;

import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText} from './MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/types';
type Props = {
  onClose: () => void;
};
const ActionMenu = ({onClose}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          zIndex: 10,
          width: 150,
          height: 200,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View
          style={{
            width: 150,
            height: 175,
            backgroundColor: COLORS.white,
            borderRadius: 20,
          }}>
          {/*list  */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PostCreate');
              handleClose();
            }}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <RegularText style={{color: COLORS.grey}}>Post</RegularText>
            <MaterialCommunityIcons
              name={'post-outline'}
              size={20}
              color={COLORS.grey}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClose}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <RegularText style={{color: COLORS.grey}}>Story</RegularText>
            <FontAwesome name={'history'} size={20} color={COLORS.grey} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClose}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <RegularText style={{color: COLORS.grey}}>Short</RegularText>
            <AntDesign name={'playcircleo'} size={20} color={COLORS.grey} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClose}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <RegularText style={{color: COLORS.grey}}>Live</RegularText>
            <Feather name={'video'} size={20} color={COLORS.grey} />
          </TouchableOpacity>
          {/*list  */}
        </View>
        <AntDesign
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            zIndex: -1,
            transform: [{translateX: -20}],
          }}
          name="caretdown"
          color={COLORS.white}
          size={40}
        />
      </View>
    </>
  );
};

export default ActionMenu;

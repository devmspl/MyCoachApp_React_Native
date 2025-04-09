import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText, SmallText} from './MyText';
import {ActivityIndicator} from 'react-native';
import {api_respondFollowReq} from '../api/follow';
import {useSelector} from 'react-redux';
import {tokenSelector} from '../redux/feature/auth/authSlice';

const FollowReq = ({item, reFetchReqs}: any) => {
  const [loading, setLoading] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);
  const token = useSelector(tokenSelector);
  const handleConfirmReq = async () => {
    try {
      setLoading(true);
      const res = await api_respondFollowReq(token, 'yes', item._id);
      console.log(res, 'api_respondFollowReq yes');
      Alert.alert('Alert', 'request accepted!');
      reFetchReqs();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteReq = async () => {
    try {
      setLoading2(true);
      const res = await api_respondFollowReq(token, 'no', item._id);
      console.log(res, 'api_respondFollowReq no');
      Alert.alert('Alert', 'delete request!');
      reFetchReqs();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 8,
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 40,
            backgroundColor: COLORS.grey,
          }}></View>
        <View style={{flex: 1}}>
          <RegularText>{item?.fullName}</RegularText>
          <SmallText>requested to follow</SmallText>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={handleConfirmReq}
            style={{
              padding: 5,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.primary,
              borderRadius: 10,
            }}>
            {loading ? (
              <ActivityIndicator color={COLORS.white} size="small" />
            ) : (
              <RegularText bold style={{color: COLORS.white, fontSize: 12}}>
                Confirm
              </RegularText>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDeleteReq}
            style={{
              padding: 5,
              width: 60,
              backgroundColor: `rgba(0,0,0,0.8)`,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loading2 ? (
              <ActivityIndicator color={COLORS.white} size="small" />
            ) : (
              <RegularText bold style={{color: COLORS.white, fontSize: 12}}>
                Delete
              </RegularText>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FollowReq;

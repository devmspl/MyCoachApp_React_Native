import {View, Text, FlatList} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RegularText, SmallText} from '../../../components/MyText';
import {COLORS} from '../../../styles';

const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const SearchList = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
              }}>
              <SmallText>Recent</SmallText>
              <SmallText style={{color: COLORS.blue}}>See All</SmallText>
            </View>
          );
        }}
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 15,
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: 'grey',
                  borderRadius: 60,
                }}></View>

              <View style={{flex: 1, padding: 20}}>
                <RegularText>Julia_adaline</RegularText>
                <SmallText>Photograper</SmallText>
              </View>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="close" size={12} color={COLORS.black} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchList;

import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../styles';

const SearchBox = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 30,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'rgba(0,0,0,0.05)',
        paddingHorizontal: 15,
      }}>
      <AntDesign
        name="search1"
        size={20}
        color={'rgba(0,0,0,0.3)'}
        onPress={() => {
          navigation.navigate('SearchResult');
        }}
      />
      <TextInput
        style={{
          height: 50,
          color: COLORS.black,
          paddingHorizontal: 10,
          width: '90%',
        }}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBox;

import {View, Text} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DefaultList from './components/DefaultList';
import SearchList from './components/SearchList';
import {COLORS} from '../../styles';

const TabView = ['ALL', 'USERS', 'AUDIO', 'TAGS', 'LOCATION'];
const SearchResultScreen = () => {
  const [tabView, setTabView] = React.useState(TabView[1]);

  return (
    <MainLayout>
      {/* search */}
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 30,
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 30,
          backgroundColor: 'rgba(0,0,0,0.05)',
          paddingHorizontal: 15,
        }}>
        <AntDesign name="search1" size={20} color={'rgba(0,0,0,0.3)'} />
        <TextInput
          style={{
            height: 50,
            paddingHorizontal: 10,
            width: '90%',
            color: COLORS.black,
          }}
          placeholder="Search"
          value={'angelia'}
        />
      </View>
      {/* search */}

      {/* {tabView === TabView[0] && <DefaultList />} */}
      {tabView === TabView[1] && <SearchList />}
    </MainLayout>
  );
};

export default SearchResultScreen;

import {View, Text} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DefaultList from './components/DefaultList';
import SearchList from './components/SearchList';
import {useNavigation} from '@react-navigation/native';
import SearchBox from '../../components/SearchBox';

const TabView = ['DEFAULT', 'SEARCH_RESULT'];
const SearchScreen = () => {
  const [tabView, setTabView] = React.useState(TabView[0]);
  const navigation = useNavigation();
  return (
    <MainLayout>
      {/* search */}
      <SearchBox />
      {/* search */}

      {tabView === TabView[0] && <DefaultList />}
      {tabView === TabView[1] && <SearchList />}
    </MainLayout>
  );
};

export default SearchScreen;

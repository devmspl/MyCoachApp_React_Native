import {View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [isSave, setIsSave] = React.useState(false);

  return (
    <MainLayout>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
        }}></View>
    </MainLayout>
  );
};

export default HomeScreen;

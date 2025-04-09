import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import React, {useEffect, useState} from 'react';
import {feedList} from '../../utils/dummy';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {COLORS} from '../../styles';
import {RegularText, SmallText} from '../../components/MyText';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainLayout from '../../components/MainLayout';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {api_updateProfile} from '../../api/user';
import {setAuth, updateUser} from '../../redux/feature/auth/authSlice';
import {api_getPostById, api_getUserPosts} from '../../api/post';
import {ProfileStackStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const PostViewScreen = () => {
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [isFav, setIsFav] = React.useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const params = useRoute<any>().params;
  console.log({params});

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackStackParams>>();

  const handleShowPost = async () => {
    setLoading(true);
    try {
      const res = await api_getPostById(params.postId);
      console.log(res, 'ShowPostssssss');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleShowPost();
  }, []);
  return (
    <View style={{paddingTop: 38, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,0.05)',
        }}>
        <AntDesign
          style={{marginLeft: 5}}
          name="left"
          size={25}
          color={'black'}
        />
        <View
          style={{
            width: '85%',
            alignItems: 'center',
          }}>
          <SmallText style={{color: COLORS.grey, fontSize: 11}} bold>
            {user.user_name.toUpperCase()}
          </SmallText>
          <RegularText bold style={{}}>
            Posts
          </RegularText>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 45,
              height: 45,
              borderRadius: 45,
            }}></View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OthersProfile')}
            style={{
              flex: 1,
            }}>
            <RegularText bold>{user.user_name}</RegularText>
            <SmallText>{user.bio}</SmallText>
          </TouchableOpacity>
          <View
            style={{
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Entypo
              // onPress={() => {
              //   SheetManager.show('StoryOptionsSheet');
              // }}
              style={{
                marginRight: 5,
              }}
              color={COLORS.black}
              name="dots-three-horizontal"
              size={18}
            />
          </View>
        </View>
        <View
          style={{height: 430, width: '100%', backgroundColor: 'gray'}}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              onPress={() => {
                setIsFav(!isFav);
              }}
              name={isFav ? 'heart' : 'hearto'}
              color={isFav ? 'red' : '#414141'}
              size={25}
            />
            <AntDesign
              style={{marginHorizontal: 15}}
              name={'message1'}
              color={'#414141'}
              size={25}
            />

            <Feather style={{}} name={'send'} color={'#414141'} size={25} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <FontAwesome color={'#414141'} name="bookmark-o" size={24} />
          </View>
        </View>
        <RegularText style={{marginLeft: 15, marginTop: 5}}>
          {isFav ? '21 likes' : '20 likes'}
        </RegularText>
        <Text
          style={{
            fontSize: 13,
            marginVertical: 5,
            color: COLORS.black,
            marginHorizontal: 10,
            marginLeft: 15,
          }}>
          <RegularText style={{}} bold>
            {user.user_name}
          </RegularText>{' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Perspiciatis, labore.
        </Text>
        <TouchableOpacity style={{marginLeft: 15}}>
          <RegularText style={{fontSize: 14}}>View comments</RegularText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PostViewScreen;

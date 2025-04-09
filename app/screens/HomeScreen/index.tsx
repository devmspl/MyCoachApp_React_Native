import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {chatUserList, feedList} from '../../utils/dummy';
import MainLayout from '../../components/MainLayout';
import {COLORS} from '../../styles';
import {RegularText, SmallText} from '../../components/MyText';
//@ts-ignore
import {StoryContainer} from 'react-native-stories-view';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {api_getAllUser} from '../../api/allusers';
import {api_getAllPosts} from '../../api/post';
import {SheetManager} from 'react-native-actions-sheet';

const data2 = {
  des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, labore.',
  tags: '#india #comment #foryou #popularpage #art #insta',
};
const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [users, setUsers] = useState([]);
  const [isFav, setIsFav] = React.useState(false);
  const [isSave, setIsSave] = React.useState(false);

  const handleGetAllUser = async () => {
    try {
      const res = await api_getAllPosts();
      console.log(res, 'All posts.......');
      setUsers(res.data);
      console.log(users, 'Postsssssss');
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
    }
  };

  useEffect(() => {
    handleGetAllUser();
  }, []);

  return (
    <MainLayout>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            source={require('../../../assets/icon/logo.png')}
            style={{
              resizeMode: 'contain',
              width: 30,
              height: 30,
            }}
          />
          <RegularText bold>ESPOIR</RegularText>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
            <Image
              source={require('../../../assets/icon/heart.png')}
              style={{
                resizeMode: 'contain',
                width: 28,
                height: 28,
                opacity: 0.8,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <AntDesign color={COLORS.grey} name="message1" size={22} />
          </TouchableOpacity>
        </View>
      </View>
      {/* header */}

      <FlatList
        data={users}
        ListHeaderComponent={() => {
          return (
            <FlatList
              horizontal
              data={[1]}
              contentContainerStyle={{
                margin: 10,
                height: 110,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('StoryScreen')}
                      style={{
                        backgroundColor: 'grey',
                        width: 75,
                        height: 75,
                        margin: 5,
                        borderRadius: 120,
                        // borderWidth: 3,
                        // borderColor: COLORS.primary,
                      }}>
                      {index === 0 && (
                        <View
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 8,
                            position: 'absolute',
                            backgroundColor: COLORS.white,
                            bottom: 0,
                            right: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 6,
                              position: 'absolute',
                              backgroundColor: COLORS.primary,
                              bottom: 0,
                              right: 0,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Entypo
                              // onPress={() => navigation.navigate('StoryScreen')}
                              size={17}
                              color={'#fff'}
                              name={'plus'}
                            />
                          </View>
                        </View>
                      )}
                    </TouchableOpacity>
                    <SmallText style={{textAlign: 'center'}}>
                      {index === 0 ? 'You' : 'Andrew'}
                    </SmallText>
                  </View>
                );
              }}
            />
          );
        }}
        renderItem={({item}: {item: any}) => {
          return (
            <View
              style={{
                flex: 1,
                marginHorizontal: 15,
                marginBottom: 20,
                // backgroundColor: 'red',
              }}>
              {/* top */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                  <View
                    style={{
                      backgroundColor: 'grey',
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                    }}>
                    <Image
                      source={{uri: item?.userId[0]?.image}}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 35,
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('OtherUserProfile', {
                          otherUserId: item?.userId[0]._id,
                        })
                      }>
                      <RegularText>{item?.userId[0]?.user_name}</RegularText>
                    </TouchableOpacity>
                    {/* <SmallText>Marketing Coordinator</SmallText> */}
                  </View>
                </View>
                <View>
                  <Ionicons
                    onPress={() => {
                      // SheetManager.show('OthersProfileOptionSheet');
                      SheetManager.show('PostOptionSheet');
                    }}
                    color={COLORS.black}
                    name="ios-ellipsis-horizontal-circle"
                    size={30}
                  />
                </View>
              </View>

              {/* image */}
              <View
                style={{
                  backgroundColor: 'white',
                  // flex: 1,
                  borderRadius: 35,
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 350,
                }}>
                <Image
                  source={{uri: item?.files[0]?.key}}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 35,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              {/* bottom */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <AntDesign
                      style={{marginLeft: 10}}
                      name={isFav ? 'heart' : 'hearto'}
                      color={isFav ? 'red' : COLORS.black}
                      size={25}
                      onPress={() => {
                        setIsFav(!isFav);
                      }}
                    />

                    <SmallText>{isFav ? '1 likes' : '0 likes'}</SmallText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                      marginLeft: 10,
                    }}>
                    <AntDesign
                      onPress={() => {
                        SheetManager.show('CommentSheet');
                      }}
                      color={'#414141'}
                      name="message1"
                      size={22}
                    />
                    <SmallText>{'26,376'}</SmallText>
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Feather
                      onPress={() => {
                        SheetManager.show('StoryShareSheet');
                      }}
                      color={'#414141'}
                      name="send"
                      size={24}
                    />
                  </View>
                </View>
                <View>
                  <FontAwesome
                    name={isSave ? 'bookmark' : 'bookmark-o'}
                    color={isSave ? 'COLORS.black' : COLORS.black}
                    size={25}
                    onPress={() => {
                      setIsSave(!isSave);
                    }}
                  />
                </View>
              </View>

              <Text
                style={{
                  fontSize: 13,
                  marginVertical: 5,
                  color: COLORS.black,
                }}>
                <RegularText bold>{item?.userId[0]?.user_name} </RegularText>
                {item?.message}
              </Text>

              <RegularText
                style={{
                  fontSize: 13,
                  marginBottom: 5,
                  color: COLORS.blue,
                }}>
                {data2.tags}
              </RegularText>
            </View>
          );
        }}
      />
    </MainLayout>
  );
};

export default HomeScreen;

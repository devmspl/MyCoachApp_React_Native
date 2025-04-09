import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
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
import {useNavigation} from '@react-navigation/native';
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
import {api_getUserPosts} from '../../api/post';
import {ProfileStackStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
const ProfileScreen = () => {
  const isFocused = useIsFocused();
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackStackParams>>();
  const [profilePhotoUri, setProfilePhotoUri] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const openCamera = async () => {
    await launchCamera(
      {
        mediaType: 'photo',
      },
      (res: any) => {
        console.log(res);
        setProfilePhotoUri(res.assets[0].uri);
      },
    );
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (res: any) => {
        setProfilePhotoUri(res.assets[0].uri);
      },
    );
    closeSheet();
  };

  const closeSheet = async () => {
    if (profilePhotoUri !== null) {
      handleUploadProfile();
    }
    SheetManager.hide(SHEETS.CameraAndGalleryOption);
  };

  const handleUploadProfile = async () => {
    try {
      const payload = profilePhotoUri;
      const res = await api_updateProfile(user.id, accessToken, payload);
      console.log({res}, 'aaaa');
      dispatch(updateUser(res.data));
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    }
  };

  const handleGetAllPosts = async () => {
    try {
      setLoading(true);
      setPosts([]);
      const res = await api_getUserPosts(user.id);
      console.log(res, 'api_getUserPosts');
      setPosts(res.data);
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, [isFocused]);

  const listHeaderComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginVertical: 10,
            marginBottom: 0,
          }}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <View style={{width: 30, height: 30, backgroundColor: 'white'}}>
              <Image
                source={require('../../../assets/icon/logo.png')}
                style={{
                  resizeMode: 'contain',
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}
              onPress={() => {
                SheetManager.show('ProfileOptionSheet');
              }}>
              <RegularText style={{fontSize: 20}} bold>
                {user?.user_name}
              </RegularText>
              <Fontisto name="angle-down" size={15} color={COLORS.grey} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Ionicons name="add-circle-outline" size={20} color={COLORS.grey} />
            <Feather
              name="edit-3"
              onPress={() => navigation.navigate('EditProfile')}
              size={20}
              color={COLORS.grey}
            />
            <AntDesign
              name="message1"
              size={20}
              color={COLORS.grey}
              onPress={() => {
                SheetManager.show('ProfileOptionSheet');
              }}
            />
          </View>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              backgroundColor: 'grey',
              marginTop: 20,
            }}>
            {profilePhotoUri ? (
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
                source={{uri: profilePhotoUri}}
              />
            ) : (
              <Image
                style={{
                  resizeMode: 'contain',
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
                source={
                  user?.image
                    ? {uri: user?.image}
                    : require('../../../assets/images/userImg.png')
                }
              />
            )}

            <TouchableOpacity
              onPress={() => {
                SheetManager.show(SHEETS.CameraAndGalleryOption, {
                  payload: {openCamera, openGallery, closeSheet},
                });
              }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                backgroundColor: COLORS.primary,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 5,
                right: 5,
              }}>
              <MaterialIcons name="edit" size={15} color={'white'} />
            </TouchableOpacity>
          </View>
          <RegularText
            style={{
              fontSize: 18,
              marginTop: 3,
            }}
            bold>
            {user?.fullName}
          </RegularText>
          <RegularText
            style={{
              marginTop: 3,
            }}>
            {user?.bio}
          </RegularText>
          <SmallText
            style={{
              fontSize: 13,
              opacity: 0.7,
              width: 300,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </SmallText>
          <SmallText
            style={{
              fontSize: 13,
              textAlign: 'center',
              marginTop: 10,
              color: 'blue',
            }}>
            {user?.website}
          </SmallText>
        </View>

        <View
          style={{
            marginVertical: 35,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={{justifyContent: 'center', alignContent: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
              }}>
              356
            </Text>
            <Text
              style={{textAlign: 'center', color: COLORS.black, fontSize: 12}}>
              Post
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Follower')}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
              }}>
              46,379
            </Text>
            <Text
              style={{textAlign: 'center', color: COLORS.black, fontSize: 12}}>
              Followers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Following')}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              318
            </Text>
            <Text
              style={{textAlign: 'center', color: COLORS.black, fontSize: 12}}>
              Following
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          contentContainerStyle={{
            margin: 10,
            height: 150,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{}}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    margin: 5,
                    borderRadius: 120,
                    borderWidth: index % 2 === 0 ? 0 : 3,
                    borderColor: COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: index === 0 ? COLORS.primary : 'grey',
                  }}>
                  {index === 0 && (
                    <View
                      style={{
                        width: 15,
                        height: 20,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                      }}>
                      <Entypo size={15} color={COLORS.primary} name={'plus'} />
                    </View>
                  )}
                </View>
                <SmallText style={{textAlign: 'center'}}>
                  {index === 0 ? 'Add' : 'Hangout'}
                </SmallText>
              </View>
            );
          }}
        />

        {/* TABS */}
        <View style={{flexDirection: 'row', padding: 2}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              borderBottomWidth: 3,
              flex: 1,
              borderColor: COLORS.primary,
              justifyContent: 'center',
            }}>
            <Entypo name="box" size={20} color={COLORS.primary} />
            <RegularText style={{color: COLORS.primary}}>Feeds</RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              borderBottomWidth: 2,
              flex: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}>
            <FontAwesome name="video-camera" size={20} color={COLORS.grey} />
            <RegularText style={{color: COLORS.primary}}>Shorts</RegularText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              borderBottomWidth: 2,
              flex: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              justifyContent: 'center',
            }}>
            <Ionicons name="people" size={20} color={COLORS.grey} />
            <RegularText style={{color: COLORS.primary}}>Tags</RegularText>
          </View>
        </View>
      </>
    );
  };
  return (
    <MainLayout>
      <FlatList
        data={posts}
        ListEmptyComponent={() => {
          if (loading) {
            return (
              <View>
                <ActivityIndicator />
              </View>
            );
          } else {
            return (
              <View>
                <RegularText style={{textAlign: 'center'}}>
                  No Posts..
                </RegularText>
              </View>
            );
          }
        }}
        ListHeaderComponent={listHeaderComponent}
        numColumns={3}
        renderItem={({item}: {item: any}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                //@ts-ignore
                navigation.navigate('PostView', {postId: item._id})
              }
              style={{
                backgroundColor: 'transparent',
                height: 120,
                margin: 2,
                flex: 1 / 3,
              }}>
              <Image
                source={{uri: item.files[0].key}}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </MainLayout>
  );
};

export default ProfileScreen;

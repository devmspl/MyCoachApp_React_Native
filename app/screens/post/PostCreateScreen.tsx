import React, {useState} from 'react';
import {View, TouchableOpacity, Image, PermissionsAndroid} from 'react-native';
// ---->  Libray
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
// ---->  Components
import MainLayout from '../../components/MainLayout';
import {RegularText} from '../../components/MyText';
import {COLORS} from '../../styles';
// ---->  Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostCreateScreen = () => {
  const [selectImages, setSelectImages] = useState([]);
  const navigation = useNavigation();
  const handleGalleryOpen = async () => {
    try {
      await launchImageLibrary(
        {
          mediaType: 'photo',
          selectionLimit: 5,
        },
        (res: any) => {
          console.log(res.assets);
          setSelectImages(res.assets);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpenCamera = async () => {
    try {
      await launchCamera(
        {
          mediaType: 'photo',
        },
        (res: any) => {
          console.log(res);
          setSelectImages(res.assets);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        handleOpenCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <MainLayout>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          marginTop: 0,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <AntDesign color={COLORS.black} size={24} name="closecircleo" />
        </TouchableOpacity>
        <RegularText style={{fontSize: 20, marginBottom: 2}} bold>
          New Post
        </RegularText>

        <TouchableOpacity
          disabled={!selectImages?.length}
          onPress={() => {
            //@ts-ignore
            navigation.navigate('PostSubmit', {selectImages});
          }}
          style={{
            width: 40,
            height: 40,
            marginLeft: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign color={COLORS.primary} size={24} name="arrowright" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'grey',
          width: '90%',
          height: 320,
          borderRadius: 25,
        }}>
        {selectImages?.length ? (
          <Image
            source={selectImages[selectImages?.length - 1]}
            style={{
              width: '100%',
              height: 320,
              borderRadius: 25,
              resizeMode: 'cover',
            }}
          />
        ) : null}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RegularText>Gallery</RegularText>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign color={COLORS.black} size={12} name="down" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={handleGalleryOpen}
            style={{
              width: 40,
              height: 40,
              marginLeft: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons
              color={COLORS.primary}
              size={24}
              name="collections"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={requestCameraPermission}
            style={{
              width: 40,
              height: 40,
              marginLeft: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign color={COLORS.black} size={24} name="camera" />
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default PostCreateScreen;

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
// ---->  Libray
import {useNavigation, useRoute} from '@react-navigation/native';
// ---->  Components
import MainLayout from '../../components/MainLayout';
import {RegularText} from '../../components/MyText';
import {COLORS} from '../../styles';
// ---->  Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/feature/auth/authSlice';
import {api_postCreate} from '../../api/post';

const PostSubmitScreen = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const auth = useSelector(authSelector);
  const selectImages = useRoute().params?.selectImages;
  console.log(auth);
  const submit = async () => {
    try {
      setLoading(true);
      const res = await api_postCreate(auth.id, selectImages[0].uri, message);
      if (res?.isSuccess) {
        Alert.alert('Alert', 'Post Created Successfully!');
        navigation.navigate('Profile');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
          <AntDesign color={COLORS.black} size={24} name="arrowleft" />
        </TouchableOpacity>
        <RegularText style={{fontSize: 20, marginBottom: 2}} bold>
          New Post
        </RegularText>

        <TouchableOpacity
          onPress={() => {
            submit();
          }}
          style={{
            width: 40,
            height: 40,
            marginLeft: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <Ionicons color={COLORS.primary} size={24} name="send" />
          )}
        </TouchableOpacity>
      </View>

      {/* form */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: 'grey',
            width: 60,
            height: 60,
            borderRadius: 60,
          }}>
          {auth?.image ? (
            <Image
              source={{uri: auth?.image}}
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                resizeMode: 'cover',
              }}
            />
          ) : null}
        </View>
        <TextInput
          value={message}
          onChangeText={setMessage}
          style={{flex: 1, margin: 5, color: COLORS.black}}
          multiline
          placeholder="write a caption"
          placeholderTextColor={COLORS.grey}
        />
        <View
          style={{
            backgroundColor: 'grey',
            width: 55,
            height: 55,
            borderRadius: 10,
          }}>
          {selectImages?.length ? (
            <Image
              source={selectImages[selectImages?.length - 1]}
              style={{
                width: 55,
                height: 55,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
          ) : null}
        </View>
      </View>

      {/* extra */}
      {/* <Ionicons color={COLORS.primary} size={24} name="send" /> */}
    </MainLayout>
  );
};

export default PostSubmitScreen;

import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MainLayout from '../../components/MainLayout';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {RegularText} from '../../components/MyText';
import {COLORS} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import DatePicker from 'react-native-date-picker';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import moment from 'moment';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PhoneInput from 'react-native-phone-number-input';
import {useDispatch, useSelector} from 'react-redux';
import {api_update} from '../../api/user';
import {updateUser} from '../../redux/feature/auth/authSlice';

const EditProfileScreen = () => {
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [dob, setDob] = useState(new Date());
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const dispatch = useDispatch();
  // const [dob, setDob] = useState(user?.dob || '');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [user_name, setUser_name] = useState(user?.user_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [website, setWebsite] = useState(user?.website || '');
  const [sex, setSex] = useState(user?.sex || 'Male');
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleProfileUpdate = async () => {
    setLoading(true);
    // image
    // if (profilePhotoUri !== null) {
    //   handleUploadProfile();
    // }
    try {
      const payload = {
        fullName,
        user_name,
        email,
        bio,
        phone,
        dob,
        website,
        sex,
      };
      const res = await api_update(user.id, accessToken, payload);
      console.log('ressssssssss', res);

      dispatch(updateUser(res.data));
      Alert.alert('Alert', 'Profile Updated Successfully!');
      navigation.goBack();
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout title="Edit Profile" onBack={navigation.goBack}>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              paddingHorizontal: 10,
              width: '100%',
              color: COLORS.black,
            }}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholderTextColor={COLORS.grey}
          />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              paddingHorizontal: 10,
              width: '100%',
              color: COLORS.black,
            }}
            placeholder="Username"
            value={user_name}
            onChangeText={setUser_name}
            placeholderTextColor={COLORS.grey}
          />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              paddingHorizontal: 10,
              width: '100%',
              color: COLORS.black,
            }}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            placeholderTextColor={COLORS.grey}
          />
        </View>

        <TouchableOpacity
          onPress={() => setIsDatePickerOpen(true)}
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
            height: 55,
            justifyContent: 'space-between',
          }}>
          <DatePicker
            modal
            mode="date"
            open={isDatePickerOpen}
            date={dob}
            onConfirm={dob => {
              setIsDatePickerOpen(false);
              setDob(dob);
            }}
            onCancel={() => {
              setIsDatePickerOpen(false);
            }}
          />
          <Text style={{marginLeft: 10, color: 'black'}}>
            {dob ? dob.toISOString().slice(0, 10) : 'Date of Birth'}
          </Text>
          <Fontisto name={'date'} size={18} color={'lightgray'} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <TextInput
            style={{
              height: 55,
              paddingHorizontal: 10,
              width: '90%',
              color: 'black',
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            editable={false}
            placeholderTextColor={COLORS.grey}
          />
          <AntDesign name={'mail'} size={20} color={'lightgray'} />
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
            height: 55,
          }}>
          <PhoneInput
            disabled={true}
            containerStyle={{
              height: 55,
              width: '100%',
              backgroundColor: 'transparent',
            }}
            textInputStyle={{height: 55, backgroundColor: 'transparent'}}
            ref={phoneInput}
            defaultValue={phone}
            defaultCode="IN"
            layout="first"
            onChangeText={text => {
              setPhone(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            SheetManager.show(SHEETS.GenderSelectSheet, {
              payload: {
                onSelect: (v: string) => setSex(v),
              },
            })
          }
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
            justifyContent: 'space-between',
            height: 55,
          }}>
          <RegularText style={{marginLeft: 10}}>{sex}</RegularText>
          <AntDesign name={'caretdown'} size={15} color={COLORS.black} />
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.02)',
            paddingHorizontal: 10,
          }}>
          <TextInput
            style={{
              height: 55,
              paddingHorizontal: 10,
              width: '100%',
              color: COLORS.black,
            }}
            placeholder="Website"
            value={website}
            placeholderTextColor={COLORS.grey}
            onChangeText={setWebsite}
          />
        </View>

        <RegularText
          style={{color: COLORS.blue, alignSelf: 'center', marginTop: 20}}>
          Switch to Professional Account
        </RegularText>
        <View style={{width: '100%', marginVertical: 20}}>
          <PrimaryBtn
            loading={loading}
            text="Update"
            onPress={handleProfileUpdate}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default EditProfileScreen;

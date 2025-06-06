import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MyText} from '../../../components/MyText';
import Input from '../../../components/Input';
import PrimaryBtn from '../../../components/PrimaryBtn';
import Slider from 'rn-range-slider';
import Thumb from '../../../components/Slider/Thumb';
import Rail from '../../../components/Slider/Rail';
import RailSelected from '../../../components/Slider/RailSelected';
import Label from '../../../components/Slider/Label';
import Notch from '../../../components/Slider/Notch';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../../redux/feature/auth/authSlice';
import {api_onbaordingOne} from '../../../api/onboardings';
import SelectInput from '../../../components/SelectInput';

const OnboardingOne = () => {
  type RootStackParams = {
    // ... other routes
    OnboardingTwo: {token: any}; // or 'any' if type is not known
    // ... other routes
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [low, setLow] = useState(400);
  const [high, setHigh] = useState(1500);
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(2000);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [selectedEducation, setSelectedEducation] = useState('');
  const token = useRoute<any>().params.token;
  console.log(token, 'token from route');

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value: any) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback(({low, high}: any) => {
    setLow(low);
    setHigh(high);
  }, []);

  // console.log(low, high, min, max, 'slider values');

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const params = useRoute<any>().params;

  const educationOptions = [
    {label: 'No Formal Education', value: 'No Formal Education'},
    {label: 'Primary School', value: 'Primary School'},
    {label: 'Middle School', value: 'Middle School'},
    {
      label: 'High School / Secondary School',
      value: 'High School / Secondary School',
    },
    {
      label: 'Diploma / Vocational Training',
      value: 'Diploma / Vocational Training',
    },
    {
      label: 'Higher Secondary / Pre-University (10+2)',
      value: 'Higher Secondary / Pre-University (10+2)',
    },
    {label: 'Bachelor’s Degree', value: 'Bachelor’s Degree'},
    {label: 'Master’s Degree', value: 'Master’s Degree'},
    {label: 'Doctorate / Ph.D.', value: 'Doctorate / Ph.D.'},
    {label: 'Other', value: 'Other'},
  ];

  // const token = params.token;
  // console.log(params, 'params');

  // console.log(firstName, lastName, jobTitle, age, educationLevel, 'state values');

  const handlePersonalDetails = async () => {
    setLoading(true);
    const payload = {
      first_name: firstName,
      last_name: lastName,
      job_title: jobTitle,
      age: age,
      salary_range: {
        min: min,
        max: max,
      },
      education_level: educationLevel || selectedEducation,
    };
    console.log(payload, JSON.stringify(payload), 'payload');
    try {
      const res = await api_onbaordingOne(payload, token);
      console.log(res, 'api_onbaordingOne res');
      Alert.alert(
        'Success',
        res.message || 'PERSONAL DETAILS UPDATED SUCCESSFULLY',
      );
      dispatch(updateUser(res.data));
      navigation.navigate('OnboardingTwo', {token: token});
      // navigation.navigate('OnboardingTwo', {token: token});
    } catch (res: any) {
      Alert.alert('Alert', res.message);
      console.log(res, 'error during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20, flex: 1}}>
        <View style={{flex: 1}}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons name="arrow-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.slideView}>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
            <AntDesign name="arrowleft" size={1} color="white" />
          </View>

          {/* {CONTENT} */}
          <View style={{marginTop: 20}}>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold}>
              Welcome to My Financial Coach!
            </MyText>

            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              We will recommend a tailored budget for you! Lets gather some info
              that will get us started.
            </MyText>

            <Input
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <Input
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
            <Input
              value={jobTitle}
              onChangeText={setJobTitle}
              placeholder="Your Job Title"
            />
            <Input value={age} onChangeText={setAge} placeholder="Your Age" />

            <MyText bold={FONT_WEIGHT.bold} style={{marginTop: 15}}>
              Salary Range
            </MyText>

            <Slider
              style={{marginTop: 50}}
              low={low}
              high={high}
              min={min}
              max={max}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View style={{alignItems: 'center', gap: 10}}>
                <MyText size={FONT_SIZE.sm}>Minimun</MyText>
                <MyText bold={FONT_WEIGHT.semibold}>${min}</MyText>
              </View>
              <View style={{alignItems: 'center', gap: 10}}>
                <MyText size={FONT_SIZE.sm}>Maximun</MyText>
                <MyText bold={FONT_WEIGHT.semibold}>${max}</MyText>
              </View>
            </View>

            {/* <Input placeholder="Your Education Level" /> */}

            <SelectInput
              label="Select your education level"
              data={educationOptions}
              value={selectedEducation}
              onSelect={item => {
                setSelectedEducation(item.value);
                setEducationLevel(item.value); // sync input with dropdown
              }}
              placeholder="Pick your education level"
            />
          </View>
          <PrimaryBtn
            onPress={handlePersonalDetails}
            // onPress={() => navigation.navigate('OnboardingTwo')}
            containerStyle={{marginTop: 120}}
            text="Next"
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingOne;

const styles = StyleSheet.create({
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginVertical: 20,
  },
  btn: {
    borderRadius: 10,
    width: 40,
    height: 8,
    backgroundColor: COLORS.grey,
  },
});

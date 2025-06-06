import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
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
import PrimaryBtn from '../../../components/PrimaryBtn';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Slider from '@react-native-assets/slider';
import {api_onbaordingTwo} from '../../../api/onboardings';
import {useDispatch, useSelector} from 'react-redux';
import {tokenSelector, updateUser} from '../../../redux/feature/auth/authSlice';

const options = [
  {id: 1, name: 'Married', value: 'married'},
  {id: 2, name: 'Single', value: 'single'},
  {id: 3, name: 'Dating/Engaged', value: 'dating'},
  {id: 4, name: 'Married-no kids', value: 'married-no-kids'},
  {id: 5, name: 'Married-yoiung kids', value: 'married-yoiung-kids'},
];
const Item = ({
  name,
  onSelect,
  isSelected,
}: {
  name: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <View>
      <View style={styles.row}>
        <MyText style={{flex: 1}} color={'gray'}>
          {name}
        </MyText>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Fontisto
            onPress={onSelect}
            name={isSelected ? 'radio-btn-active' : 'radio-btn-passive'}
            size={20}
            color={isSelected ? COLORS.green : COLORS.grey}
          />
        </View>
      </View>
    </View>
  );
};

// type RootStackParams = {
//   OnboardingTwo: {token: any};
//   OnboardingThree: {token: any};
// };

const OnboardingTwo = () => {
  type RootStackParams = {
    OnboardingThree: {token: any};
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedId, setSelectedId] = React.useState<null | string>(1);
  const [numberOfKids, setNumberOfKids] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [selectedStatusName, setSelectedStatusName] = useState<string | null>(
    options[0].name,
  );
  const dispatch = useDispatch();
  // const token  = useSelector(tokenSelector);
  // console.log('token from selector ', token);

  const token = useRoute<any>().params.token;
  //  console.log('token from route params ', token);

  const handleRelationShipStatus = async () => {
    setisLoading(true);
    const payload = {
      status: selectedId,
      number_of_kids: numberOfKids,
    };
    console.log('payload', payload);
    console.log('Payload JSON:', JSON.stringify(payload));

    try {
      const res = await api_onbaordingTwo(payload, token);
      dispatch(updateUser(res?.data));
      Alert.alert(
        'Success',
        res.message || 'RELATIONSHIP STATUS UPDATED SUCCESSFULLY',
      );
      navigation.navigate('OnboardingThree', {token: token});
    } catch (error: any) {
      console.error('Error handling relationship status:', error);
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
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
            <AntDesign name="arrowleft" size={1} color="white" />
          </View>

          {/* {CONTENT} */}
          <View style={{marginTop: 20}}>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.extrabold}>
              What is Your Relationship Status?
            </MyText>

            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              We will recommend a tailored budget for you! Lets gather some info
              that will get us started.
            </MyText>

            {options.map(i => (
              <Item
                key={i.id}
                onSelect={() => {
                  setSelectedId(i.value);
                  setSelectedStatusName(i.name);
                }}
                name={i.name || ''}
                isSelected={i.value === selectedId}
              />
            ))}
          </View>
          <View>
            <MyText bold={FONT_WEIGHT.semibold}>Number of Kids</MyText>
            <View style={{}}></View>
            <Slider
              value={numberOfKids}
              onValueChange={setNumberOfKids}
              minimumValue={0}
              maximumValue={5}
              step={1}
              thumbSize={24}
              trackHeight={13}
              minimumTrackTintColor="#4CAF50"
              maximumTrackTintColor="#E0E0E0"
              thumbTintColor="#FFFFFF"
            />
            <MyText>{numberOfKids} kids</MyText>
          </View>
          <PrimaryBtn
            onPress={handleRelationShipStatus}
            containerStyle={{marginVertical: 20, marginTop: 100}}
            text="Confirm"
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingTwo;

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  slider: {
    width: '80%',
    height: 40,
  },
  floatingLabel: {
    position: 'absolute',
    top: -35,
    transform: [{translateX: -25}],
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 50,
  },
});

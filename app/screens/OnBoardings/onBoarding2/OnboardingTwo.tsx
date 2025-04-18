import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {MyText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Slider from '@react-native-assets/slider';

const options = [
  {id: 1, name: 'Married'},
  {id: 2, name: 'Single'},
  {id: 3, name: 'Dating/Engaged'},
  {id: 4, name: 'Married-no kids'},
  {id: 5, name: 'Married-yoiung kids'},
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

const OnboardingTwo = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedId, setSelectedId] = React.useState<null | number>(1);

  const [numberOfKids, setNumberOfKids] = useState(1);

  const onBack = () => {
    navigation.navigate('OnboardingOne');
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
              marginHorizontal: 20,
            }}>
            <AntDesign
              onPress={onBack}
              name="arrowleft"
              size={24}
              color="black"
            />
            <View style={styles.slideView}>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
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
                onSelect={() => setSelectedId(i.id)}
                name={i.name}
                isSelected={i.id === selectedId}
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
            onPress={() => navigation.navigate('OnboardingThree')}
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

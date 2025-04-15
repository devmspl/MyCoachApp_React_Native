import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {MyText} from '../../components/MyText';
import Input from '../../components/Input';
import PrimaryBtn from '../../components/PrimaryBtn';
import Input2 from '../../components/Input2';

const OnboardingThree = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
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
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={24}
              color="black"
            />
            <View style={styles.slideView}>
              <View
                style={[styles.btn, {backgroundColor: COLORS.black}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.black}]}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
            <AntDesign name="arrowleft" size={1} color="white" />
          </View>

          {/* {CONTENT} */}
          <View style={{marginTop: 20}}>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.extrabold}>
              A Few More Questions Before
            </MyText>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.extrabold}>
              Quiz!
            </MyText>

            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              This information helps us provide relevant insights and help us
              recommend more accurately.
            </MyText>

            <Input2 label="Do you have Debts?" placeholder="Pick an answer" />
            <Input2
              label="Do you have Insurance?"
              placeholder="Pick an answer"
            />
            <Input2
              label="have you Budgeted before?"
              placeholder="Pick an answer"
            />
            <Input2
              label="Which budget method do you prefer?"
              placeholder="Pick an answer"
            />
          </View>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('OnboardingFour')}
          containerStyle={{marginBottom: 20}}
          text="Move To Quiz"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingThree;

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

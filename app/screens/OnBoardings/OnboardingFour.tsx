import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import Input2 from '../../components/Input2';

const OnboardingFour = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20,}}>
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
              <View
                style={[styles.btn, {backgroundColor: COLORS.black}]}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
            <AntDesign name="arrowleft" size={1} color="white" />
          </View>

          {/* {CONTENT} */}
          <View style={{marginTop: 20}}>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold}>
              Take this quick 6-question quiz to discover your money personality.
            </MyText>

            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              This information helps us provide relevant insights and help us
              recommend more accurately.
            </MyText>

            <Input2 label="1. You just got an unexpected $500. What do you do?" placeholder="Pick an answer" />
            <Input2
              label="2. How do you feel when you check your bank account?"
              placeholder="Pick an answer"
            />
            <Input2
              label="3. When shopping online, do you…?"
              placeholder="Pick an answer"
            />
            <Input2
              label="4. If you had to describe your budgeting style, which sounds most like you?"
              placeholder="Pick an answer"
            />
            <Input2
              label="4. If you had to describe your budgeting style, which sounds most like you?"
              placeholder="Pick an answer"
            />
            <Input2
              label="5. What motivates you more?"
              placeholder="Pick an answer"
            />
            <Input2
              label="6. Which financial philosophy best describes you:"
              placeholder="Pick an answer"
            />
            
          </View>
        <PrimaryBtn onPress={() => navigation.navigate('OnboardingFive')} containerStyle={{marginVertical: 20}} text="Next" />
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingFour;

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

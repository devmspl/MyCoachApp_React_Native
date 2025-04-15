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

const OnboardingFive = () => {
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
              <View
                style={[styles.btn, {backgroundColor: COLORS.black}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.black}]}></View>
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

            <Input placeholder="Bank Name" />
            <Input placeholder="Account Name" />
            <Input placeholder="Account Number" />
            <Input placeholder="IBAN Number" />

            {/* {IMP NOTE} */}
            <View
              style={{
                padding: 15,
                backgroundColor: COLORS.lightBg,
                marginTop: 20,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <AntDesign name="infocirlceo" size={15} color="black" />
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.sm}>
                  Important note:
                </MyText>
              </View>

              <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.sm}>
                  •
                </MyText>
                <MyText size={FONT_SIZE.sm}>
                  Please ensure yiur account name matches the name on the ID
                  card you provided.
                </MyText>
              </View>
              <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
                <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.sm}>
                  •
                </MyText>
                <MyText size={FONT_SIZE.sm}>
                  Please ensure yiur account name matches the name on the ID
                  card you provided.
                </MyText>
              </View>
            </View>
          </View>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('Login')}
          containerStyle={{marginVertical: 20}}
          text="Confirm"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingFive;

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

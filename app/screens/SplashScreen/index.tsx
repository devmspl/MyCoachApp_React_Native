import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { use, useEffect } from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>()

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Login')
  //   }, 3000)
  // })
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.bg, padding: 20}}>
      <View style={{flex: 1}}>
        <View style={styles.logoView}></View>
        <View style={{height: 350, width: '100%', alignSelf: 'center'}}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            source={require('../../../assets/images/SplashImg.png')}
          />
        </View>

        <View style={styles.slideView}>
          <View style={styles.btn}></View>
          <View style={[styles.btn,{backgroundColor:COLORS.black}]}></View>
          <View style={styles.btn}></View>
        </View>

        <MyText
          style={{marginTop: 10}}
          size={FONT_SIZE['2xl']}
          bold={FONT_WEIGHT.semibold}>
          Begin your journey to financial stability
        </MyText>

        <MyText style={{marginTop: 10}} size={FONT_SIZE.sm}>
          Manage your finances, create budget and saving plans, get real time
          analysis onfinances with AI integration.
        </MyText>
      </View>

      <PrimaryBtn  text="Let’s Get Started" onPress={() => navigation.navigate('Login')}/>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logoView: {
    alignSelf: 'center',
    marginVertical: 40,
    backgroundColor: COLORS.grey,
    height: 50,
    width: 180,
    marginBottom: 20,
  },
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginVertical: 20,
  },
  btn: {
    borderRadius: 10,
    width: 35,
    height: 7,
    backgroundColor: COLORS.grey,
  },
});

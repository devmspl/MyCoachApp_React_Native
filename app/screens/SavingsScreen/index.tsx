import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {SavingsStackParams} from '../../navigation/types';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import * as Progress from 'react-native-progress';
import Foundation from 'react-native-vector-icons/Foundation';

const SavingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SavingsStackParams>>();
  const [view, setView] = React.useState(1);
  return (
    <MainLayout onBack={navigation.goBack} title="Savings">
      <View style={{flex: 1, paddingHorizontal: 20}}>
        {/* {BTN} */}
        <View style={styles.viewBtn}>
          <Pressable
            onPress={() => setView(1)}
            style={{
              backgroundColor: view === 1 ? 'white' : COLORS.black,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm} color={view === 1 ? 'black' : 'white'}>
              Goals
            </MyText>
          </Pressable>

          <Pressable
            onPress={() => setView(2)}
            style={{
              backgroundColor: view === 2 ? 'white' : COLORS.black,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm} color={view === 2 ? 'black' : 'white'}>
              Rewards
            </MyText>
          </Pressable>
        </View>

        {/* {} */}
        <MyText size={FONT_SIZE.sm} color={'gray'}>
          IN PROGRESS
        </MyText>

        <View style={styles.goalView}>
          <View>
            
          </View>
          <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.xl}>
            Master of Coin
          </MyText>
          <MyText size={FONT_SIZE.sm} color={'gray'}>
            Have up to $40,000 in saving goals
          </MyText>
          <View>
            <View style={styles.absoluteView}>
              <MyText color={'white'}>$25,000/$45,000</MyText>
              <Foundation name="flag" size={20} color={COLORS.yellow} />
            </View>
            <Progress.Bar
              progress={0.5}
              color={COLORS.yellow}
              width={null}
              unfilledColor={'#FFBE0033'}
              borderColor={'transparent'}
              height={35}
              borderRadius={12}
            />
          </View>
        </View>

        {/* {END} */}
      </View>
    </MainLayout>
  );
};

export default SavingsScreen;

const styles = StyleSheet.create({
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.black,
    borderRadius: 5,
    height: 30,
    width: 180,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  goalView: {
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: COLORS.cream,
    padding: 10,
  },
  absoluteView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    height: 30,
    paddingHorizontal: 10,
    marginTop: 2,
    width: '100%',
  },
});

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BlueLogo from '../../../assets/svg/BlueArrow.svg';
import * as Progress from 'react-native-progress';
import Foundation from 'react-native-vector-icons/Foundation';

const Goals = () => {
  return (
    <View style={{marginHorizontal: 20,}}>
      {/* Balance Box */}
      <View style={styles.balanceView}>
        <MyText size={FONT_SIZE.sm} color={'white'}>
          Total Savings
        </MyText>
        <MyText
          bold={FONT_WEIGHT.bold}
          color={'white'}
          size={FONT_SIZE['1.5xl']}>
          $2,145.98
        </MyText>
        <TouchableOpacity style={styles.filterBtn}>
          <FontAwesome name="filter" size={15} />
          <MyText size={FONT_SIZE.sm}>Filter</MyText>
        </TouchableOpacity>
      </View>

      <MyText size={FONT_SIZE.sm} color={'#71717A'}>
        IN PROGRESS
      </MyText>

      <View style={styles.barView}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <BlueLogo />
          <View>
            <MyText bold={FONT_WEIGHT.semibold}>House Mortage Plan</MyText>
            <MyText color={'gray'}>Next saving:29th January 2026</MyText>
          </View>
        </View>
        <View>
          <View style={styles.absoluteView}>
            <MyText>$25,000/$45,000</MyText>
            <Foundation name="flag" size={20} color={COLORS.black} />
          </View>
          <Progress.Bar
            progress={0.5}
            width={null}
            color={COLORS.yellow}
            unfilledColor={COLORS.lightyellow}
            borderColor={'transparent'}
            height={35}
            borderRadius={12}
          />
        </View>
      </View>

      {/* {} */}
    </View>
  );
};
export default Goals;

const styles = StyleSheet.create({
  balanceView: {
    borderRadius: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 120,
    marginVertical: 15,
  },
  view: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 15,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  insightText: {
    backgroundColor: COLORS.lightgrey,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 3,
    height: 35,
    width: 150,
  },
  filterBtn: {
    backgroundColor: COLORS.yellow,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  barView: {
    gap: 10,
    marginTop: 10,
    backgroundColor: COLORS.bg,
    borderRadius: 10,
    padding: 5,
    paddingBottom: 10,
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

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import PieChart from 'react-native-pie-chart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BlueLogo from '../../../assets/svg/BlueArrow.svg';
import RedLogo from '../../../assets/svg/RedArrow.svg';
import * as Progress from 'react-native-progress';
import Foundation from 'react-native-vector-icons/Foundation'

const SavingGoalCard = () => {
  const series = [
    {value: 1500, color: COLORS.yellow},
    {value: 925, color: COLORS.brown},
  ];

  const widthAndHeight = 140;
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['1.5xl']}>
          Your Saving Goals
        </MyText>
        <TouchableOpacity style={styles.cardDayBtn}>
          <MyText>New Saving</MyText>
          <AntDesign name="plus" size={15} />
        </TouchableOpacity>
      </View>

      {/* {PROGRESS BAR} */}
      <View style={styles.barView}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <BlueLogo />
          <View>
            <MyText bold={FONT_WEIGHT.semibold}>House Mortage Plan</MyText>
            <MyText color={'gray'}>Next saving:29th January 2026</MyText>
          </View>
        </View>
        <View>
          <View
            style={styles.absoluteView}>
            <MyText>$25,000/$45,000</MyText> 
            <Foundation name="flag" size={20} color={COLORS.brown} />
          </View>
          <Progress.Bar
            progress={0.5}
            width={null}
            color={COLORS.yellow}
            unfilledColor={COLORS.cream}
            borderColor={'transparent'}
            height={35}
            borderRadius={12}
          />
        </View>
      </View>
      {/* {} */}
      <View style={styles.barView}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <RedLogo />
          <View>
            <MyText bold={FONT_WEIGHT.semibold}>House Mortage Plan</MyText>
            <MyText color={'gray'}>Next saving:29th January 2026</MyText>
          </View>
        </View>
        <View>
          <View
            style={styles.absoluteView}>
            <MyText>$25,000/$45,000</MyText> 
            <Foundation name="flag" size={20} color={COLORS.brown} />
          </View>
          <Progress.Bar
            progress={0.5}
            width={null}
            color={COLORS.yellow}
            unfilledColor={COLORS.cream}
            borderColor={'transparent'}
            height={35}
            borderRadius={12}
          />
        </View>
      </View>


      {/* {END} */}
    </View>
  );
};

export default SavingGoalCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 35,
    marginHorizontal: 20,
  },
  cardDayBtn: {
    backgroundColor: COLORS.yellow,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 35,
    width: 120,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  barView: {
    gap: 10,
    marginTop: 10,
    backgroundColor: COLORS.bg,
    borderRadius: 10,
    padding: 5,
    paddingBottom: 10,
  },absoluteView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    height: 30,
    paddingHorizontal: 10,
    marginTop: 2,width:'100%'
  }
});

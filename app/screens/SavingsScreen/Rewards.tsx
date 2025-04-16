import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SavingsStackParams} from '../../navigation/types';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import * as Progress from 'react-native-progress';
import Foundation from 'react-native-vector-icons/Foundation';
import {Shadow} from 'react-native-shadow-2';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BadgeIcon from '../../../assets/svg/Badge.svg';

const data = [
  {
    icon: require('../../../assets/images/coin-collector-yellow.png'),
    title: 'Coin Collector',
    bg: '#FFF8E5',
    color: '#997200',
  },
  {
    icon: require('../../../assets/images/coin-collector-blue.png'),
    title: 'Coin Collector',
    bg: '#E6F4FF',
    color: '#015698',
  },
  {
    icon: require('../../../assets/images/coin-collector-red.png'),
    title: 'Coin Collector',
    bg: '#FFE6E5',
    color: '#990200',
  },
];

const Rewards = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SavingsStackParams>>();
  return (
    <View style={{paddingHorizontal: 20}}>
      <MyText size={FONT_SIZE.sm} color={'#71717A'}>
        IN PROGRESS
      </MyText>

      {/* reward section  */}
      <View style={styles.rewardsView}>
        <BadgeIcon />

        <MyText
          bold={FONT_WEIGHT.semibold}
          size={FONT_SIZE.xl}
          style={styles.rewardTitle}>
          Master of Coin
        </MyText>

        <MyText
          size={FONT_SIZE.base}
          color={'#71717A'}
          style={styles.rewardSubTitle}>
          Have up to $40,000 in saving goals
        </MyText>

        <View style={styles.progressView}>
          <View style={styles.absoluteView}>
            <MyText>$25,000/$45,000</MyText>
            <Foundation name="flag" size={18} color={COLORS.black} />
          </View>
          <Progress.Bar
            progress={0.5}
            color={COLORS.yellow}
            width={null}
            unfilledColor={'#FFBE0033'}
            borderColor={'transparent'}
            height={30}
            borderRadius={12}
          />
        </View>
      </View>

      {/* collacted badges  */}
      <View style={styles.collacedBadgesView}>
        <MyText size={FONT_SIZE.sm} color={'gray'}>
          COLLECTED BADGES
        </MyText>

        <FlatList
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 12,
          }}
          numColumns={3}
          data={data}
          renderItem={({item}: any) => {
            return (
              <Pressable style={[styles.badgeCard, {backgroundColor: item.bg}]}>
                <Image source={item.icon} style={styles.badgeIcon} />
                <MyText size={FONT_SIZE.sm} color={item.color}>
                  {item.title}
                </MyText>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Rewards;

const styles = StyleSheet.create({
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    height: 30,
    width: 250,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  goalView: {},
  rewardsView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: 'white',
    padding: 16,
    marginTop: 10,
    gap: 10,
  },
  rewardIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 110,
    marginTop: 10,
  },
  rewardIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  rewardTitle: {
    marginTop: 10,
  },
  rewardSubTitle: {
    marginTop: 10,
  },
  progressView: {
    width: '100%',
    height: 35,
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  absoluteView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    height: 30,
    paddingHorizontal: 10,
    marginTop: 2,
  },
  collacedBadgesView: {
    marginTop: 30,
    flexDirection: 'column',
    gap: 10,
  },
  shadowBox: {
    // width: '100%',
  },
  badgesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 13,
  },
  badgeCard: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 13,
    gap: 10,
    flex: 1 / 3,
    marginHorizontal: 5,
  },
  badgeIcon: {
    width: 60,
    height: 70,
    resizeMode: 'contain',
  },
});

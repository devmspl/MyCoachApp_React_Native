import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Sparkle from '../../../assets/svg/Sparkle.svg';

const Recommendation = () => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.row}>
          <Sparkle />
          <MyText bold={FONT_WEIGHT.bold} color={'white'}>
            New Recommendations
          </MyText>
        </View>
        <MyText color={'white'} style={{marginTop: 10}}>
          We have come up with new insight that will help your finances based on
          your spending and saving habits.
        </MyText>
        <Pressable style={styles.btn}>
          <MyText bold={FONT_WEIGHT.semibold} color={'white'}>See recommendations</MyText>
          <AntDesign name='arrowright' size={20} color={'white'}/>
        </Pressable>
      </View>
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    flexDirection: 'row',
    borderRadius: 30,
    height: 35,
    backgroundColor: COLORS.metalgray,
    width: 220,marginTop:10
  },
});

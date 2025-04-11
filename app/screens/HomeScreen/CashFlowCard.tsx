import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../styles';
import { MyText } from '../../components/MyText';
import PieChart from 'react-native-pie-chart';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CashFlowCard = () => {

  const series = [
    {value: 1500, color: COLORS.yellow},
    {value: 925, color: COLORS.brown},
  ];

  const widthAndHeight = 140;
  return (
    <View >
      <View style={styles.card}>
        <View style={styles.row}>
          <MyText bold={FONT_WEIGHT.bold} color={'white'}>
            Cash Flow
          </MyText>
          <TouchableOpacity style={styles.cardDayBtn}>
            <MyText size={FONT_SIZE.sm}>This week</MyText>
            <AntDesign name="down" size={15} />
          </TouchableOpacity>
        </View>

        {/* {PIE CHART} */}
        <View style={[styles.row, {marginTop: 15}]}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            cover={0.6}
          />
          <View style={{flex: 1, gap: 5, marginLeft: 7}}>
            <View style={styles.row}>
              <View
                style={{
                  backgroundColor: COLORS.yellow,
                  height: 20,
                  width: 9,
                  borderRadius: 3,
                }}></View>
              <MyText style={{flex: 1}} color={'white'}>
                Income
              </MyText>
              <MyText color={'white'}>$1500</MyText>
            </View>
            <View style={styles.row}>
              <View
                style={{
                  backgroundColor: COLORS.brown,
                  height: 20,
                  width: 9,
                  borderRadius: 3,
                }}></View>
              <MyText style={{flex: 1}} color={'white'}>
                Expenses
              </MyText>
              <MyText color={'white'}>$925</MyText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CashFlowCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        padding: 12,
        borderRadius: 15,
        marginTop: 50,
        marginBottom: 35,marginHorizontal:20
      },
      cardDayBtn: {
        backgroundColor: COLORS.yellow,
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 30,
        width: 100,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
      },
});

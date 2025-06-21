import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MyText } from '../../components/MyText';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Svg, G, Path } from 'react-native-svg';
import * as d3Shape from 'd3-shape';
import { CashFlowCardProps } from './types';

type PieChartDataItem = { value: number; color: string };

const CustomPieChart = ({
  data,
  size = 140,
  innerRadius = 40,
  outerRadius = 80,
}: {
  data: PieChartDataItem[];
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
}) => {
  const arcs = d3Shape.pie<PieChartDataItem>().value(d => d.value).sort(null)(data);
  const arcGen = d3Shape.arc<d3Shape.PieArcDatum<PieChartDataItem>>()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .cornerRadius(outerRadius * 0.09);

  return (
    <Svg width={size} height={size}>
      <G x={size / 2} y={size / 2}>
        {arcs.map((arc, i) => (
          <Path key={i} d={arcGen(arc) || ''} fill={data[i].color} />
        ))}
      </G>
    </Svg>
  );
};

const CashFlowCard: React.FC<CashFlowCardProps> = ({ cashFlowData, selectedRange, onFilterClickCB }) => {
  const data = cashFlowData[selectedRange];
  const series = [
    { value: data.income, color: COLORS.yellow },
    { value: data.expenses, color: COLORS.primary },
  ];
  const widthAndHeight = 140;
  const cycleLabels = {
    week: 'This week',
    month: 'This month',
    year: 'This year',
    fiveYears: '5 years',
  };
  const indicator = (color: string) => ({
    backgroundColor: color,
    height: 20,
    width: 9,
    borderRadius: 3,
  });

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.row}>
          <MyText bold={FONT_WEIGHT.bold}>Cash Flow</MyText>
          <TouchableOpacity onPress={onFilterClickCB}>
            <View style={styles.cardDayBtn}>
              <MyText size={FONT_SIZE.sm}>
                {cycleLabels[selectedRange]}
              </MyText>
              <AntDesign name="down" size={15} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, { marginTop: 15 }]}>
          <CustomPieChart
            data={series}
            size={widthAndHeight}
            innerRadius={widthAndHeight * 0.3}
            outerRadius={widthAndHeight / 2}
          />
          <View style={{ flex: 1, gap: 5, marginLeft: 7 }}>
            <View style={styles.row}>
              <View style={indicator(COLORS.yellow)} />
              <MyText style={{ flex: 1 }} size={FONT_SIZE.sm}>
                Income
              </MyText>
              <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                ${data.income}
              </MyText>
            </View>
            <View style={styles.row}>
              <View style={indicator(COLORS.primary)} />
              <MyText style={{ flex: 1 }} size={FONT_SIZE.sm}>
                Expenses
              </MyText>
              <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                ${data.expenses}
              </MyText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
    borderRadius: 10,
    height: 30,
    width: 120,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  dropdownStyle: {
    width: 150,
    borderRadius: 10,
    marginTop: -30,
  },
});

export default CashFlowCard;

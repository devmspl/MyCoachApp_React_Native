import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText} from '../../components/MyText';
// import PieChart from 'react-native-pie-chart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Svg, G, Path} from 'react-native-svg';
import * as d3Shape from 'd3-shape';
import SelectDropdown from 'react-native-select-dropdown';


const cashFlowData = {
  week: {income: 1500, expenses: 925},
  month: {income: 6200, expenses: 4300},
  year: {income: 73200, expenses: 59000},
  fiveYears: {income: 368000, expenses: 297000},
};

type PieChartDataItem = {
  value: number;
  color: string;
};

type CustomPieChartProps = {
  data: PieChartDataItem[];
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
};

type DropdownItem = { label: string; value: string };


const CustomPieChart = ({
  data,
  size = 140,
  innerRadius = 40,
  outerRadius = 80,
}: CustomPieChartProps) => {
  const arcs = d3Shape
    .pie<PieChartDataItem>()
    .value(d => d.value)
    .sort(null)(data);

  const arcGen = d3Shape
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .cornerRadius(outerRadius * 0.09);

  return (
    <Svg width={size} height={size}>
      <G x={size / 2} y={size / 2}>
        {arcs.map((arc, i) => (
          <Path key={i} d={arcGen(arc as any) || ''} fill={data[i].color} />
        ))}
      </G>
    </Svg>
  );
};

const customRenderButton = (selectedItem: any, styles: any) => (
  <View style={styles.cardDayBtn}>
    <MyText size={FONT_SIZE.sm}>
      {selectedItem ? selectedItem.label : 'Select Range'}
    </MyText>
    <AntDesign name="down" size={15} />
  </View>
);

const customRenderItem = (
  item: DropdownItem,
  index: number,
  isSelected: boolean
) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: isSelected ? COLORS.yellow : '#fff',
      }}>
      <MyText>{item.label}</MyText>
    </View>
  );
};

const CashFlowCard = () => {
  const [selectedRange, setSelectedRange] = useState<
    'week' | 'month' | 'year' | 'fiveYears'
  >('week');

  const data = cashFlowData[selectedRange];
  const series = [
    {value: data.income, color: COLORS.yellow},
    {value: data.expenses, color: COLORS.primary},
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
          <SelectDropdown
            data={Object.keys(cycleLabels).map(key => ({
              label: cycleLabels[key as keyof typeof cycleLabels],
              value: key,
            }))}
            defaultValue={selectedRange}
            onSelect={(selectedItem, index) => {
              setSelectedRange(selectedItem.value as any);
            }}
            renderButton={selectedItem =>
              customRenderButton(selectedItem, styles)
            }
            dropdownOverlayColor="transparent"
            dropdownStyle={styles.dropdownStyle}
            renderItem={(item, index, isSelected) =>
              customRenderItem(item, index, isSelected)
            }
          />
        </View>

        <View style={[styles.row, {marginTop: 15}]}>
          {/* <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            cover={{radius: 0.6}}
            padAngle={0.01}
          /> */}
          <CustomPieChart
            data={series}
            size={widthAndHeight}
            innerRadius={widthAndHeight * 0.3}
            outerRadius={widthAndHeight / 2}
          />
          <View style={{flex: 1, gap: 5, marginLeft: 7}}>
            <View style={styles.row}>
              <View style={indicator(COLORS.yellow)} />
              <MyText style={{flex: 1}} size={FONT_SIZE.sm}>
                Income
              </MyText>
              <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                ${data.income}
              </MyText>
            </View>
            <View style={styles.row}>
              <View style={indicator(COLORS.primary)} />
              <MyText style={{flex: 1}} size={FONT_SIZE.sm}>
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

export default CashFlowCard;

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

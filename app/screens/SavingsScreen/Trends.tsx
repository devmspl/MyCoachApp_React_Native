import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Icon from '../../../assets/svg/Sparkle.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      colors: [
        () => '#00AB4F',
        () => '#00AB4F',
        () => '#00AB4F',
        () => '#00AB4F',
        () => COLORS.primary,
        () => COLORS.primary,
      ],
    },
  ],
};
const chartConfig = {
  backgroundColor: COLORS.bg,
  backgroundGradientFrom: COLORS.bg,
  backgroundGradientTo: COLORS.bg,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForBackgroundLines: {
    strokeWidth: 0,
  },
};

const Trend = () => {
  return (
    <View style={{}}>
      {/* Balance Box */}
      <View style={styles.balanceView}>
        <MyText size={FONT_SIZE.sm} color={'white'}>
          Total Expenditure
        </MyText>
        <MyText
          bold={FONT_WEIGHT.bold}
          color={'white'}
          size={FONT_SIZE['1.5xl']}>
          $2,145.98
        </MyText>
      </View>

      {/* {BAR CHART} */}
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel=""
        withHorizontalLabels={false}
        withInnerLines={false}
        fromZero
        withCustomBarColorFromData
        flatColor
        chartConfig={chartConfig}
        verticalLabelRotation={0}
        style={{
          borderRadius: 16,
          marginLeft: -35, // fix left spacing
        }}
      />

      {/* {CONTENT} */}

      <View style={styles.view}>
        <View style={styles.insightText}>
          <Icon />
          <MyText size={FONT_SIZE.sm}>Spending Insight</MyText>
        </View>
        <MyText size={FONT_SIZE.sm} color={'gray'}>
          Your average shopping expenses have been higher for the past 3 months,
          We have come up with best practices to help you spend and budget
          better.
        </MyText>

        <MyText
          bold={FONT_WEIGHT.bold}
          size={FONT_SIZE.sm}
          color={'gray'}
          style={{marginVertical: 7}}>
          Recommendations
        </MyText>

        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row'}}>
            <MyText size={FONT_SIZE.sm} color={'gray'}>
              •{'  '}
            </MyText>
            <MyText size={FONT_SIZE.sm} color={'gray'}>
              Be intentional about saving money and staying on track.
            </MyText>
          </View>

          <View style={{flexDirection: 'row'}}>
            <MyText size={FONT_SIZE.sm} color={'gray'}>
              •{'  '}
            </MyText>
            <MyText size={FONT_SIZE.sm} color={'gray'}>
              You should create a spending priority list and rank spending from
              “Most Important” to “Least Important.
            </MyText>
          </View>

          <View style={{flexDirection: 'row'}}>
            <MyText size={FONT_SIZE.sm} color={'gray'}>
              •{'  '}
            </MyText>
            <MyText size={FONT_SIZE.sm} color={'gray'}>
              Set up a reasonable amount for each budget you make and be careful
              not to spend past them.
            </MyText>
          </View>
        </View>

        <MyText
          bold={FONT_WEIGHT.bold}
          size={FONT_SIZE.sm}
          style={{marginTop: 10}}>
          Recources
        </MyText>

        <FlatList
          data={[1, 2]}
          renderItem={() => {
            return (
              <View style={styles.listView}>
                <View>
                  <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.semibold}>
                    How to build a good budgeting habit
                  </MyText>
                  <MyText size={FONT_SIZE.sm} color={'gray'}>
                    4 minutes video
                  </MyText>
                </View>
                <MaterialCommunityIcons
                  name="arrow-top-right-thin-circle-outline"
                  size={20}
                  color="gray"
                />
              </View>
            );
          }}
        />
      </View>

      {/* {} */}
    </View>
  );
};
export default Trend;

const styles = StyleSheet.create({
  balanceView: {
    borderRadius: 13,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 120,
    marginBottom: 15,
    marginHorizontal: 20,
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
    marginBottom: 10,
  },
  listView: {
    backgroundColor: COLORS.lightgrey,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 10,
  },
 
});

import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PieChart from 'react-native-pie-chart';
import * as Progress from 'react-native-progress';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(false);
  const [view, setView] = React.useState(1);
  const series = [
    {value: 1500, color: COLORS.yellow},
    {value: 925, color: COLORS.brown},
  ];

  const widthAndHeight = 140;
  const progress = 0.4;
  const data = [
    {
      title: 'Food',
      money: '190',
      progress: 0.4,
    },
    {
      title: 'Clothes',
      money: '300',
      progress: 0.7,
    },
    {
      title: 'Electricity',
      money: '235',
      progress: 0.6,
    },
    {
      title: 'Bills',
      money: '285',
      progress: 0.65,
    },
    {
      title: 'Vacation',
      money: '110',
      progress: 0.3,
    },
    {
      title: 'Phones',
      money: '250',
      progress: 0.55,
    },
  ];
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{marginHorizontal: 20}}>
        {/* header */}
        <View style={styles.header}>
          <View>
            <MyText size={FONT_SIZE.sm}>Good afternoon</MyText>
            <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
              JAH Creative
            </MyText>
          </View>
          <View style={styles.imgView}></View>
        </View>

        {/* {BALANCE VIEW} */}
        <MyText
          style={{alignSelf: 'center', marginTop: 15}}
          size={FONT_SIZE.sm}>
          Available balance
        </MyText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            alignSelf: 'center',
          }}>
          <MyText size={FONT_SIZE['2.5xl']} bold={FONT_WEIGHT.black}>
            {isBalanceVisible ? '*********' : '2,145.98.00'}
          </MyText>

          <MaterialCommunityIcons
            onPress={() => setIsBalanceVisible(!isBalanceVisible)}
            name={isBalanceVisible ? 'eye-settings' : 'eye-off'}
            size={16}
            color="black"
          />
        </View>

        {/* {CASH FLOW} */}
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

        {/* {MONEY SPENT OPTIONS} */}

        <View style={styles.viewBtn}>
          <Pressable
            onPress={() => setView(1)}
            style={[
              styles.options,
              {backgroundColor: view === 1 ? 'white' : COLORS.grey},
            ]}>
            <MyText
              bold={view === 1 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}>
              Remaining
            </MyText>
          </Pressable>

          <Pressable
            onPress={() => setView(2)}
            style={[
              styles.options,
              {backgroundColor: view === 2 ? 'white' : COLORS.grey},
            ]}>
            <MyText
              bold={view === 2 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}>
              Spent
            </MyText>
          </Pressable>
          <Pressable
            onPress={() => setView(3)}
            style={[
              styles.options,
              {backgroundColor: view === 3 ? 'white' : COLORS.grey},
            ]}>
            <MyText
              bold={view === 3 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}>
              Projected
            </MyText>
          </Pressable>
        </View>

        <FlatList
          data={data}
          renderItem={({item}: any) => {
            return (
              <View style={{marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',marginBottom:10
                  }}>
                  <MyText size={FONT_SIZE.sm}>Food</MyText>
                  <MyText size={FONT_SIZE.sm}>${item?.money}/400</MyText>
                </View>
                <Progress.Bar
                  progress={item.progress}
                  width={null}
                  color={COLORS.primary}
                />
              </View>
            );
          }}
        />

        {/* {END} */}
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgView: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: COLORS.grey,
  },
  card: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 15,
    marginTop: 50,
    marginBottom: 35,
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
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    height: 35,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  options: {
    height: '100%',
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});

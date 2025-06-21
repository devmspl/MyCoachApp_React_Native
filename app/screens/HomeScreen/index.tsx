import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HomeStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CashFlowCard from './CashFlowCard';
import ThreeOptions from './ThreeOptions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SavingGoalCard from './SavingGoalCard';
import Recommendation from './Recommendation';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {getRandomColor} from '../../utils/helper';
import {api_getUserProfile} from '../../api/profile';
import { RootState } from '../../redux';

const cashFlowDataMap = {
  week: {
    Food: { income: 300, expenses: 120 },
    Clothes: { income: 200, expenses: 80 },
    Electricity: { income: 150, expenses: 60 },
    Bills: { income: 250, expenses: 100 },
    Vacation: { income: 100, expenses: 40 },
    Phones: { income: 180, expenses: 70 },
    All: { income: 1500, expenses: 925 },
  },
  month: {
    Food: { income: 1200, expenses: 480 },
    Clothes: { income: 800, expenses: 320 },
    Electricity: { income: 600, expenses: 240 },
    Bills: { income: 1000, expenses: 400 },
    Vacation: { income: 400, expenses: 160 },
    Phones: { income: 720, expenses: 280 },
    All: { income: 6200, expenses: 4300 },
  },
  year: {
    Food: { income: 14400, expenses: 5760 },
    Clothes: { income: 9600, expenses: 3840 },
    Electricity: { income: 7200, expenses: 2880 },
    Bills: { income: 12000, expenses: 4800 },
    Vacation: { income: 4800, expenses: 1920 },
    Phones: { income: 8640, expenses: 3360 },
    All: { income: 73200, expenses: 59000 },
  },
  fiveYears: {
    Food: { income: 72000, expenses: 28800 },
    Clothes: { income: 48000, expenses: 19200 },
    Electricity: { income: 36000, expenses: 14400 },
    Bills: { income: 60000, expenses: 24000 },
    Vacation: { income: 24000, expenses: 9600 },
    Phones: { income: 43200, expenses: 16800 },
    All: { income: 368000, expenses: 297000 },
  },
};

type CategoryKey = 'Food' | 'Clothes' | 'Electricity' | 'Bills' | 'Vacation' | 'Phones' | 'All';

function getPeriodKey(selectedPeriod: string): 'week' | 'month' | 'year' | 'fiveYears' {
  if (selectedPeriod === 'Current month') return 'month';
  if (selectedPeriod === 'This week') return 'week';
  if (selectedPeriod === 'Last week') return 'week';
  if (selectedPeriod === 'This year') return 'year';
  if (selectedPeriod === '5 years') return 'fiveYears';
  return 'week';
}

function getFilteredCashFlowData(period: string, category: string | null) {
  const keys: Array<'week' | 'month' | 'year' | 'fiveYears'> = ['week', 'month', 'year', 'fiveYears'];
  const result: Record<string, { income: number; expenses: number }> = {};
  keys.forEach((k) => {
    if (
      category &&
      (['Food', 'Clothes', 'Electricity', 'Bills', 'Vacation', 'Phones', 'All'] as const).includes(category as CategoryKey)
    ) {
      result[k] = cashFlowDataMap[k][category as CategoryKey];
    } else {
      result[k] = cashFlowDataMap[k].All;
    }
  });
  return result as {
    week: { income: number; expenses: number };
    month: { income: number; expenses: number };
    year: { income: number; expenses: number };
    fiveYears: { income: number; expenses: number };
  };
}

const remainingData = [
  {title: 'Food', money: '190', progress: 0.4},
  {title: 'Clothes', money: '300', progress: 0.7},
  {title: 'Electricity', money: '235', progress: 0.6},
  {title: 'Bills', money: '285', progress: 0.65},
  {title: 'Vacation', money: '110', progress: 0.3},
  {title: 'Phones', money: '250', progress: 0.55},
];

const spentData = [
  {title: 'Food', money: '210', progress: 0.6},
  {title: 'Clothes', money: '100', progress: 0.2},
  {title: 'Electricity', money: '165', progress: 0.4},
  {title: 'Bills', money: '115', progress: 0.35},
  {title: 'Vacation', money: '290', progress: 0.7},
  {title: 'Phones', money: '150', progress: 0.35},
];

const projectedData = [
  {title: 'Food', money: '250', progress: 0.8},
  {title: 'Clothes', money: '200', progress: 0.5},
  {title: 'Electricity', money: '200', progress: 0.5},
  {title: 'Bills', money: '300', progress: 0.75},
  {title: 'Vacation', money: '350', progress: 0.9},
  {title: 'Phones', money: '300', progress: 0.75},
];

const cashFlowData = {
  week: {income: 1500, expenses: 925},
  month: {income: 6200, expenses: 4300},
  year: {income: 73200, expenses: 59000},
  fiveYears: {income: 368000, expenses: 297000},
};

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [view, setView] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const [userData, setUserData] = useState<any>(null);
    const fullName = userData?.personal?.firstName
    ? `${userData.personal.firstName} ${
        userData.personal.lastName ?? ''
      }`.trim()
    : null;

  const filters = useSelector((state: RootState) => state.homeFilter);
  const selectedRange = getPeriodKey(filters.selectedPeriod);

  const filteredCashFlowData = getFilteredCashFlowData(filters.selectedPeriod, filters.selectedCategory);

  function getPeriodKey(selectedPeriod: string): 'week' | 'month' | 'year' | 'fiveYears' {
    if (selectedPeriod === 'Current month') return 'month';
    if (selectedPeriod === 'This week') return 'week';
    if (selectedPeriod === 'Last week') return 'week'; // adjust if you have data for last week
    if (selectedPeriod === 'This year') return 'year';
    if (selectedPeriod === '5 years') return 'fiveYears';
    return 'week';
  }

  function filterThreeOptionsData(dataArr: any) {
    let filtered = dataArr;
    if (filters.selectedCategory) {
      filtered = filtered.filter((item: any) =>
        filters.selectedCategory &&
        item.title.toLowerCase() === filters.selectedCategory.toLowerCase()
      );
    }
    return filtered;
  }

  const dataSource =
    view === 2 ? spentData : view === 3 ? projectedData : remainingData;

  const data = filterThreeOptionsData(dataSource);

  const handleUserData = async () => {
    setIsLoading(true);
    try {
      const res = await api_getUserProfile();
      setUserData(res?.profile);
      console.log(JSON.stringify(res), res, 'api_getUserProfile');
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleUserData();
  }, []);

  const onFilterClick = () => {
    SheetManager.show('CashFlowActionSheet');
  }

  return (
    <MainLayout>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 0}}
        data={[1]}
        renderItem={() => {
          return (
            <>
              {/* header */}
              <View style={styles.header}>
                <View>
                  <MyText size={FONT_SIZE.sm}>Good afternoon</MyText>
                  <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                    {fullName || 'JAH Creative'}
                  </MyText>
                </View>
                <View style={styles.imgView}></View>
              </View>

              {/* {BALANCE VIEW} */}
              <View
                style={{
                  // backgroundColor: COLORS.cream,
                  paddingVertical: 20,
                  marginTop: 20,
                }}>
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
              </View>

              <CashFlowCard
                cashFlowData={filteredCashFlowData}
                selectedRange={selectedRange}
                onFilterClickCB={onFilterClick}
              />
              <ThreeOptions data={data} view={view} setView={setView} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 35,
                  marginHorizontal: 20,
                }}>
                <MyText size={FONT_SIZE['1.5xl']} bold={FONT_WEIGHT.bold}>
                  Budget Suggestions
                </MyText>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                  <MyText>View all</MyText>
                  <AntDesign name="right" size={15} />
                </TouchableOpacity>
              </View>

              <FlatList
                contentContainerStyle={{paddingHorizontal: 15}}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[1, 2, 3, 4, 5]}
                renderItem={({item, index}) => {
                  return (
                    <Pressable
                      onPress={() => {
                        index === 0 &&
                          SheetManager.show(SHEETS.AddNewBudgetSheet);
                      }}
                      style={[
                        styles.suggestionView,
                        {
                          backgroundColor:
                            index === 0 ? 'transparent' : getRandomColor(),
                          borderWidth: index === 0 ? 1 : 0,
                          borderStyle: index === 0 ? 'dashed' : 'solid',
                          justifyContent: index === 0 ? 'center' : 'flex-start',
                          alignItems: index === 0 ? 'center' : 'flex-start',
                        },
                      ]}>
                      {index === 0 ? (
                        <>
                          <AntDesign name="plus" size={24} color="black" />
                          <MyText>New Budget</MyText>
                        </>
                      ) : (
                        <>
                          <View style={styles.suggestionImg}></View>
                          <MyText color={'white'}>
                            {index % 2 === 1 ? 'Food' : 'Repairs'}
                          </MyText>
                          <MyText color={'white'}>$190/$400</MyText>
                        </>
                      )}
                    </Pressable>
                  );
                }}
              />
              {/* {BUDGET END} */}

              {/* { SAVING GOALS} */}
              <SavingGoalCard />
              <Recommendation />

              {/* {END} */}
            </>
          );
        }}
      />
     
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  imgView: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: COLORS.grey,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },
  suggestionView: {
    padding: 10,
    height: 130,
    width: 125,
    backgroundColor: 'black',
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 15,
    gap: 7,
  },
  suggestionImg: {
    height: 40,
    width: 40,
    borderRadius: 35,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
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
import CardsIcon from '../../../assets/svg/CardsIcon.svg';
import {getRandomColor} from '../../utils/helper';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(false);

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
                    JAH Creative
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

              {/* {COMPONENTS} */}
              <CashFlowCard />
              <ThreeOptions />
              {/* {} */}

              {/* {BUDGET SUGGESTIONS} */}
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

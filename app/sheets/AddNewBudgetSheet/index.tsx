import {FlatList, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText, RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Pressable} from 'react-native';
import {getRandomColor} from '../../utils/helper';
import * as Progress from 'react-native-progress';

const AddNewBudgetSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [newBudget, setNewBudget] = React.useState<any>(false);
  const close = () => {
    SheetManager.hide(SHEETS.AddNewBudgetSheet);
  };
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <View style={{paddingBottom: 20}}>
        {!newBudget ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['1.5xl']}>
                Select a Budget Catgory
              </MyText>

              <EvilIcons
                onPress={close}
                name="close"
                size={30}
                color={COLORS.black}
              />
            </View>
            <TouchableOpacity
              onPress={() => setNewBudget(true)}
              style={styles.cardDayBtn}>
              <MyText size={FONT_SIZE.sm} color={COLORS.primary}>
                New Budget
              </MyText>
              <AntDesign name="plus" size={15} color={COLORS.primary} />
            </TouchableOpacity>
            <FlatList
              contentContainerStyle={{marginHorizontal: 10}}
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3, 4, 5, 6]}
              numColumns={3}
              renderItem={() => {
                return (
                  <Pressable
                    onPress={close}
                    style={[
                      styles.suggestionView,
                      {backgroundColor: getRandomColor()},
                    ]}>
                    <View style={styles.suggestionImg}></View>
                    <MyText color={'white'}>Food</MyText>
                    <MyText color={'white'}>$190/$400</MyText>
                    <Progress.Bar
                      progress={0.5}
                      width={null}
                      color={COLORS.primary}
                      unfilledColor={'lightgray'}
                    />
                  </Pressable>
                );
              }}
            />

            <View
              style={{
                marginHorizontal: 20,
                backgroundColor: COLORS.lightBg,
                borderRadius: 10,
                padding: 10,
              }}>
              <MyText size={FONT_SIZE.sm} color={COLORS.primary}>
                We looked through your spending habits over time and created
                budget categories based off optimal grouping for you.
              </MyText>
            </View>
          </>
        ) : (
          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['1.5xl']}>
                Add a new Budget
              </MyText>

              <EvilIcons
                onPress={() => setNewBudget(false)}
                name="close"
                size={30}
                color={COLORS.black}
              />
            </View>

            <TextInput
              style={{
                backgroundColor: COLORS.lightgrey,
                padding: 10,
                height: 50,
                width: '100%',
                marginVertical: 20,
                borderRadius: 10,
              }}
              placeholder="Budget Name"
            />

            <TouchableOpacity style={styles.addCategory}>
              <AntDesign name="plus" size={15} color={COLORS.primary} />
              <MyText color={COLORS.primary}>Add Sub Category</MyText>
            </TouchableOpacity>
            <PrimaryBtn containerStyle={{marginTop: 30}} text="Confirm" />
          </View>
        )}
      </View>
    </ActionSheet>
  );
};

export default AddNewBudgetSheet;
const styles = StyleSheet.create({
  cardDayBtn: {
    backgroundColor: COLORS.lightBg,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    height: 43,
    width: 120,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  addCategory: {
    backgroundColor: COLORS.lightBg,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 43,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
  },
  suggestionView: {
    padding: 10,
    borderRadius: 10,
    // marginRight: 10,
    // marginVertical: 5,
    gap: 7,
    flex: 1 / 3,
    marginBottom: 10,
    marginHorizontal: 5,
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

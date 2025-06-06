import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
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
import Slider from 'rn-range-slider';
import Thumb from '../../components/Slider/Thumb';
import Rail from '../../components/Slider/Rail';
import RailSelected from '../../components/Slider/RailSelected';
import Label from '../../components/Slider/Label';
import Notch from '../../components/Slider/Notch';

const colorCodes = [
  '#077A7D',
  '#CF0F47',
  '#6F826A',
  '#A6D6D6',
  '#328E6E',
  '#E2F8F2',
  '#D9E8E2',
  '#FF9149',
  '#1B56FD',
  '#735557',
];


const AddNewBudgetSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [newBudget, setNewBudget] = React.useState<any>(false);
  const close = () => {
    SheetManager.hide(SHEETS.AddNewBudgetSheet);
  };

  const [selectedColor, setSelectedColor] = React.useState<string>(
    colorCodes[0],
  );
  const [openColorPicker, setOpenColorPicker] = React.useState<boolean>(false);
  const [low, setLow] = React.useState(10);
  const [high, setHigh] = React.useState(800);
  const [min, setMin] = React.useState(10);
  const [max, setMax] = React.useState(2000);

  const renderThumb = React.useCallback(() => <Thumb />, []);
  const renderRail = React.useCallback(() => <Rail />, []);
  const renderRailSelected = React.useCallback(() => <RailSelected />, []);
  const renderLabel = React.useCallback(
    (value: any) => <Label text={value} />,
    [],
  );
  const renderNotch = React.useCallback(() => <Notch />, []);

  const handleValueChange = React.useCallback(({low, high}: any) => {
    setLow(low);
    setHigh(high);
  }, []);
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

            <TouchableOpacity
              style={styles.colorPickerInput}
              onPress={() => setOpenColorPicker(!openColorPicker)}>
              <MyText bold={FONT_WEIGHT.normal}>Pick a Budget Color </MyText>
              <View style={styles.colorPicker}>
                <View
                  style={[
                    styles.selectedColor,
                    {backgroundColor: selectedColor || COLORS.primary},
                  ]}
                />
                <EvilIcons name="chevron-down" size={35} color={COLORS.black} />
              </View>
            </TouchableOpacity>
            {openColorPicker && (
              <View>
                <ScrollView>
                  <View style={styles.colorContainer}>
                    {colorCodes.map((item, index) => {
                      return (
                        <Pressable
                          key={index}
                          style={[styles.colorView, {backgroundColor: item}]}
                          onPress={() => {
                            setSelectedColor(item);
                            setOpenColorPicker(false);
                          }}></Pressable>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            )}

            <View style={styles.budgetContainer}>
              <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE.l}>
                Budget
              </MyText>

              <Slider
                low={low}
                high={high}
                min={min}
                max={max}
                step={1}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
              />

              <View style={styles.budgetView}>
                <View style={styles.budget}>
                  <MyText bold={FONT_WEIGHT.normal} size={FONT_SIZE.l}>
                    Minimum
                  </MyText>
                  <View style={styles.budgetValue}>
                    <MyText bold={FONT_WEIGHT.semibold}>$10</MyText>
                  </View>
                </View>

                <View style={styles.budget}>
                  <MyText bold={FONT_WEIGHT.normal} size={FONT_SIZE.l}>
                    Maximum
                  </MyText>
                  <View style={styles.budgetValue}>
                    <MyText bold={FONT_WEIGHT.semibold}>$2,000</MyText>
                  </View>
                </View>
              </View>
            </View>

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
  colorPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPickerInput: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  selectedColor: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    padding: 20,
    maxHeight: 300,
    backgroundColor: COLORS.lightgrey,
    borderRadius: 10,
    overflow: 'scroll',
  },
  colorView: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  budgetContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  budgetView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  budget: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  budgetValue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightgrey,
    borderRadius: 10,
    width: 120,
    height: 40,
    justifyContent: 'center',
  },
});

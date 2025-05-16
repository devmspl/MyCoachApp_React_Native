import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/types';
import {SHEETS} from './sheets';
import {MyText, RegularText} from '../components/MyText';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
``
const categories = [
  {id: 1, name: 'Car saving'},
  {id: 2, name: 'House Mortage'},
  {id: 3, name: 'Vacation'},
  {id: 4, name: 'School Fee'},
  {id: 5, name: 'Entertainment'},
  {id: 6, name: 'Others'},``
];

const CategoryList = ({
  name,
  onSelect,
  isSelected,
}: {
  name: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          padding: 7,
          paddingHorizontal: 15,
          borderRadius: 35,
          margin: 5,
          backgroundColor: isSelected ? COLORS.yellow : COLORS.bg,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const period = [
  {id: 1, name: 'Custom'},
  {id: 2, name: 'This week'},
  {id: 3, name: 'This month'},
  {id: 4, name: 'This year'},
  {id: 5, name: 'All time'},
];
const PeriodList = ({
  name,
  onSelect,
  isSelectedPeriod,
}: {
  name: string;
  onSelect: () => void;
  isSelectedPeriod: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          padding: 7,
          paddingHorizontal: 15,
          borderRadius: 35,
          margin: 5,
          backgroundColor: isSelectedPeriod ? COLORS.yellow : COLORS.bg,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const FilterSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedId, setSelectedId] = React.useState(0);
  const [selectedIdPeriod, setSelectedIdPeriod] = React.useState(0);

  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [date, setDate] = React.useState<any>('');
  const [time, setTime] = React.useState<any>('');

  const close = () => {
    SheetManager.hide(SHEETS.FilterSheet);
  };
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>  
      <View style={{paddingBottom: 20}}>
        {/* {HEADER} */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginBottom: 25,
          }}>
          <MyText bold={FONT_WEIGHT.semibold} size={FONT_SIZE['1.5xl']}>
            Filters
          </MyText>

          <EvilIcons
            onPress={close}
            name="close"
            size={30}
            color={COLORS.black}
          />
        </View>

        {/* {CATEGORIES} */}
        <MyText
          style={{marginHorizontal: 20, marginBottom: 10}}
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.semibold}>
          Category
        </MyText>
        <FlatList
          horizontal={true}
          contentContainerStyle={{paddingLeft: 15}}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({item}) => {
            return (
              <CategoryList
                onSelect={() => setSelectedId(item.id)}
                name={item.name}
                isSelected={item.id === selectedId}
              />
            );
          }}
        />

        {/* {PERIOD} */}
        <MyText
          style={{marginHorizontal: 20, marginTop: 30, marginBottom: 10}}
          size={FONT_SIZE.xl}
          bold={FONT_WEIGHT.semibold}>
          Category
        </MyText>
        <FlatList
          horizontal={true}
          contentContainerStyle={{paddingLeft: 15}}
          showsHorizontalScrollIndicator={false}
          data={period}
          renderItem={({item}) => {
            return (
              <PeriodList
                onSelect={() => setSelectedIdPeriod(item.id)}
                name={item.name}
                isSelectedPeriod={item.id === selectedIdPeriod}
              />
            );
          }}
        />

        {/* {DATE & TIME} */}


        {/* {/ {TIME} /} */}
          <TouchableOpacity
            onPress={() => setTimePickerVisibility(true)}
            style={styles.input}>
            <DatePicker
              modal
              mode="time"
              open={isTimePickerVisible}
              date={new Date()}
              //@ts-ignore
              onConfirm={time => {
                setTimePickerVisibility(false);
                const t = moment(time).format('LT');
                setTime(t);
                console.log(t, 'LT');
              }}
              onCancel={() => {
                setTimePickerVisibility(false);
              }}
            />
            <RegularText>{time === '' ? 'Choose Time' : time}</RegularText>
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>


        

        {/* {END} */}
      </View>
    </ActionSheet>
  );
};

export default FilterSheet;
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

import {
  Text,
  FlatList,
  TouchableOpacity,
  Share,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../sheets';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import {MyText, RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

const AddNewBudgetSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const close = () => {
    SheetManager.hide(SHEETS.AddNewBudgetSheet);
  };
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <View style={{margin: 20}}>
        <View style={{flexDirection: 'row'}}>
          <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['1.5xl']}>
            Add a New Budget
          </MyText>
        </View>

        <TextInput
          style={{
            backgroundColor: COLORS.grey,
            padding: 10,
            height: 50,
            width: '100%',
            marginVertical: 20,
            borderRadius: 10,
          }}
          placeholder="Budget Name"
        />

        <TouchableOpacity style={styles.cardDayBtn}>
          <MyText>Add Sub Category</MyText>
          <AntDesign name="plus" size={15} />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
          }}></View>
        <MyText>Pick a Budget Colour</MyText>
      </View>
    </ActionSheet>
  );
};

export default AddNewBudgetSheet;
const styles = StyleSheet.create({
  cardDayBtn: {
    backgroundColor: COLORS.yellow,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 43,
    width: 180,
  },
});

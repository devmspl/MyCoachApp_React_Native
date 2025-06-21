import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
// import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomProgressBar from '../../components/CustomProgressbar';

type ThreeOptionsProps = {
  data: { title: string; money: string; progress: number }[];
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
};

const ThreeOptions: React.FC<ThreeOptionsProps> = ({
  data = [],
  view = 1,
  setView = (view: number) => {},
}) => {
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.viewBtn}>
        <Pressable
          onPress={() => setView(1)}
          style={[
            styles.options,
            {backgroundColor: view === 1 ? 'white' : COLORS.grey},
          ]}>
          <MyText
            size={FONT_SIZE.sm}
            bold={view === 1 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}
            color={view === 1 ? COLORS.primary : COLORS.black}>
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
            size={FONT_SIZE.sm}
            bold={view === 2 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}
            color={view === 2 ? COLORS.primary : COLORS.black}>
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
            size={FONT_SIZE.sm}
            bold={view === 3 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}
            color={view === 3 ? COLORS.primary : COLORS.black}>
            Projected
          </MyText>
        </Pressable>
      </View>

      <FlatList
        data={data}
        renderItem={({item}: any) => {
          return (
            <View style={{marginTop: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  gap: 5,
                }}>
                <MaterialCommunityIcons
                  name="piggy-bank-outline"
                  size={17}
                  color={COLORS.primary}
                  style={{
                    backgroundColor: COLORS.grey,
                    padding: 5,
                    borderRadius: 50,
                  }}
                />
                <MyText
                  style={{flex: 1}}
                  size={FONT_SIZE.sm}
                  bold={FONT_WEIGHT.bold}>
                  {item?.title}
                </MyText>
                <MyText size={FONT_SIZE.sm}>${item?.money}/400</MyText>
              </View>
              {/* <Progress.Bar
                progress={item.progress}
                width={null}
                color={COLORS.primary}
                unfilledColor={COLORS.grey}
                borderColor={'transparent'}
              /> */}
             
              <CustomProgressBar progress={item.progress} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ThreeOptions;

const styles = StyleSheet.create({
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    height: 33,
    marginBottom: 10,
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

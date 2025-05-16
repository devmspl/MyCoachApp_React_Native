import {Text, FlatList, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';

import {SHEETS} from './sheets';


const options = [
  {name: 'Female', value: 'Female'},
  {name: 'Male', value: 'Male'},
];

const GenderSelectSheet = (props: any) => {
  const close = () => {
    SheetManager.hide(SHEETS.GenderSelectSheet);
  };

  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <FlatList
        style={{height: 150, padding: 20}}
        data={options}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props?.payload?.onSelect(item.value);
                SheetManager.hide(SHEETS.GenderSelectSheet);
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  padding: 5,
                  margin: 5,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </ActionSheet>
  );
};

export default GenderSelectSheet;

import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyText} from '../MyText';
import {FONT_WEIGHT} from '../../styles';

const Label = ({text, ...restProps}: any) => {
  return (
    <View style={styles.root} {...restProps}>
      <MyText style={styles.text} bold={FONT_WEIGHT.semibold}>
        ${text}
      </MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 4,paddingHorizontal:5
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default memo(Label);

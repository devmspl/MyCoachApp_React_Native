import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../styles';

const RailSelected = () => {
  return <View style={styles.root} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 13,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
  },
});

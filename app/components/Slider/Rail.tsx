import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../styles';

const Rail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 13,
    borderRadius: 15,
    backgroundColor: COLORS.grey,
  },
});
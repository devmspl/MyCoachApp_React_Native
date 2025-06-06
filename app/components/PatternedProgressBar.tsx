import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, Pattern, Rect, Line } from 'react-native-svg';

const PatternedProgressBar = ({ value, total }) => {
  const percentage = value / total;

  return (
    <View style={styles.container}>
      {/* Filled portion */}
      <View style={[styles.filled, { flex: percentage }]} />

      {/* Unfilled portion with diagonal pattern */}
      <View style={{ flex: 1 - percentage }}>
        <Svg height="100%" width="100%" viewBox="0 0 10 10" preserveAspectRatio="none">
          <Defs>
            <Pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <Line x1="0" y1="0" x2="0" y2="8" stroke="#aad9c7" strokeWidth="2" />
            </Pattern>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="#e7f4ef" />
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#stripes)" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#e7f4ef', // fallback
  },
  filled: {
    backgroundColor: '#2c6e5b',
  },
});

export default PatternedProgressBar;

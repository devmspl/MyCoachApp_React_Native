import React, { useRef, useEffect, useState } from 'react';
import { View, Animated, ViewStyle, LayoutChangeEvent } from 'react-native';
import Svg, { Defs, Pattern, Rect, Line } from 'react-native-svg';
import { COLORS } from '../styles';

interface CustomProgressBarProps {
  progress: number;
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  progress,
  height = 7,
  backgroundColor = COLORS.grey,
  fillColor = COLORS.primary,
  borderRadius = 5,
  style,
}) => {
  const animated = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animated, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  // Calculate the width for the filled bar
  const filledWidth = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, containerWidth],
  });

  // Create striped pattern component
  const StripedBackground = () => (
    <Svg
      width={containerWidth}
      height={height}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
      <Defs>
        <Pattern
          id="stripes"
          patternUnits="userSpaceOnUse"
          width="8"
          height="8"
          patternTransform="rotate(45)">
          <Line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke={fillColor}
            strokeWidth="5"
            opacity="0.3"
          />
        </Pattern>
      </Defs>
      <Rect
        width={containerWidth}
        height={height}
        fill="url(#stripes)"
        rx={borderRadius}
      />
    </Svg>
  );

  return (
    <View
      style={[
        {
          width: '100%',
          height,
          backgroundColor,
          borderRadius,
          overflow: 'hidden',
          position: 'relative',
        },
        style,
      ]}
      onLayout={onLayout}>
      {containerWidth > 0 && (
        <>
          <StripedBackground />
          
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              borderRadius,
              backgroundColor: fillColor,
              width: filledWidth,
            }}
          />
        </>
      )}
    </View>
  );
};

export default CustomProgressBar;
import {StyleProp, TextStyle, Text} from 'react-native';
import React from 'react';
import {COLORS, FONT_SIZE} from '../styles';

type TextProp = {
  children: string | React.ReactNode;
  style?: StyleProp<TextStyle>;
  bold?: TextStyle['fontWeight'];
  size?: number;
  center?: boolean;
  color?: TextStyle['color'];
};

export const RegularText = ({children, style, bold}: TextProp) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 15,
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText = ({children, style, bold}: TextProp) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 10,
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const BigText = ({children, style, bold}: TextProp) => {
  return (
    <Text
      style={[
        {
          color: COLORS.black,
          fontSize: 25,
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const MyText = ({
  children,
  style,
  bold,
  size,
  color,
  center,
  ...rest
}: TextProp) => {
  return (
    <Text
      {...rest}
      style={[
        {
          fontSize: size ? size : FONT_SIZE.base,
          fontWeight: bold,
          color: color ? color : '#222',
          textAlign: center ? 'center' : 'auto',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};


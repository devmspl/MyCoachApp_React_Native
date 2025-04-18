const globalStyles = {
  inputError: {
    color: 'tomato',
    width: '80%',
    textAlign: 'center',
    marginBottom: 10,
  },
};

const COLORS = {
  primary: '#00C059',
  white: '#fff',
  black: '#222',
  grey: '#E3E3E3',
  lightgrey: '#F4F4F5',
  darkgrey: '#A1A1AA',
  blue: '#3141ad',
  lightBlue: '#0096ED',
  lightBg: '#EBFFF4',
  bg:'#F0F0F0',
  cream:'#F5F2E4',
  yellow:'#EFBF04',
  lightyellow:'#FFBE0033',
  brown:'#643300',
  lavender:'#A577FF',
  metalgray:'#3C4142',
  
  green: '#29715B',
  greenTeal: '#00C059',
}
export { globalStyles, COLORS };

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Dimensions} from 'react-native';

type FONT_WEIGHT_Type = {
  thin: '100';
  extralight: '200';
  light: '300';
  normal: '400';
  medium: '500';
  semibold: '600';
  bold: '700';
  extrabold: '800';
  black: '900';
};
export const FONT_WEIGHT: FONT_WEIGHT_Type = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const FONT_SIZE = {
  xs: wp(2.5),
  sm: wp(3),
  base: wp(3.7),
  l: wp(4),
  lg: wp(4.5),
  xl: wp(5),
  '1.5xl': wp(5.8),
  '2xl': wp(6.8),
  '2.5xl': wp(7.5),
  '3xl': wp(9),
  '4xl': wp(11),
  '5xl': wp(12.5),
  '6xl': wp(14),
};


const {width: DW, height: DH} = Dimensions.get('screen');

export {wp, hp, DH, DW};

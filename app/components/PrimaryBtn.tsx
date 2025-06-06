import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText} from './MyText';

type Props = {
  text: string;
  loading?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const PrimaryBtn = ({
  text,
  loading,
  onPress,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          // marginHorizontal: 20,
          height: 50,
          backgroundColor: COLORS.primary,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyle,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'#FFF'} />
      ) : (
        <RegularText style={[{color: '#fff', fontSize:17}, textStyle]} bold>
          {text}
        </RegularText>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS} from '../styles';

type InputProps = {
  placeholder: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onBlur?: any;
  keyboardType?: any;
};
const Input = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
  onBlur,
}: InputProps) => {
  return (
    <View style={[{width: '100%'}, inputWrapperStyle, {marginTop: 15}]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onBlur={onBlur}
        style={[
          {
            backgroundColor: COLORS.lightgrey,
            height: 45,
            borderRadius: 10,
            color: 'black',
            paddingLeft: 12,
            fontSize: 14,
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input;

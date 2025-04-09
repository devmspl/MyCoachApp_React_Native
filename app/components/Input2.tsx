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
  label: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onBlur?: any;
  keyboardType?: any;
};
const Input2 = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
  onBlur,
  label,
}: InputProps) => {
  return (
    <View style={[{width: '100%'}, inputWrapperStyle, {marginTop: 20}]}>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'white'}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onBlur={onBlur}
        style={[
          {
            borderBottomColor: COLORS.grey,
            borderBottomWidth: 2,
            height: 45,
            color: 'white',
            fontSize: 15,
            
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input2;

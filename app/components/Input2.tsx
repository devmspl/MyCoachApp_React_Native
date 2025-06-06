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
      <Text  style={{marginBottom:10, fontWeight:'bold'}}>{label}</Text>
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
            backgroundColor: 'white',
            borderWidth: 1,
            height: 45,
            borderRadius: 10,
            color: 'black',
            paddingLeft: 12,
            fontSize: 14,
            borderColor: COLORS.grey,
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input2;

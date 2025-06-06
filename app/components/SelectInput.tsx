
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS } from '../styles';

type Item = {
  label: string;
  value: string;
};

type SelectInputProps = {
  label?: string;
  data: Item[];
  onSelect: (item: Item) => void;
  value?: string;
  placeholder?: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
};

const SelectInput = ({
  label,
  data,
  onSelect,
  value,
  placeholder = 'Select an option',
  inputWrapperStyle,
}: SelectInputProps) => {
  return (
    <View style={[{ width: '100%' }, inputWrapperStyle, { marginTop: 20 }]}>
      <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>{label}</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  placeholderStyle: {
    color: 'gray',
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'black',
  },
});

export default SelectInput;

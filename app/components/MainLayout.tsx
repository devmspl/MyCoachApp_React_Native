import React from 'react';
import {COLORS} from '../styles';
import {View, ScrollView, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegularText} from './MyText';

type Props = {
  children: React.ReactNode;
  title?: string;
  onBack?: () => void;
  onBackTitle?: string;
};

const MainLayout = ({children, title, onBack}: Props) => {
  const extraStyle = {
    marginVertical: 40,
    marginHorizontal: 15,
    marginTop: 20,
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.bg, paddingTop: 20}}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          onBack ? extraStyle : {},
        ]}>
        {onBack && (
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'white',
              borderRadius: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onBack}>
            <MaterialIcons name="arrow-back" size={25} color={COLORS.black} />
          </TouchableOpacity>
        )}
        <RegularText
          bold
          style={{marginLeft: 15, color: COLORS.black, fontSize: 21}}>
          {title}
        </RegularText>
        <MaterialIcons name="arrow-back" size={20} color={'transparent'} />
      </View>
      {children}
    </View>
  );
};

export default MainLayout;

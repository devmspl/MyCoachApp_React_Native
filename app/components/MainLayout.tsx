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
          },
          onBack ? extraStyle : {},
        ]}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <MaterialIcons name="arrow-back" size={25} color={COLORS.black} />
          </TouchableOpacity>
        )}
        <RegularText
          bold
          style={{marginLeft: 15, color: COLORS.black, fontSize: 20}}>
          {title}
        </RegularText>
      </View>
      {children}
    </View>
  );
};

export default MainLayout;

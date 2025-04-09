import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../styles';

const CameraAndGalleryOption = (props: any) => {
  return (
    <ActionSheet id={props.sheetId} gestureEnabled>
      <View style={{height: 280, padding: 20}}>
        <BigText bold style={{textAlign: 'center'}}>
          Upload Photo
        </BigText>
        <SmallText style={{textAlign: 'center', opacity: 0.5}}>
          Choose your Profile Photo
        </SmallText>
        <View
          style={{
            flex: 1,
            height: 140,
            marginVertical: 20,
          }}>
          <TouchableOpacity
            onPress={props?.payload?.openCamera}
            style={{
              height: 45,
              width: '100%',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
            }}>
            <RegularText bold style={{color: 'white'}}>
              Take Photo
            </RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props?.payload?.openGallery}
            style={{
              height: 45,
              width: '100%',
              backgroundColor: COLORS.primary,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
            }}>
            <RegularText bold style={{color: 'white'}}>
              Choose from Library
            </RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props?.payload?.closeSheet}
            style={{
              height: 45,
              width: '100%',
              backgroundColor: COLORS.primary,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <RegularText bold style={{color: 'white'}}>
              Cancel
            </RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default CameraAndGalleryOption;

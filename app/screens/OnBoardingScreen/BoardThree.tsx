import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
import {BigText, RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';

const {width} = Dimensions.get('window');
type Props = {
  handleSkip?: () => void;
  handleNext?: () => void;
};
const BoardThree = ({}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  function handleNext() {
    navigation.navigate('Login');
  }
  return (
    <View
      style={{
        width: width,
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View style={{height: '50%', backgroundColor: 'white'}}>
        <View
          style={{
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/images/OnBoardingImg/ob3.png')}
            style={{
              resizeMode: 'contain',
              width: '100%',
              height: '80%',
              marginTop: 30,
            }}
          />
        </View>
      </View>
      <View style={{height: '50%', backgroundColor: 'white'}}>
        <BigText style={{alignSelf: 'center', fontSize: 30}} bold>
          Everything You Can Do
        </BigText>
        <BigText
          style={{
            alignSelf: 'center',
            fontSize: 30,
            marginTop: -5,
            marginBottom: 20,
          }}
          bold>
          In The App
        </BigText>
        <RegularText style={{color: COLORS.primary, alignSelf: 'center'}}>
          Welcome to our virtual classroom, where education
        </RegularText>

        <RegularText style={{color: COLORS.primary, alignSelf: 'center'}}>
          meets convenience! At Meander Live,we bring the
        </RegularText>

        <RegularText style={{color: COLORS.primary, alignSelf: 'center'}}>
          world of learning directly to your home.
        </RegularText>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <PrimaryBtn
            containerStyle={{marginBottom: 10}}
            onPress={handleNext}
            text={'Next'}
          />
          <PrimaryBtn
            textStyle={{color: COLORS.primary}}
            containerStyle={{backgroundColor: 'pink', marginBottom: 30}}
            text={'Skip'}
          />
        </View>
      </View>
    </View>
  );
};

export default BoardThree;

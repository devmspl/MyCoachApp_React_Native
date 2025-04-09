import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
import {BigText, RegularText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles';

const {width} = Dimensions.get('window');

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};
const BoardTwo = ({handleNext, handleSkip}: Props) => {
  const navigation = useNavigation<any>();
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
            // marginHorizontal: 30,
            // marginBottom: 20,
            height: '100%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/images/OnBoardingImg/ob2.png')}
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
          Let's Connect With
        </BigText>
        <BigText
          style={{
            alignSelf: 'center',
            fontSize: 30,
            marginTop: -5,
            marginBottom: 20,
          }}
          bold>
          Everyone In The World
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
            onPress={handleSkip}
            textStyle={{color: COLORS.primary}}
            containerStyle={{backgroundColor: 'pink', marginBottom: 30}}
            text={'Skip'}
          />
        </View>
      </View>
    </View>
  );
};

export default BoardTwo;

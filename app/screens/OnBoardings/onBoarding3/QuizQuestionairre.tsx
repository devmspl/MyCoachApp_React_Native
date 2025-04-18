import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {MyText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import Input2 from '../../../components/Input2';
import SelectInput from '../../../components/SelectInput';

const OnboardingFour = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [selectedOptions, setSelectedOptions] = React.useState({
    optionOne: '',
    optionTwo: '',
    optionThree: '',
    optionFour: '',
    optionFive: '',
    optionSix: '',
  });
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="black"
          />
          <View style={styles.slideView}>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            <View
              style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
            <View style={styles.btn}></View>
            {/* <View style={styles.btn}></View> */}
          </View>
          <AntDesign name="arrowleft" size={1} color="white" />
        </View>

        {/* {CONTENT} */}
        <View style={{marginTop: 20}}>
          <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.bold}>
            Take this quick 6-question quiz to discover your money personality.
          </MyText>

          <MyText
            size={FONT_SIZE.sm}
            color={'gray'}
            style={{marginVertical: 5}}>
            This information helps us provide relevant insights and help us
            recommend more accurately.
          </MyText>

          <SelectInput
            label="1. You just got an unexpected $500. What do you do?"
            data={[
              {
                label: 'Spend it on something I’ve been wanting',
                value: 'spend',
              },
              {label: 'Save it for a rainy day', value: 'save'},
              {label: 'Invest it for the future', value: 'invest'},
              {label: 'Use it to pay off debt', value: 'debt'},
            ]}
            value={selectedOptions.optionOne}
            onSelect={item =>
              setSelectedOptions({
                ...selectedOptions,
                optionOne: item.value,
              })
            }
            placeholder="Pick an answer"
          />

          <SelectInput
            label="2. How do you feel when you check your bank account?"
            data={[
              {label: 'Anxious or nervous', value: 'anxious'},
              {label: 'Confident and in control', value: 'confident'},
              {label: 'Curious to see how I’m doing', value: 'curious'},
              {label: 'I avoid checking it', value: 'avoid'},
            ]}
            value={selectedOptions.optionTwo}
            onSelect={item =>
              setSelectedOptions({
                ...selectedOptions,
                optionTwo: item.value,
              })
            }
            placeholder="Pick an answer"
          />

          <SelectInput
            label="3. When shopping online, do you…?"
            data={[
              {label: 'Buy impulsively without thinking', value: 'impulse'},
              {label: 'Compare prices and wait for sales', value: 'strategic'},
              {label: 'Only buy when absolutely necessary', value: 'minimal'},
              {label: 'Add to cart, then forget about it', value: 'browse'},
            ]}
            value={selectedOptions.optionThree}
            onSelect={item =>
              setSelectedOptions({
                ...selectedOptions,
                optionThree: item.value,
              })
            }
            placeholder="Pick an answer"
          />

          <SelectInput
            label="4. If you had to describe your budgeting style, which sounds most like you?"
            data={[
              {label: 'Strict and by the book', value: 'strict'},
              {label: 'Flexible but aware', value: 'flexible'},
              {
                label: 'I try, but it’s hard to stick with it',
                value: 'inconsistent',
              },
              {label: 'What’s a budget?', value: 'none'},
            ]}
            value={selectedOptions.optionFour}
            onSelect={item =>
              setSelectedOptions({
                ...selectedOptions,
                optionFour: item.value,
              })
            }
            placeholder="Pick an answer"
          />

          <SelectInput
            label="5. What motivates you more?"
            data={[
              {label: 'Achieving financial freedom', value: 'freedom'},
              {label: 'Avoiding debt and stress', value: 'stress-free'},
              {label: 'Being able to enjoy life now', value: 'enjoyment'},
              {label: 'Providing for my family', value: 'family'},
            ]}
            value={selectedOptions.optionFive}
            onSelect={item =>
              setSelectedOptions({
                ...selectedOptions,
                optionFive: item.value,
              })
            }
            placeholder="Pick an answer"
          />

          <SelectInput
            label="6. Which financial philosophy best describes you:"
            data={[
              {label: 'Save now, enjoy later', value: 'save_now'},
              {label: 'You only live once – spend wisely', value: 'yolo'},
              {label: 'Balance is key', value: 'balance'},
              {label: 'Money is a tool, not a goal', value: 'tool'},
            ]}
            value={selectedOptions.optionSix}
            onSelect={item =>
              setSelectedOptions({
                ...selectedOptions,
                optionSix: item.value,
              })
            }
            placeholder="Pick an answer"
          />
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('OnboardingFive')}
          containerStyle={{marginVertical: 20}}
          text="Next"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingFour;

const styles = StyleSheet.create({
  slideView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginVertical: 20,
  },
  btn: {
    borderRadius: 10,
    width: 40,
    height: 8,
    backgroundColor: COLORS.grey,
  },
});

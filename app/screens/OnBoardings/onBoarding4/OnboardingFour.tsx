import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {MyText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SelectInput from '../../../components/SelectInput';
import {api_onbaordingFour} from '../../../api/onboardings';

const OnboardingFour = () => {
  type RootStackParams = {
    OnboardingFive: {
      token: any;
    };
  };
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
  
  const [isLoading, setIsLoading] = React.useState(false);
  const token = useRoute<any>().params.token;
  //  console.log('token from route params ', token);

  const handleAnswers = async () => {
    setIsLoading(true);
    const payload = {
      answers: [
        {
          questionId: 1,
          answer: selectedOptions.optionOne,
        },
        {
          questionId: 2,
          answer: selectedOptions.optionTwo,
        },
        {
          questionId: 3,
          answer: selectedOptions.optionThree,
        },
        {
          questionId: 4,
          answer: selectedOptions.optionFour,
        },
        {
          questionId: 5,
          answer: selectedOptions.optionFive,
        },
      ],
      financial_philosophy: selectedOptions.optionSix,
    };
    console.log('payload', payload);
    console.log('Payload JSON:', JSON.stringify(payload));

    try {
      const res = await api_onbaordingFour(payload, token);
      // console.log({res});
      Alert.alert(
        'Success',
        res.message || 'QUIZ STATUS UPDATED SUCCESSFULLY',
      );
      navigation.navigate('OnboardingFive', {token: token});
    } catch (error: any) {
      console.log(error);
      Alert.alert('Alert', error.message);
    }
  };

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
                label: 'Save or invest it immediately.',
                value: 'save or invest',
              },
              {label: 'Spend a little, save the rest.', value: 'spend'},
              {
                label: 'Treat myself to something nice—I deserve it!',
                value: 'treat myself',
              },
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
              {
                label: 'Proud—I keep track and know where my money is.',
                value: 'proud',
              },
              {
                label: 'Meh—I check it occasionally but don’t stress',
                value: 'stress',
              },
              {
                label: 'Nervous—I just hope there’s enough for what I want.',
                value: 'nervous',
              },
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
              {
                label:
                  'Add things to your cart but wait a few days before buying.',
                value: 'add things',
              },
              {
                label: 'Buy only if it’s a really good deal or necessary.',
                value: 'buy',
              },
              {
                label: 'Click “Buy Now” without thinking twice.',
                value: 'buy now',
              },
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
              {
                label: 'I track every dollar and set financial goals.',
                value: 'track dollar',
              },
              {
                label: 'I try to save, but I also like to enjoy life.',
                value: 'try saving',
              },
              {
                label: 'Budget? What budget? I just go with the flow.',
                value: 'budget',
              },
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
              {
                label: 'Seeing my savings and investments grow over time.',
                value: 'growth',
              },
              {
                label: 'Having enough money to enjoy life without stress.',
                value: 'stress-free',
              },
              {
                label: 'The excitement of getting new things or experiences.',
                value: 'excitement',
              },
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
              {
                label:
                  'Dave Ramsey (I nerd out about every dollar and every transaction. I cant wait to see the backside of my debt!)',
                value: 'Dave Ramsey',
              },
              {
                label:
                  'Rich Dad, Poor Dad (I’ll do whatever it takes to build wealth, even if it means using debt to get there.)',
                value: 'Rich Dad, Poor Dad',
              },
              {
                label:
                  '50/30/20 Rule (I want to live life to the fullest right now. Tomorrow is not guaranteed.)',
                value: '50/30/20 Rule',
              },
              {
                label:
                  'Minimalist (I love the simple life! I’ll spend on essentials and things that bring true value.)',
                value: 'Minimalist',
              },
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
          onPress={handleAnswers}
          containerStyle={{marginVertical: 20, marginBottom: 200}}
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

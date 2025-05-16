import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/MainLayout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {MyText} from '../../../components/MyText';
import PrimaryBtn from '../../../components/PrimaryBtn';
import SelectInput from '../../../components/SelectInput';

const OnboardingThree = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [selectedOptions, setSelectedOptions] = React.useState({
    haveDebts: '',
    haveInsurance: '',
    budgetedBefore: '',
    preferBudgetMethod: '',
  });
  return (
    <MainLayout>
      <ScrollView contentContainerStyle={{paddingHorizontal: 20, flex: 1}}>
        <View style={{flex: 1}}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialIcons name="arrow-back" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.slideView}>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View
                style={[styles.btn, {backgroundColor: COLORS.primary}]}></View>
              <View style={styles.btn}></View>
              <View style={styles.btn}></View>
            </View>
            <AntDesign name="arrowleft" size={1} color="white" />
          </View>

          {/* {CONTENT} */}
          <View style={{marginTop: 20}}>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.extrabold}>
              A Few More Questions Before
            </MyText>
            <MyText size={FONT_SIZE['xl']} bold={FONT_WEIGHT.extrabold}>
              Quiz!
            </MyText>

            <MyText
              size={FONT_SIZE.sm}
              color={'gray'}
              style={{marginVertical: 5}}>
              This information helps us provide relevant insights and help us
              recommend more accurately.
            </MyText>

            <SelectInput
              label="Do you have Debts?"
              data={[
                {label: 'Yes, I have loans/debts', value: 'yes'},
                {label: 'No, I don’t have any', value: 'no'},
              ]}
              value={selectedOptions.haveDebts}
              onSelect={item =>
                setSelectedOptions({...selectedOptions, haveDebts: item.value})
              }
              placeholder="Pick an answer"
            />

            <SelectInput
              label="Do you have Insurance?"
              data={[
                {label: 'Yes, I have insurance', value: 'yes'},
                {label: 'No, I don’t have any', value: 'no'},
              ]}
              value={selectedOptions.haveInsurance}
              onSelect={item =>
                setSelectedOptions({
                  ...selectedOptions,
                  haveInsurance: item.value,
                })
              }
              placeholder="Pick an answer"
            />

            <SelectInput
              label="Have you Budgeted before?"
              data={[
                {label: 'Yes, I have', value: 'yes'},
                {label: 'No, not yet', value: 'no'},
              ]}
              value={selectedOptions.budgetedBefore}
              onSelect={item =>
                setSelectedOptions({
                  ...selectedOptions,
                  budgetedBefore: item.value,
                })
              }
              placeholder="Pick an answer"
            />

            <SelectInput
              label="Which budget method do you prefer?"
              data={[
                {label: 'Yes, I have', value: 'yes'},
                {label: 'No, I’m new to budgeting', value: 'no'},
              ]}
              value={selectedOptions.preferBudgetMethod}
              onSelect={item =>
                setSelectedOptions({
                  ...selectedOptions,
                  preferBudgetMethod: item.value,
                })
              }
              placeholder="Pick an answer"
            />
          </View>
        </View>
        <PrimaryBtn
          onPress={() => navigation.navigate('OnboardingFour')}
          containerStyle={{marginBottom: 20}}
          text="Move To Quiz"
        />
      </ScrollView>
    </MainLayout>
  );
};

export default OnboardingThree;

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

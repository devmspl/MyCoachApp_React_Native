import {FlatList, Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Withdraw from '../../../assets/svg/Withdraw.svg';

const transactionsData = [
  {
    date: '28th February, 2025',
    data: [
      {
        id: '1',
        title: 'Oliver Twist',
        subtitle: 'Withdrawal',
        amount: '100.00',
        type: 'debit',
      },
      {
        id: '2',
        title: 'Monthly Salary',
        subtitle: 'Transfer',
        amount: '200.00',
        type: 'credit',
      },
      {
        id: '3',
        title: 'Apple subscription',
        subtitle: 'Card transaction',
        amount: '100.00',
        type: 'debit',
      },
    ],
  },
  {
    date: '27th February, 2025',
    data: [
      {
        id: '4',
        title: 'Oliver Twist',
        subtitle: 'Withdrawal',
        amount: '100.00',
        type: 'debit',
      },
      {
        id: '5',
        title: 'Monthly Salary',
        subtitle: 'Transfer',
        amount: '200.00',
        type: 'credit',
      },
      {
        id: '6',
        title: 'Apple subscription',
        subtitle: 'Card transaction',
        amount: '100.00',
        type: 'debit',
      },
    ],
  },
];

const TransactionsScreen = () => {
  const navigation = useNavigation();
  const [view, setView] = React.useState(1);

  const renderItem = ({item}) => <TransactionItem {...item} />;

  return (
    <MainLayout title="Transactions" onBack={navigation.goBack}>
      <View style={{flex: 1, marginHorizontal: 20}}>
        {/* View toggle */}
        <View style={styles.viewBtn}>
          <Pressable
            onPress={() => setView(1)}
            style={[
              styles.options,
              {backgroundColor: view === 1 ? 'white' : COLORS.black},
            ]}>
            <MyText
              size={FONT_SIZE.sm} color={view === 1 ? 'black' : 'white'}
              bold={view === 1 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}>
              All
            </MyText>
          </Pressable>

          <Pressable
            onPress={() => setView(2)}
            style={[
              styles.options,
              {backgroundColor: view === 2 ? 'white' : COLORS.black},
            ]}>
            <MyText
              size={FONT_SIZE.sm} color={view === 2 ? 'black' : 'white'}
              bold={view === 2 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}>
              Expenses
            </MyText>
          </Pressable>
          <Pressable
            onPress={() => setView(3)}
            style={[
              styles.options,
              {backgroundColor: view === 3 ? 'white' : COLORS.black},
            ]}>
            <MyText
              size={FONT_SIZE.sm} color={view === 3 ? 'black' : 'white'}
              bold={view === 3 ? FONT_WEIGHT.semibold : FONT_WEIGHT.normal}>
              Income
            </MyText>
          </Pressable>
        </View>

        {/* Search + Filter */}
        <View style={styles.inputOuter}>
          <View style={styles.input}>
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput style={{flex: 1}} placeholder="Search here..." />
          </View>
          <Pressable style={styles.filterBtn}>
            <AntDesign name="filter" size={24} color="gray" />
          </Pressable>
        </View>

        {/* Balance Box */}
        <View style={styles.balanceView}>
          <MyText size={FONT_SIZE.sm}>Total Expenditure</MyText>
          <MyText bold={FONT_WEIGHT.bold} size={FONT_SIZE['1.5xl']}>
            $2,145.98
          </MyText>
        </View>

        {/* FlatList for Transactions */}
        <FlatList
          data={transactionsData}
          keyExtractor={(item, index) => item.date + index}
          renderItem={({item}) => (
            <View style={{marginBottom: 20}}>
              <MyText bold={FONT_WEIGHT.semibold} style={{marginBottom: 10}}>
                {item.date}
              </MyText>
              {item.data.map(tx => (
                <TransactionItem key={tx.id} {...tx} />
              ))}
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </MainLayout>
  );
};

export default TransactionsScreen;

// Reusable transaction component
const TransactionItem = ({title, subtitle, amount, type}: any) => {
  const icon =
    title === 'Oliver Twist' ? (
      <Withdraw />
    ) : title === 'Monthly Salary' ? (
      <AntDesign name="swap" size={20} color="black" />
    ) : (
      <FontAwesome name="credit-card-alt" size={15} color="black" />
    );

  // const amountColor = type === 'credit' ? 'green' : 'red';

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        {icon}
        <View>
          <MyText bold={FONT_WEIGHT.semibold}>{title}</MyText>
          <MyText size={FONT_SIZE.sm} color="gray">
            {subtitle}
          </MyText>
        </View>
      </View>
      <MyText bold={FONT_WEIGHT.semibold}>
        {type === 'credit' ? '+' : '-'}${amount}
      </MyText>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.black,
    borderRadius: 5,
    height: 33,
    marginBottom: 10,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
    width: 300,
  },
  options: {
    height: '100%',
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  input: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderRadius: 10,
    height: 45,
    flex: 1,
    backgroundColor: COLORS.lightgrey,
    paddingHorizontal: 10,
  },
  inputOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
  },
  filterBtn: {
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  balanceView: {
    borderRadius: 13,
    backgroundColor: COLORS.cream,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 140,
    marginVertical: 15,
  },
});

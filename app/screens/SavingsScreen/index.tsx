import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {SavingsStackParams} from '../../navigation/types';
import {MyText} from '../../components/MyText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../styles';
import Rewards from './Rewards';
import Goals from './Goals';
import Trend from './Trends';

const SavingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SavingsStackParams>>();
  const [view, setView] = React.useState(1);
  return (
    <MainLayout onBack={navigation.goBack} title="Savings">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        data={[1]}
        renderItem={() => {
          return (
            <View>
              {/* {BTN} */}
              <View style={styles.viewBtn}>
                <Pressable
                  onPress={() => setView(1)}
                  style={{
                    backgroundColor: view === 1 ? 'white' : COLORS.grey,
                    height: '100%',
                    width: '33.3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                  }}>
                  <MyText size={FONT_SIZE.sm} color={'black'}>
                    Trends
                  </MyText>
                </Pressable>
                <Pressable
                  onPress={() => setView(2)}
                  style={{
                    backgroundColor: view === 2 ? 'white' : COLORS.grey,
                    height: '100%',
                    width: '33.3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                  }}>
                  <MyText size={FONT_SIZE.sm} color={'black'}>
                    Goals
                  </MyText>
                </Pressable>

                <Pressable
                  onPress={() => setView(3)}
                  style={{
                    backgroundColor: view === 3 ? 'white' : COLORS.grey,
                    height: '100%',
                    width: '33.3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                  }}>
                  <MyText size={FONT_SIZE.sm} color={'black'}>
                    Rewards
                  </MyText>
                </Pressable>
              </View>

              {/* {} */}
              {view === 1 && <Trend />}
              {view === 2 && <Goals />}
              {view === 3 && <Rewards />}

              {/* {END} */}
            </View>
          );
        }}
      />
    </MainLayout>
  );
};

export default SavingsScreen;

const styles = StyleSheet.create({
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    height: 30,
    width: 250,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  goalView: {
    // justifyContent: 'center',
  },
  rewardsView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: '#FFF8E5',
    padding: 16,
    marginTop: 10,
  },
  rewardIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 110,
    marginTop: 10,
  },
  rewardIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  rewardTitle: {
    marginTop: 10,
  },
  rewardSubTitle: {
    marginTop: 10,
  },
  progressView: {
    width: '100%',
    height: 35,
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  absoluteView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    height: 30,
    paddingHorizontal: 10,
    marginTop: 2,
  },
  collacedBadgesView: {
    marginTop: 30,
    flexDirection: 'column',
    gap: 10,
  },
  shadowBox: {
    // width: '100%',
  },
  badgesView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 13,
  },
  badgeCard: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    borderRadius: 13,
    gap: 10,
  },
  badgeIcon: {
    width: 60,
    height: 70,
    resizeMode: 'contain',
  },
});

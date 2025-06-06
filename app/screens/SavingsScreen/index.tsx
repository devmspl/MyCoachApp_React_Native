import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
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
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SavingsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<SavingsStackParams>>();
  const [view, setView] = React.useState(1);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
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
                  onPress={() => {
                    setView(2);
                    setTimeout(() => {
                      setIsModalVisible(true);
                    }, 1000);
                  }}
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

              {/* congrats modal  */}
              <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                  setIsModalVisible(!isModalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <TouchableOpacity
                      onPress={() => setIsModalVisible(!isModalVisible)}
                      style={{width: '100%'}}>
                      <EvilIcons
                        name="close"
                        size={24}
                        color={COLORS.black}
                        style={{
                          width: 24,
                          height: 24,
                          alignSelf: 'flex-end',
                          marginBottom: 10,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={styles.modalHeader}>
                      <Image
                        source={require('../../../assets/images/congrats-thumb.png')}
                        style={styles.thumb}
                      />

                      <MyText
                        bold={FONT_WEIGHT.bold}
                        size={FONT_SIZE.l}
                        color={COLORS.green}>
                        Congratulations!
                      </MyText>

                      <MyText size={FONT_SIZE.sm} color={COLORS.black}>
                        You just hit half of your savings goal
                      </MyText>

                      <View style={styles.modalTextView1}>
                        <MyText size={FONT_SIZE.sm} bold={FONT_WEIGHT.bold}>
                          House Mortgage Plan.
                        </MyText>
                        <MyText size={FONT_SIZE.sm}>
                          You are doing great!
                        </MyText>
                      </View>
                    </View>

                    <View style={styles.modalFooter}>
                      <MyText size={FONT_SIZE.sm} color={'#121212'}>
                        Share your with friends!
                      </MyText>
                      <View style={styles.modalSocialIcons}>
                        <TouchableOpacity
                          style={styles.modalSocialIconContainer}>
                          <Image
                            source={require('../../../assets/icon/green-tiktok.png')}
                            style={styles.modalSocialIcon}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.modalSocialIconContainer}>
                          <Image
                            source={require('../../../assets/icon/green-instagram.png')}
                            style={styles.modalSocialIcon}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.modalSocialIconContainer}>
                          <Image
                            source={require('../../../assets/icon/green-x.png')}
                            style={styles.modalSocialIcon}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.modalSocialIconContainer}>
                          <Image
                            source={require('../../../assets/icon/green-facebook.png')}
                            style={styles.modalSocialIcon}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.modalSocialIconContainer}>
                          <Image
                            source={require('../../../assets/icon/green-sms.png')}
                            style={[styles.modalSocialIcon, {width: 20, height: 20}]}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#B8B8B880',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  modalTextView1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  thumb: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  modalFooter: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  modalSocialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  modalSocialIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 50,
    overflow: 'hidden',
  },
  modalSocialIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

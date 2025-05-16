import {View, StyleSheet, Pressable} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import {MyText} from '../../../components/MyText';
import {COLORS, FONT_SIZE} from '../../../styles';
import LoginView from './LoginView';
import SignupView from './SignupView';
import React from 'react';

const LoginScreen = () => {
  const [view, setView] = React.useState(1);

  return (
    <MainLayout>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.logoView}></View>

        <View style={styles.viewBtn}>
          <Pressable
            onPress={() => setView(1)}
            style={{
              backgroundColor: view === 1 ? 'white' : COLORS.grey,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm} color={'black'}>
              Login
            </MyText>
          </Pressable>

          <Pressable
            onPress={() => setView(2)}
            style={{
              backgroundColor: view === 2 ? 'white' : COLORS.grey,
              height: '100%',
              width: '49%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <MyText size={FONT_SIZE.sm} color={'black'}>
              Sign up
            </MyText>
            {/* <MyText size={FONT_SIZE.sm} color={view === 2 ? 'black' : 'white'}>Sign up</MyText> */}
          </Pressable>
        </View>

        {view === 1 && <LoginView />}
        {view === 2 && <SignupView />}
      </View>
    </MainLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoView: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    height: 50,
    width: 180,
    marginBottom: 20,
  },
  viewBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    height: 30,
    width: 180,
    marginBottom: 30,
    justifyContent: 'space-between',
    padding: 3,
    flexDirection: 'row',
  },
  inputView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  input: {
    height: 45,
    paddingHorizontal: 10,
    width: '90%',
    color: COLORS.black,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginTop: 15,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    marginLeft: 40,
  },
});

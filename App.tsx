import * as React from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import RootNavigator from './app/navigation/RootNavigator';
import './app/sheets/sheets';
import {store} from './app/redux';
import {Provider, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS, getLocalUser} from './app/utils/helper';
import {setAuth} from './app/redux/feature/auth/authSlice';

const AppInit = () => {
  const [ready, setReady] = React.useState(false);
  const [isFirstTimeOpen, setIsFirstTimeOpen] = React.useState(false);
  const dispatch = useDispatch();
  const init = async () => {
    try {
      const localAuthData = await getLocalUser();
      const isFirstTimeOpenData = await AsyncStorage.getItem(
        LOCAL_KEYS.IS_FIRST_TIME_OPEN,
      );
      if (localAuthData) {
        dispatch(setAuth(localAuthData));
      }
      setIsFirstTimeOpen(!Boolean(isFirstTimeOpenData));
    } catch (err) {
      console.log(err);
    } finally {
      setReady(true);
    }
  };

  React.useEffect(() => {
    init();
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        {ready && <RootNavigator isFirstTimeOpen={isFirstTimeOpen} />}
      </View>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SheetProvider>
          <AppInit />
        </SheetProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import * as React from 'react';
import {View, StatusBar, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SheetProvider} from 'react-native-actions-sheet';
import RootNavigator from './app/navigation/RootNavigator';
import './app/sheets/sheets';
import {persistor, store} from './app/redux';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS, getLocalUser} from './app/utils/helper';
import {setAuth} from './app/redux/feature/auth/authSlice';
import {PersistGate} from 'redux-persist/integration/react';

const AppInit = () => {
  const [ready, setReady] = React.useState(false);
  const [isFirstTimeOpen, setIsFirstTimeOpen] = React.useState(false);
  const dispatch = useDispatch();


  // const stored = useSelector((state: any) => state.auth);
  // console.log('store =>>>>', stored);

  // React.useEffect(() => {
  //   AsyncStorage.clear();
  // },[])


  
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

// console.log('storage =>>>>', AsyncStorage.getAllKeys());





const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SheetProvider>
          <PersistGate loading={null} persistor={persistor}>
            <AppInit />
          </PersistGate>
        </SheetProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

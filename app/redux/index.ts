import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import logger from 'redux-logger';
import postReducer from './feature/post/postSlice';
import contentSlice from './feature/content/contentSlice';
import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import homeFilterReducer from './feature/home/filterSlice';
// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage, // Use AsyncStorage as the storage engine
  whitelist: ['auth'], // Only persist the 'auth' reducer (optional)
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  content: contentSlice,
  homeFilter: homeFilterReducer,
});

// Creating the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['socket/setSocket', 'socket/setSocketIsConnected'],
        ignoredPaths: ['socket.socket'],
      },
    }).concat(logger),
});

// Creating persistor to manage the persistence of the store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

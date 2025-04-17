import {configureStore} from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import logger from 'redux-logger';
import postReducer from './feature/post/postSlice'
import contentSlice from './feature/content/contentSlice';
                                                   
export const store = configureStore({
  reducer: {
   auth:authReducer,
   post: postReducer,
   content: contentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['socket/setSocket', 'socket/setSocketIsConnected'],
        ignoredPaths: ['socket.socket'],
      },
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

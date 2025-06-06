
// export const api_onbaordingTwo = async (payload: any, token: string) => {
//   const uri =
//     'https://coachapp-backend.cradle.services/api/onboarding/relationship-status/';

//   try {
//     const res = await fetch(uri, {
//       method: 'POST',
//       headers: {
//         accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(payload),
//     });

//     const response = await res.json();

//     // Log raw response for debug
//     console.log('API Response:', response);

//     // Check HTTP status code
//     if (!res.ok) {
//       const errorMsg = response?.error || 'Something went wrong!';
//       console.error('API error response:', response);
//       throw new Error(errorMsg);
//     }

//     // Check app-level success field
//     if (!response.success) {
//       throw new Error('Unexpected error: success flag false');
//     }

//     return response; // Expected: { success: true, nextStep: "financial-preferences" }
//   } catch (error: any) {
//     console.error('Network/API Error in api_onbaordingTwo:', error);
//     throw new Error(error.message || 'Unknown network error');
//   }
// };












// store file 


// import {configureStore} from '@reduxjs/toolkit';
// import authReducer from './feature/auth/authSlice';
// import logger from 'redux-logger';
// import postReducer from './feature/post/postSlice';
// import contentSlice from './feature/content/contentSlice';
// import storage from '@react-native-async-storage/async-storage'; 


// const persistConfig = {
//   key: 'root',
//   storage, // Use AsyncStorage as the storage engine
//   whitelist: ['auth'], // Optional: Specify which reducers to persist
// };



// export const store = configureStore({
  
//   reducer: {
//     auth: authReducer,
//     post: postReducer,
//     content: contentSlice,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ['socket/setSocket', 'socket/setSocketIsConnected'],
//         ignoredPaths: ['socket.socket'],
//       },
//     }).concat(logger),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

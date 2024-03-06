// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Assuming you are using AsyncStorage in React Native
import notificationReducer from './notificationSlice';
import dataReducer from './dataSlice';

// Combine reducers
const rootReducer = combineReducers({
  notification: notificationReducer,
  data: dataReducer,
});

// Configure persist options
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for React Native
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor
export const persistor = persistStore(store);

export default store;

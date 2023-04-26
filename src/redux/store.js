import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';
import { followingReducer } from './followingSlice';

const followingPersistConfig = {
  key: 'following',
  storage,
  whitelist: ['following'],
};
const rootReducer = combineReducers({
  users: usersReducer,
  following: followingReducer,
});

const followingPersistReducer = persistReducer(
  followingPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: followingPersistReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

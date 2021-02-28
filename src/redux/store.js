import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootEventsReducer from './events/events-reducer';
import rootUserReducer from './user/user-reducer';
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

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['user'], // which reducer want to store
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, rootUserReducer),
    event: rootEventsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };

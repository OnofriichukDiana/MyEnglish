import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './reducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/es/storage'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)

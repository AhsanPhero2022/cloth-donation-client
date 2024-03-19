import { configureStore } from '@reduxjs/toolkit'
import {persistReducer, persistStore,  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import { baseApi } from './api/baseApi'

import authReducer from './features/auth/authSlice'
import  storage  from 'redux-persist/lib/storage';







const persistConfig = {
  key: 'auth',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)


export const store =  configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
  

  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [ FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,]
      }
     
    }).concat(baseApi.middleware),
})


// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor= persistStore(store)
export type RootState = ReturnType<typeof store.getState>;

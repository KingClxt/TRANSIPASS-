import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import storage from 'redux-persist/lib/storage'; // default: localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = configureStore({
    reducer:persistedReducer,
    devTools:true,
    middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
           serializableCheck: {
             ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
           },
    }),
})
export const persistor = persistStore(store);
export default store
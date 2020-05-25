import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'coder',
      storage,
      whitelist: ['post'],
    },
    reducers
  );

  return persistedReducer;
};
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { contactsAPI } from './contactsRTKQ';

export const filter = createAction('filter/filter');

const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsAPI.middleware),
});

import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsAPI } from './contactsRTKQ'

export const filter = createAction('filter/filter');

const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload,
});



export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsAPI.middleware),
})

setupListeners(store.dispatch)


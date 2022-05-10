import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/slice.js';
import itemsReducer from './prayeritems/slice.js';

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        items: itemsReducer
    }
})
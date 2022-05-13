import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/slice.js';
import itemsReducer from './prayeritems/slice.js';

const hasStorage = localStorage.getItem('store-contacts') != null;
const localState = hasStorage ? {
    contacts: JSON.parse(localStorage.getItem('store-contacts')),
    items: JSON.parse(localStorage.getItem('store-items'))
} : {};
console.log(localState);

const store = configureStore({
    reducer: {
        contacts: contactReducer,
        items: itemsReducer  
    },
    preloadedState: localState
});

store.subscribe(() => {
    localStorage.setItem('store-contacts', JSON.stringify(store.getState().contacts));
    localStorage.setItem('store-items', JSON.stringify(store.getState().items));
});

export default store;
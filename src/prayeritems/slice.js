import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const itemsSlice = createSlice({
    name: 'contactSlice',
    initialState: {
        items: [
            {
                id: '1',
                contactId: '1',
                title: 'Open to hear the word',
                dateBegun: '05/05',
                datesPrayed: [
                    '05/05', '07/05', '09/05'
                ],
                dateAccomplished: ''
            }
        ]
    },
    reducers: {
        addItem(state, item) {
            const payload = item.payload;

            state.items.push({
                id: uuidv4(),
                contactId: payload.contactId,
                dateBegun: payload.dateBegun,
                title: payload.title,
                datesPrayed: [],
                dateAccomplished: ''
            });
        },
        addDatePrayed(state, details) {
            const payload = details.payload;

            const item = state.items.find(item => item.id === payload.itemId);
            item.datesPrayed.push(payload.datePrayed);
        },
        prayerAnswered(state, details) {
            const payload = details.payload;

            const item = state.items.find(item => item.id === payload.itemId);
            item.dateAccomplished = payload.dateAccomplished;
        }
    }
});

export const { addItem, addDatePrayed, prayerAnswered } = itemsSlice.actions;
export default itemsSlice.reducer;
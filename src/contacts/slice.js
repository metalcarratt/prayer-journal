import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: {
        contacts: [
            {
                id: '1',
                name: 'Bob'
            }
        ]
    },
    reducers: {
        addContact(state, contact) {
            state.contacts.push({
                id: uuidv4(),
                name: contact.payload.name
            });
        }
    }
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
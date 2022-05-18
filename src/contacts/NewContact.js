import { useDispatch } from 'react-redux';
import { addContact } from './slice.js';
import { useState } from 'react';

function NewContact() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function clickAddNewContact() {
        dispatch(addContact({name}));
        setName('');
    }

    function changeName(event) {
        setName(event.target.value);
    }

    return (
        <div className="new-contact">
            <fieldset>
                <label>Name:</label>
                <input type="text" value={name} onChange={changeName}/>
            </fieldset>
            <button onClick={clickAddNewContact}>Add</button>
        </div>
    )
}

export default NewContact;
import { useDispatch } from 'react-redux';
import { addItem } from './slice.js';
import { useState } from 'react';
import dateUtil from '../util/dateUtil.js';

function NewPrayerItem(props) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    function clickAdd() {
        dispatch(addItem({
            contactId: props.contactId,
            dateBegun: dateUtil.todaysDate(),
            title
        }));
        setTitle('');
    }

    return (
        <div>
            <fieldset>
                <label>Particular need of prayer</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </fieldset>
            <button onClick={clickAdd}>Add new item</button>
        </div>
    )
}

export default NewPrayerItem;
import { useDispatch } from 'react-redux';
import { addItem } from './slice.js';
import { useState } from 'react';
import dateUtil from '../util/dateUtil.js';
import StepsList from './steps/StepsList.js';

function NewPrayerItem(props) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [showList, setShowList] = useState(false);

    function clickAdd() {
        dispatch(addItem({
            contactId: props.contactId,
            dateBegun: dateUtil.todaysDate(),
            title
        }));
        setTitle('');
    }

    function clickChooseFromList() {
        setShowList(true);
    }

    return (
        <div class="newItem">
            <fieldset>
                <label>Particular need of prayer</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </fieldset>
            <button onClick={clickChooseFromList}>Choose from list</button>
            <button onClick={clickAdd}>Add new item</button>

            {
                showList ?
                <StepsList
                    onClose={() => setShowList(false)}
                    onChoose={(choice) => {
                        setTitle(choice);
                        setShowList(false);
                    }}
                />
                : ''
            }
            
        </div>
    )
}

export default NewPrayerItem;
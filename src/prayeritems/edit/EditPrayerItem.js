import { useState } from 'react';
import { updateItem } from '../slice.js';
import { useDispatch } from 'react-redux';

function EditPrayerItem(props) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(props.prayerItem.title);
    const [dateBegun, setDateBegun] = useState(props.prayerItem.dateBegun);
    const [datesPrayed, setDatesPrayed] = useState(props.prayerItem.datesPrayed);
    const [dateAccomplished, setDateAccomplished] = useState(props.prayerItem.dateAccomplished);

    function clickCancel() {
        props.onClose();
    }

    function clickUpdate() {
        dispatch(updateItem({id: props.prayerItem.id, title, dateBegun, datesPrayed, dateAccomplished}));
        props.onClose();
    }

    function updateDatesPrayed(index, value) {
        const newDatesPrayed = [];
        datesPrayed.forEach((date, dindex) => newDatesPrayed.push(dindex === index ? value : date));
        setDatesPrayed(newDatesPrayed);
    }

    function addAnotherDatePrayed() {
        setDatesPrayed([...datesPrayed, '']);
    }

    return (
        <div className="popup-bg">
            <div className="popup">
                <h3>Edit</h3>
                <fieldset>
                    <label>Need for prayer:</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </fieldset>
                <br/>
                <fieldset>
                    <label>Date begun:</label>
                    <input 
                        type="text"
                        value={dateBegun}
                        onChange={(e) => setDateBegun(e.target.value)}
                    />
                </fieldset>
                <br/>
                <fieldset>
                    <label>Dates prayed:</label>
                    {
                        datesPrayed.map((date, index) => 
                            <input
                                key={index}
                                type="text"
                                value={date}
                                onChange={(e) => updateDatesPrayed(index, e.target.value)}
                            />
                        )
                    }
                    <button onClick={addAnotherDatePrayed}>Add another</button>
                </fieldset>
                <br/>
                <fieldset>
                    <label>Date accomplished:</label>
                    <input
                        type="text"
                        value={dateAccomplished}
                        onChange={(e) => setDateAccomplished(e.target.value)}
                    />
                </fieldset>

                <br/>
                <button onClick={clickCancel}>Cancel</button>
                <button onClick={clickUpdate}>Update</button>
            </div>
        </div>
    );
}

export default EditPrayerItem;
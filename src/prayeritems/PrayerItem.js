import { useSelector } from 'react-redux';
import dateUtil from '../util/dateUtil.js';
import listUtil from '../util/listUtil.js';
import { addDatePrayed, prayerAnswered } from './slice.js';
import { useDispatch } from 'react-redux';
import './prayerItem.css';
import EditPrayerItem from './edit/EditPrayerItem.js';
import { useState } from 'react';

function PrayerItem(props) {
    const dispatch = useDispatch();

    const todaysDate = dateUtil.todaysDate();

    const prayerItem = useSelector((state) => state.items.items.find(item => item.id === props.itemId));

    const [showEdit, setShowEdit] = useState(false);

    function clickPrayedToday() {
        dispatch(addDatePrayed({
            itemId: props.itemId,
            datePrayed: todaysDate
        }));
    }

    function clickPrayerAnswered() {
        dispatch(prayerAnswered({
            itemId: props.itemId,
            dateAccomplished: todaysDate
        }))
    }

    return (
        <div className="prayer-item">
            <fieldset>
                <label>Need for prayer:</label>
                <span>{ prayerItem.title }</span>
            </fieldset>

            {
                prayerItem.dateAccomplished === ''
                ? <button onClick={clickPrayerAnswered}>Prayed Answered</button>
                : (
                    <fieldset>
                        <label>Date accomplished:</label>
                        <span>{ prayerItem.dateAccomplished }</span>
                    </fieldset>
                )
            }

            <br/>

            <fieldset>
                <label>Date begun:</label>
                <span>{ prayerItem.dateBegun }</span>
            </fieldset>

            <fieldset>
                <label>Dates prayed:</label>
                <span>{ listUtil.makeCommaSeparatedList(prayerItem.datesPrayed) }</span>
                { !prayerItem.datesPrayed.includes(todaysDate) && prayerItem.dateAccomplished === ''
                    ? <button onClick={clickPrayedToday}>Prayed Today</button>
                    : ''
                }
            </fieldset>
            <button className="floatTop" onClick={() => setShowEdit(true)}>Edit</button>

            { 
                showEdit ? 
                    <EditPrayerItem
                        onClose={() => setShowEdit(false)}
                        prayerItem={prayerItem}
                    />
                    : ''
            }
        </div>
    );
}

export default PrayerItem;
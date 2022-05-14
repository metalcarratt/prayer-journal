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
            <span class="left">
                <fieldset>
                    <label>Need for prayer:</label>
                    <span className="value">{ prayerItem.title }</span>
                </fieldset>

                {
                    prayerItem.dateAccomplished === ''
                    ? <button onClick={clickPrayerAnswered}>Prayed Answered</button>
                    : (
                        <fieldset>
                            <label>Date accomplished:</label>
                            <span className="value">{ prayerItem.dateAccomplished }</span>
                        </fieldset>
                    )
                }

                <br/>

                <fieldset>
                    <label>Date begun:</label>
                    <span className="value">{ prayerItem.dateBegun }</span>
                </fieldset>

                <fieldset>
                    <label>Dates prayed:</label>
                    <span className="value">{ listUtil.makeCommaSeparatedList(prayerItem.datesPrayed) }</span>
                    { !prayerItem.datesPrayed.includes(todaysDate) && prayerItem.dateAccomplished === ''
                        ? <button onClick={clickPrayedToday}>Prayed Today</button>
                        : ''
                    }
                </fieldset>
            </span>
            <span class="right">
                <button className="floatTop" onClick={() => setShowEdit(true)}>Edit</button>
            </span>

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
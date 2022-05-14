import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import NewPrayerItem from '../prayeritems/NewItem.js';
import PrayerItem from '../prayeritems/PrayerItem.js';

function ContactDetail() {
    const navigate = useNavigate();
    const { contactId } = useParams();

    const contact = useSelector((state) => state.contacts.contacts.filter(contact => contact.id === contactId));
    const prayerItems = useSelector((state) => state.items.items.filter(item => item.contactId === contactId));

    function clickBack() {
        navigate('/');
    }

    return (
        <div className="page">
            <h1>{contact.name}</h1>
            <h2>Items for prayer:</h2>

            { prayerItems.filter(item => item.dateAccomplished === '').map((item, index) => 
                    <PrayerItem itemId={item.id} key={index} />  
                )
            }

            <NewPrayerItem contactId={contactId} />

            <h2>Answered items:</h2>

            { prayerItems.filter(item => item.dateAccomplished !== '').map((item, index) => 
                    <PrayerItem itemId={item.id} key={index} />  
                )
            }

            <br/>
            <button className="big" onClick={clickBack}>Back</button>
        </div>
    );
}

export default ContactDetail;
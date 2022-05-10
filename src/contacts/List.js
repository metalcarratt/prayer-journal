import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewContact from './NewContact.js';
import './list.css';

function ListContacts() {
    let navigate = useNavigate();
    
    const contacts = useSelector((state) => state.contacts.contacts);

    function clickExistingContact(id) {
        navigate(`contact/detail/${id}`);
    }

    return (
        <div class="page">
            <h1>Progressive Prayer Journal</h1>
            {contacts.map((contact, index) => 
                <div className="contact-item" key={index} onClick={(e) => clickExistingContact(contact.id, e)}>{contact.name}</div>
            )}
            <NewContact />
        </div>
    )
}

export default ListContacts;
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewContact from './NewContact.js';
import './list.css';
import GoogleLogin from '../login/GoogleLogin.js';

function ListContacts() {
    let navigate = useNavigate();
    
    const contacts = useSelector((state) => state.contacts.contacts);

    function clickExistingContact(id) {
        navigate(`contact/detail/${id}`);
    }

    function clickReset() {
        localStorage.removeItem('store-contacts');
        window.location.reload();
    }

    return (
        <div className="page">
            <h1>Progressive Prayer Journal</h1>
            {contacts.map((contact, index) => 
                <div className="contact-item" key={index} onClick={(e) => clickExistingContact(contact.id, e)}>{contact.name}</div>
            )}
            <NewContact />
            <a href="#" onClick={clickReset}>Reset</a>
            <GoogleLogin />
        </div>
    )
}

export default ListContacts;
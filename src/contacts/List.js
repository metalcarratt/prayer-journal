import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewContact from './NewContact.js';
import GoogleLogin from 'react-google-login';
import './list.css';

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

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div className="page">
            <h1>Progressive Prayer Journal</h1>
            {contacts.map((contact, index) => 
                <div className="contact-item" key={index} onClick={(e) => clickExistingContact(contact.id, e)}>{contact.name}</div>
            )}
            <NewContact />
            <a href="#" onClick={clickReset}>Reset</a>
            <GoogleLogin
                clientId="846763549713-kdc8d3umettaee43303tgpnbggqhvf0t.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default ListContacts;
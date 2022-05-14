import './App.css';
import './colours.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactList from './contacts/List.js';
import ContactDetail from './contacts/Detail.js';

function App() {
    

    return (
        <div className="App">
            <BrowserRouter basename="/prayer-journal">
                <Routes>
                    <Route path="/" element={<ContactList />} />
                    <Route path="/contact/detail/:contactId" element={<ContactDetail />} />  
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

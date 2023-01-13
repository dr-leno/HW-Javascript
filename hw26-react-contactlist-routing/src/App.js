import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import Contacts from './modules/pages/Contacts';
import EditContactForm from './modules/pages/EditContactForm';
import AddContactForm from './modules/pages/AddContactForm';
import Header from './modules/common/Header';


function App() {
  return (
    <>
    <Header />
    <Routes>
      
      <Route path="/" element={<Navigate to="contacts"/>}/>
      <Route path="contacts" element={<Contacts/>}/>
      <Route path="edit/:userId" element={<EditContactForm/>}/>
      <Route path="add" element={<AddContactForm/>}/>
    </Routes>
  </>
  );
}

export default App;

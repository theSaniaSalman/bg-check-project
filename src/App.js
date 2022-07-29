import {React, useState} from 'react';
import './App.css';
import AppBar from './Components/AppBar.js';
import SideMenu from './Components/SideMenu.js';
import UserDashboard from './Components/UserDashboard.js';
import RegistrationForm from './Components/RegistrationForm.js';
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";
import CountrySelector from './Components/CountrySelector';

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <UserDashboard />    
    </div>
  );
}

export default App;

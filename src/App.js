import {React, useState} from 'react';
import './App.css';
import Layout from './Layout';
import AppBar from './Components/AppBar.js';
import SideMenu from './Components/SideeMenu.js';
import RegistrationForm from './Components/RegistrationForm.js';
import 'react-phone-input-2/lib/style.css'
import ReactFlagsSelect from "react-flags-select";
import CountrySelector from './Components/CountrySelector';

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <SideMenu />    
    </div>
  );
}

export default App;

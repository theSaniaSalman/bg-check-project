import React, { useEffect, useState } from "react";
import logo from "../assets/bgcheck-logo.png";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { AttachEmail, Person, Logout } from '@mui/icons-material';
import  PendingActions from '@mui/icons-material/PendingActions';
import  NoteAdd from '@mui/icons-material/NoteAdd';

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    return(
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="Logo"></img>
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                   {inactive ? (<EastIcon/>) :  (<WestIcon/>)}
                </div>
            </div>

            <div className="search-controller">
                <Button variant="contained" className="search-btn">
                   <SearchIcon/>
                </Button>
                <input type="text" placeholder="Search..."></input>
            </div>

            <div className="divider">
                <div className="main-menu">
                    <ul>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                  <PendingActions sx={{mb:'-5px'}}/>
                                </div>
                                Requested Checks
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                <NoteAdd sx={{mb:'-5px'}}/>
                                </div>
                                Create New Request
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                <AttachEmail sx={{mb:'-5px'}}/>
                                </div>
                                Received Reports
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                    <Person sx={{mb:'-5px'}}/>
                                </div>
                                Profile
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                    <Logout sx={{mb:'-5px'}}/>
                                </div>
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
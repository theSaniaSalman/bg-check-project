import React, { useEffect, useState } from "react";
import logo from "../assets/bgcheck-logo.png";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

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

            </div>
        </div>
    )
}
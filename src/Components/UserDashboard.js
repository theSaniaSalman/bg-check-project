import * as React from 'react';
import SideBar from './SideMenu';
import ContentArea from './ContentArea';
import '../styles/dashboard.css';

// Like LAYOUT from Bulk-Reprints
const UserDashboard = () => {
    return(
        <>
        <div className="main">
            <SideBar/>
            <div className="content">
            <ContentArea/>
            </div>
        </div>
        </>
    )
}

export default UserDashboard;
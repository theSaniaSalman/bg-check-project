import * as React from 'react';
import AppBar from './AppBar';
import Breadcrumbs from './Breadcrumbs';
import SubmittedRequests from './SubmittedRequests';
import '../styles/dashboard.css';

// Like MAIN from Bulk-Reprints
const ContentArea = () => {
    return(
        <>
        <div className="content-box">          
          <AppBar/>
          <Breadcrumbs/>

          <div className="main-content-area">
          <SubmittedRequests/>
          </div>
        </div>
        </>
    )
}

export default ContentArea;
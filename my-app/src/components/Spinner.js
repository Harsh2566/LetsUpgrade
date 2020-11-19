import React from 'react';
import './Spinner.css'

const Spinner = () => 
    <div className="spinner-container">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>

export default Spinner
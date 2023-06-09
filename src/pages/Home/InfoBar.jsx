import React from 'react';
import './InfoBar.css'

const InfoBar = () => {
    return (
        <div className='InfoBar'>

            <div className='btn_Info'>اتصل بنا </div>
            <div className='btn_Info'>اماكن التصوير </div>
            <div className="btn-Info">
                <img src="/weddingicon.jpg" className='wedding-logo' />
            </div>

        </div>
    )
};

export default InfoBar;
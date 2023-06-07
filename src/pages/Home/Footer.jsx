import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <hr></hr>
            <div style={{ textAlign: 'center', fontSize: '2rem', fontFamily: 'timesnewroman' }}>Contact us </div >
            <div className="footer">
                <div className='icon'>
                    <img src="/Facebook.png" alt="Facebook" width={50} height={50} />
                </div>
                <div className='icon'>
                    <img src="/insta.png" alt="Instgram" width={50} height={50} />

                </div>
                <div className='icon'>
                    <img src="/twitter2.png" alt="Twitter" width={50} height={50} />

                </div>
                <div className='icon'>
                    <img src="/pint.png" alt="Pintrest" width={50} height={50} />

                </div>

                {/* <FontAwesomeIcon icon={faEnvelope} />
                <FontAwesomeIcon icon={faCoffee} /> */}
            </div>
        </>
    );
};

export default Footer;
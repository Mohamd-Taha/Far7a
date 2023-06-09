import React from 'react';
import './weddingHall.css'
// import '../Home/InfoBar.css'
import InfoBar from '../Home/InfoBar';
// import { Card } from 'reactstrap';
import Card from '../Home/card'



const WeddingHall = ({ name, hallImages, Packages }) => {
    const imageUrls = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300?random=1",
        "https://picsum.photos/200/300?random=2",
        "https://picsum.photos/200/300?random=3",
        "https://picsum.photos/200/300?random=4",
        "https://picsum.photos/200/300?random=3",
        "https://picsum.photos/200/300?random=4"
    ];

    const packageIcons = [
        "https://dummyimage.com/200x300/000/fff&text=1",
        "https://dummyimage.com/200x300/000/fff&text=2",
        "https://dummyimage.com/200x300/000/fff&text=3",
    ];
    return (
        <div className='container'>

            <div className="head">
                <div className="sticky2">
                    <InfoBar></InfoBar>
                </div>

            </div>

            <div className='weddingName'>

                ريدفلورز Red Flowers

            </div>
            <div className='slogan'>
                اتفرج وقرر واختار ... واحجز من مكانك

            </div>

            <div className="imageContainer">
                {imageUrls.map((url, index) => {
                    return <img className='hallImage' key={index} src={url}></img>
                })}
                {imageUrls.map((url, index) => {
                    return <img className='hallImage' key={index} src={url}></img>
                })}
            </div>
            {/* <hr></hr> */}
            <div style={{ textAlign: "center", fontFamily: 'Lateef', fontSize: '40px', marginTop: '200px', fontWeight: 'bold' }}>
                البرامج المتاحة لدى المكان الان

            </div>

            <div className="card-container2">

                {packageIcons.map((v, i) => {
                    return <Card image={`./package${i + 1}.jpg`}
                        title='عرض السعاده'
                        content='العرض يشمل 100 كرسى + 25 ترابيزه + 20 بيبسى' />
                })}
            </div>





        </div>
    );
};

export default WeddingHall;
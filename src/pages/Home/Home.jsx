import React from "react";
import Header from "./header";
import Header2 from "./Header2";
import InfoBar from "./InfoBar";
import Card from "./card";
import "./Home.css";
import Footer from "./Footer";
// import './card.css'

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            {/* <Header2></Header2> */}
            <div className="level1-container">
                <div className="InfoBar-container">
                    <InfoBar></InfoBar>
                </div>

                <div className="white-space1"></div>

                <div className="slogan-container">
                    <div className="slogan1">خلص فرحك من بيتك بسهولة</div>
                    <div className="slogan2">سهلنهالك .. علشان تفرح</div>
                </div>
                <div className="white-space1"></div>

                <div className="header">
                    <h2>اماكن تصوير Photo Session</h2>
                </div>

                <div className="card-group">
                    <Card
                        title="صن فلور Sun Flower
          "
                        image="/wedding.jpg"
                        content="الفيوم- قفاحه "
                    />
                    <Card
                        title="صن فلور Sun Flower
          "
                        image="/wedding.jpg"
                        content="الفيوم- قفاحه "
                    />
                    <Card
                        title="صن فلور Sun Flower
          "
                        image="/wedding.jpg"
                        content="الفيوم- قفاحه "
                    />
                    <Card
                        title="صن فلور Sun Flower
          "
                        image="/wedding.jpg"
                        content="الفيوم- قفاحه "
                    />
                    <Card
                        title="ريد فلورز Red Flowers
          "
                        image="/wedding.jpg"
                        content="الفيوم- قفاحه "
                    />
                    <Card
                        title="جيفورا Gefora
          "
                        image="/wedding.jpg"
                        content="الفيوم- قفاحه "
                    />
                </div>
                <br></br>
                <hr></hr>
                <Footer />

            </div>
        </div>
    );
};

export default Home;

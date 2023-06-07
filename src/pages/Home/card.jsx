import React from 'react';
import './card.css'
const Card = ({ image, title, content }) => {
    return (
        <div className='card-container' >

            <div className="card-image">
                <img src={image} alt="Location" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <p>{title}</p>
                </div>

                <div className="card-body">
                    <p> العنوان:{content}</p>
                </div>
            </div>


            <div className="card-btn">
                <button>
                    <a >
                        أعرف المزيد
                    </a>
                </button>

            </div>

        </div>
    );
};

export default Card;
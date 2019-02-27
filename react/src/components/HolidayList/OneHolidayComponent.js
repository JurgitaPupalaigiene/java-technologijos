import React from 'react';
import pic from './img/KingWear-KW06.jpg';
import './styles.css';

const OneHolidayComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src={pic} alt="poilsis" width="150px"></img>
                </div>
                <div className="col-3">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <p>{props.type}</p>
                    <p>flag: {props.flag}</p>
                </div>
            </div>
        </div>
    );
}

export default OneHolidayComponent;
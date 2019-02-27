import React from 'react';
import pic from '../HolidayList/img/KingWear-KW06.jpg';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const HolidayAdministrationLineComponent = (props) => {
    
    var linkas = "/admin/holidays/" + props.title;
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                <Link to={linkas}>{props.title}</Link> 
                    
                </div>
                <div className="col-2">
                    <img src={pic} alt="poilsis" width="50px"></img>
                </div>
                <div className="col-8">
                    <p>{props.description}</p>                    
                </div>
            </div>
        </div>
    );
    }


export default withRouter(HolidayAdministrationLineComponent);
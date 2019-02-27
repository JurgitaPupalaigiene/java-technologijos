import React from 'react';
import PropTypes from 'prop-types';
import pic from './img/KingWear-KW06.jpg';
import {Link} from 'react-router-dom';


const SventesKortelesKomponentas = (props) => {
    var linkas = "/holidays/" + props.title;
    return (
        // <div className="card" style={{ width: "18rem" }}>
        //     <img className="card-img-top" src={pic} alt="poilsis"></img>
        //     <div className="card-body">
        //         <h5 className="card-title">{props.title}</h5>
        //         <p className="card-text">{props.description}</p>
        //         <p className="card-text">Tipas: {props.type}</p>
        //         <p className="card-text">Veliavos iskelimas: {props.flag}</p>
        //         <Link className="btn btn-primary" to={linkas}>Apie svente daugiau</Link>
        //     </div>
        // </div>
//         );
// }
<div class="card-deck">
<div className="card">
    <img className="card-img-top" src={pic} alt="poilsis"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <p className="card-text">Veliava</p>
      <Link className="btn btn-primary" to={linkas}>Apie svente daugiau</Link>
    </div>
  </div>
  </div>
  );
  }
  







SventesKortelesKomponentas.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    flag: PropTypes.bool.isRequired
};

export default SventesKortelesKomponentas;
import React from 'react';
import { Link } from 'react-router-dom';

var PirmasPuslapis = (props) => {
    return (

        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to='/'>Pradzia</Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/admin'>Svenciu registras</Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/pagalba'>Pagalba</Link> |&nbsp;
                            </li>
                            <li className="nav-item active">
                                <Link to='/kontaktai'>Kontaktai</Link> |&nbsp;
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            {props.children}
        </div>);

};

export default PirmasPuslapis;


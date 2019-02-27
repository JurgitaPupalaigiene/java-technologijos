import React from 'react';
import HolidayAdministrationLineComponent from './HolidayAdministrationLineComponent';
import axios from 'axios';
import {Link} from 'react-router-dom';

class HolidayAdministrationListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: '',
            loading: 'Loading holidays. Please wait...'
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/holidays')
            .then((response) => {
                this.setState({ holidays: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.holidays) {
            const svenciuKortele = this.state.holidays.map((product, index) => {
                return (
                    <HolidayAdministrationLineComponent
                        key={index}
                        title={product.title}
                        image={product.image}
                        description={product.description}
                    />
                );
            });
            return (<div className="container">
                         <div className="row">
                         <Link className="btn btn-success" to="/admin/holidays/new">Prideti nauja svente</Link>
                         </div>
                         <div className="row">
                            <div className="col-2">
                                <p>Svente</p>
                            </div>
                            <div className="col-2">
                                <p>Nuotrauka</p>
                            </div>
                            <div className="col-8">
                                <p>Aprasymas</p>
                            </div>
                        </div>
                        <div className="row">{svenciuKortele}
                        </div>
                    </div>);
        }
        return this.state.loading;
    }
}

export default HolidayAdministrationListContainer;
import React from 'react';
import SventesKortelesKomponentas from './SventesKortelesKomponentas';
import axios from 'axios';

class SvenciuSarasas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holidays: '',
            loading: 'Visos sventes pakeliui. Prasome palaukti ...'
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
            const sventesKortele = this.state.holidays.map((holiday, index) => {
                return (
                    <SventesKortelesKomponentas
                        key={index}
                        title={holiday.title}
                        description={holiday.description}
                        image={holiday.image}  
                        type={holiday.type}
                        flag={holiday.flag}
                    />
                );
            });
            return (<div className="row">{sventesKortele}</div>);
        }
        return this.state.loading;
    }
}

export default SvenciuSarasas;
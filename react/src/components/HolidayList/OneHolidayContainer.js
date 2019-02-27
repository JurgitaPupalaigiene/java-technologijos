import React from 'react';
import OneHolidayComponent from './OneHolidayComponent';
import axios from 'axios';

class OneHolidayContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: "",
            description: '',
            type: '',
            flag: false   
        }; 
    }
    // handleAddToCart = (userName) => {      
    //     console.log("--------------vartotojo vardas yra " + userName);
    //     axios.post('http://localhost:8080/api/users/' + userName + '/cart-products', this.state)
        
    //         .then((response) => {
    //             console.log("Sėkminga" + response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    // handleChangeOfQuantity = (event) => {
    //     this.setState({ quantity: event.target.value });
    //     console.log(this.state.quantity);
    //   }
    componentDidMount() {
        const position = this.props.match.params.title;
        axios.get('http://localhost:8080/holidays/' + (position))
            .then((response) => {
                     this.setState({ 
                        title: response.data.title,
                        description: response.data.description,
                        type: response.data.type,
                        flag: response.data.flag
                }) 
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <OneHolidayComponent title={this.state.title}
                                    description={this.state.description}
                                    type={this.state.type}
                                    flag={this.state.flag}/>
                            </div>
        );
    }
}

export default OneHolidayContainer;
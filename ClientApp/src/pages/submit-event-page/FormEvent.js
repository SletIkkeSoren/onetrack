/*import React, { Component } from 'react';

import MandatoryForm from './MandatoryForm';
import OptionalForm from './OptionalForm';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {        
        step: 1,
        spilleSted: '',
        dato: '',
        pris: '',
        playTime: '',
        kapacitet: '',
        Genre: '',
        pris: '',
        backstageArea: '',
        catering: '',
        guestList: '',
        security: '',
        eventliability: ''
    }

    nextStep = () => { 
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => { 
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        /*const { spilleSted, dato, playTime, kapacitet, genre, pris, backstageArea, 
            catering, guestList, security, eventliability  } = this.state;
        const values = { spilleSted, dato, playTime, kapacitet, genre, pris, backstageArea, 
            catering, guestList, security, eventliability }
        const {spilleSted, dato, pris} = this.state;
        const values = {spilleSted, dato, pris}
        switch(step){
            case 1:
                return (
                    <MandatoryForm 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <OptionalForm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                   <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return <Success/>
        } 
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm;*/

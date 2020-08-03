/*import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from './../../components/datepicker/datepicker.js'

export class MandatoryForm extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Field 
                        hintText="Spillested"
                        floatingLabelText="Indtast spillested"
                        onChange={handleChange('spilleSted')}
                        defaultValue={values.spilleSted}
                    />
                    <br/>
                    <Field
                        type="date"
                        floatingLabelText="Dato"
                        onChange={handleChange('dato')}
                        defaultValue={values.dato}
                    />
                    <br/>
                    <Field 
                        hintText="Indtast spilletid"
                        floatingLabelText="Spilletid"
                        onChange={handleChange('playTime')}
                        defaultValue={values.playTime}
                    />
                    <br/>
                    <Field 
                        hintText="Indtast kapacitet"
                        floatingLabelText="Kapacitet"
                        onChange={handleChange('kapacitet')}
                        defaultValue={values.kapacitet}
                    />
                    <br/>
                    <Field 
                        hintText="Indtast Genre"
                        floatingLabelText="Genre"
                        onChange={handleChange('genre')}
                        defaultValue={values.genre}
                    />
                    <br/>
                    <Field 
                        hintText="Indtast Pris"
                        floatingLabelText="Pris"
                        onChange={handleChange('pris')}
                        defaultValue={values.pris}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default MandatoryForm;*/

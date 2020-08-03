/*import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Yderligere services</h1>
                    <TextField 
                        hintText="Backstage area"
                        floatingLabelText="Backstage area"
                        onChange={handleChange('backstageArea')}
                        defaultValue={values.backstageArea}
                    />
                    <br/>
                    <TextField 
                        hintText="Catering"
                        floatingLabelText="Catering"
                        onChange={handleChange('catering')}
                        defaultValue={values.catering}
                    />
                    <br/>
                    <TextField 
                        hintText="Gæsteliste"
                        floatingLabelText="Gæsteliste"
                        onChange={handleChange('guestList')}
                        defaultValue={values.guestList}
                    />
                    <br/>
                    <TextField 
                        hintText="Security"
                        floatingLabelText="Security"
                        onChange={handleChange('security')}
                        defaultValue={values.security}
                    />
                    <br/>
                    <TextField 
                        hintText="Eventliability"
                        floatingLabelText="Eventliability"
                        onChange={handleChange('eventliability')}
                        defaultValue={values.eventliability}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        //style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        //style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;*/

/*import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }

    handleSubmit = async e => {
        e.preventDefault();
    
        axios.post('/event', {
            spilleSted: 'TEST',
            Dato: '17-10-1993',
            Pris: '1000'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { spilleSted, dato, playTime, kapacitet, 
            genre, pris, backstageArea, 
            catering, guestList, security, eventliability } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h1>Bekræft event info</h1>
                    <List>
                        <ListItem 
                            primaryText="SpilleSted"
                            secondaryText={spilleSted}
                        />
                        <ListItem
                            primaryText="Dato"
                            secondaryText={ dato }
                        />
                        <ListItem
                            primaryText="Spilletid"
                            secondaryText={ playTime }
                        />
                        <ListItem
                            primaryText="Kapacitet"
                            secondaryText={ kapacitet }
                        />
                        <ListItem
                            primaryText="Genre"
                            secondaryText={ genre }
                        />
                        <ListItem
                            primaryText="Pris"
                            secondaryText={ pris }
                        />
                        <ListItem
                            primaryText="Backstage Area"
                            secondaryText={ backstageArea }
                        />
                        <ListItem
                            primaryText="Catering"
                            secondaryText={ catering }
                        />
                        <ListItem
                            primaryText="Gæsteliste"
                            secondaryText={ guestList }
                        />
                        <ListItem
                            primaryText="Security"
                            secondaryText={ security }
                        />
                        <ListItem
                            primaryText="Eventliability"
                            secondaryText={ eventliability }
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        //style={styles.button}
                        onClick={this.handleSubmit}
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

export default Confirm;*/

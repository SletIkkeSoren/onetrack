import React, { Component } from 'react';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import CustomButton from '../custom-button/custom-button.component';

import connect from 'react-redux';




class Profile extends Component {
    render() {
        const { classes, currentUser: { credentials: { handle, createdAt, displayName, imageUrl, 
            bio, email }, loading
            } 
        } = this.props
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: user.state.currentUser
});

Profile.PropTypes = {
    currentUser: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles)(Profile);

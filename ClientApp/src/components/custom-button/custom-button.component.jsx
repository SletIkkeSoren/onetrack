import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isFaceBookSignIn, secondaryButton, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : isFaceBookSignIn ? 'facebook-sign-in': secondaryButton ? 'secondary-button': ''} custom-button`}
    {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
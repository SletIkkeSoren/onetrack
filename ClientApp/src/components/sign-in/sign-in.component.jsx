import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: '',
      }
    }

    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        this.setState({ email: '', password: '' });
        console.log(error);
      }
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <div className='buttons'>
                <CustomButton type="submit"> Sign in </CustomButton>
            </div>                    
        </form>
        <div className='buttons'>
            <CustomButton onClick={signInWithFacebook} isFaceBookSignIn>
                Sign in with Facebook{' '} 
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google{' '} 
            </CustomButton>
        </div>
    </div>
    );
  }
}

export default SignIn;
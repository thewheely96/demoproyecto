import React, { Component } from 'react';
import './LoginSignUp.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class LoginSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignUpMode: false
    };
  }

  toggleMode = () => {
    this.setState({ isSignUpMode: !this.state.isSignUpMode });
  };

  render() {
  
    const iconStyle = { marginRight: '12px' };

    return (
      <div className={`login-signup-container ${this.state.isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="signin-signup">
          <form className={`sign-in-form ${this.state.isSignUpMode ? 'hidden' : ''}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle}/>
              <input type="text" placeholder= 'Enter your email' />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} style={iconStyle}/>
              <input type="password" placeholder='Enter your password' />
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            <input type="submit" value="Login" className="btn" />
            <p>
              Don't have an account? <Link to="/sign-up" className="account-text" onClick={this.toggleMode}>Sign Up</Link>
            </p>
          </form>
          <form className={`sign-up-form ${this.state.isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} style={iconStyle}/>
              <input type="text" placeholder= 'Enter your Name' />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} style={iconStyle}/>
              <input type="text" placeholder= 'Enter your email' />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} style={iconStyle}/>
              <input type="password" placeholder= 'Create a password' />
            </div>
            <input type="submit" value="Sign Up" className="btn" />
            <p>
              Already have an account? <Link to="/sign-up" className="account-text" onClick={this.toggleMode}>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginSignUp;

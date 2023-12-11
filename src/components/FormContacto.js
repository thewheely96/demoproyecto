import React, { Component } from 'react';
import './FormContacto.css';

class FormContacto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
      validationError: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.name && this.state.email && this.state.message) {
      this.setState({ submitted: true, validationError: false });
    } else {
      this.setState({ validationError: true });
    }
  };

  handleCloseValidationError = () => {
    this.setState({ validationError: false });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div>
          <p className='contact-final'>Thanks for your message {this.state.name}!</p>
        </div>
      );
    }

    return (
      <div className='contact-container'>
        <h2 className='contact-title'>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='contact-label'>
            Name
            <input
              className='contact-input'
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label className="contact-label">
            Email
            <input
              className='contact-input'
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label className="contact-label">
            Message
            <textarea
              className="contact-input"
              name='message'
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button className='contact-button' type='submit'>Send Message</button>
        </form>
        {this.state.validationError && (
          <div className="validation-error-dialog">
            <p className='error-final'>Please fill out all fields! </p>
          </div>
        )}
      </div>
    );
  }
}

export default FormContacto;

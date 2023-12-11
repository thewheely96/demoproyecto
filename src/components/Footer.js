import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

library.add(faFacebook, faInstagram, faXTwitter);

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    // Para subir inmediato a inicio!
    window.scrollTo(0, 0);
  }, [location]);

  const submitted = (event) => {
    const emailInput = document.getElementById('footer-email');
    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
      alert('Cheers for joining us!🥳');
    } else {
      alert('Please enter a valid email address');
    }
    event.preventDefault();
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
           Stay in the Glow, Subscribe to Our Beauty Newsletter.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={submitted}>
            <input
              id='footer-email'
              className='footer-input'
              placeholder='Your Email'
              type='email'
            />
            <button type='submit' className='subs-btn'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/testimonials'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <a href='https://api.whatsapp.com/send/?phone=573138552175' target='_blank' rel='noopener noreferrer'>
                Support
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            SkinU
            </Link>
          </div>
          <small className='website-rights'>Skin~U © 2023</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/paulparraw/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/BellinghamJude'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

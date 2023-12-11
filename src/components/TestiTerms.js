import React from 'react';
import YouTube from 'react-youtube';
import './TestiTerms.css';

const TestiTerms = () => {
  const videoId = 'RSQqe-ePxxc';

  return (
    <div className="testi-container">
      <h2>
        Testimonials
      </h2>
      <div className="videotesti-container">
        <YouTube videoId={videoId} />
      </div>
      <div className="terms-container">
        <h2>
          Terms and Conditions
        </h2>
        <ul>
          <li>
            a. You must be at least 18 years old to use this Site.
          </li>
          <li>
            b. You are responsible for maintaining the confidentiality of your account and password.
          </li>
          <li>
            c. You agree to use the Site for lawful purposes only and in a manner that does not violate any applicable laws or regulations.
          </li>
        </ul>
        <h2>
           Intellectual Property
        </h2>
        <ul>
          <li>
            a. All content on the Site, including text, graphics, logos, images, and software, is the property of SkinU and is protected by intellectual property laws.
          </li>
          <li>
            b. You may not use, reproduce, or distribute any content from the Site without our express written permission.
          </li>
        </ul>
        <h2>
            Privacy
        </h2>
        <ul>
          <li>
          a. Your use of the Site is also governed by our Privacy Policy, which can be found Uskin.
          </li>
          <li>
          b. By using the Site, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.
          </li>
        </ul>
        <h2>
        User Content
        </h2>
        <ul>
          <li>
          a. By submitting content to the Site, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
          </li>
        </ul>
        <h2>
        Links to Third-Party Websites
        </h2>
        <ul>
          <li>
          a. The Site may contain links to third-party websites. We are not responsible for the content, accuracy, or opinions expressed on such websites, and these websites are not investigated, monitored, or checked for accuracy or completeness.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TestiTerms;

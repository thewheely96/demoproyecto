import React from 'react'
import  '../../App.css'
import Footer from '../Footer';
import FormContacto from '../FormContacto';


export default function Contact() {
  return (
    
    <>
    <div className="contact">
      {/* Render the Cform component here */}
      <FormContacto/>
    </div>
    <Footer />
  </>
);
}
 
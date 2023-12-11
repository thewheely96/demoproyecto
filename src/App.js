import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Routines from './components/pages/Routines';
import LoginSignUp from './components/LoginSignUp';
import FormContacto from './components/FormContacto';
import Testimonials from './components/pages/Testimonials';
import Playlista from './components/pages/Playlista';
import TestiTerms from './components/TestiTerms';
import SkinType from './components/SkinType';
import SkinPage from './components/pages/SkinPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login-signup" element={<LoginSignUp />} />
          <Route path="/form-contacto" element={<FormContacto />} />
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="/playlista" element={<Playlista />}/>
          <Route path="/testiterms" element={<TestiTerms />}/>
          <Route path="/skintype" element={<SkinType/>}/>
          <Route path="/skinpage" element={<SkinPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './Skincare.css';
import YouTubePlaylistB from './YouTubePlaylistB'; 

class Skincare extends Component {
  render() {
    return (
      <div className='skincare-container'>
        <h2 className='skincare-title'>Skin Care Routines!</h2>
        <YouTubePlaylistB />
      </div>
    );
  }
}

export default Skincare;
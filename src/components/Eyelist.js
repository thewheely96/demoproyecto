import React, { Component } from 'react';
import './Eyelist.css';
import YouTubePlaylist from './YouTubePlaylist'; 

class Eyelist extends Component {
  render() {
    return (
      <div className='eyelist-container'>
        <h2 className='eyelist-title'>Eye Care</h2>
        <YouTubePlaylist />
      </div>
    );
  }
}

export default Eyelist;

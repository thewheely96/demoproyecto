import React, { useState, useEffect } from 'react';
import './YouTubePlaylistB.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function YouTubePlaylistB() {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const apiKey = 'AIzaSyAH-kEUYngIlbwG_8Ml__uSIfdeXpM1a_0'; 
  const playlistId = 'PLjsTExN55poKZe4I05WlDVThHs0GIydel';

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []); 

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, videos.length - 1));
  };

  return (
    <div className="youtube-playlistB">
      <h3 className="playlist-titleB">Our Recommended Playlist</h3>
      <div className="videos-containerB">
        {videos.length > 0 && (
          <iframe
            title={videos[currentIndex].snippet.title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videos[currentIndex].snippet.resourceId.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        <div className="prev-next-buttonsB">
        <button className="prev-next-buttonB" onClick={handlePrevClick} disabled={currentIndex === 0}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <button className="prev-next-buttonB" onClick={handleNextClick} disabled={currentIndex === videos.length - 1}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
        </div>
      </div>

      
      
    </div>
  );
}

export default YouTubePlaylistB;

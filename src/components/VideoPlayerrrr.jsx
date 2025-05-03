import { useState, useEffect, useRef } from 'react';
import './VideoPlayer.css'; // استدعاء ملف CSS المفصول

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtubeVideo', {
        videoId: '7MHN_u97SxM',
        events: {
          onReady: () => {
            if (isPlaying) playerRef.current.playVideo();
            else playerRef.current.pauseVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    };
  }, [isPlaying]);

  const toggleVideo = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div id="youtubeVideo" className="video-background"></div>

      <div className="video-overlay">
        <h1>Night of Christmas</h1>
        <p>
        The Queen of Hearts has outlawed Christmas. As a child, the white rabbit missed her gift. Years later, Father Christmas receives the lost letter and voyages to Wonderland. With the help of curious young Alice, can Christmas be saved?        </p>
        <button onClick={toggleVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
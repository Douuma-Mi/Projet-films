import { useState, useEffect, useRef } from 'react';
import './VideoPlayer.css';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtubeVideo', {
        videoId: 'd3SsV05mysg',
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
        <h1>Land Shark</h1>
        <p>
          Lucinda Regis, Director of Development at MALCO Oceanic Research, becomes the target of a dangerous killer after unraveling a sinister plot to inject sharks with human DNA.
        </p>
        <button onClick={toggleVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
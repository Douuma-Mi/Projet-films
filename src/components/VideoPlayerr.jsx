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
        videoId: 'wrFsapf0Enk',
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
        <h1>Kaizen</h1>
        <p>
        Become a mountaineer and climb Everest in 1 year to the day? That's the dream of Inoxtag, a 21-year-old Youtuber who doesn't practice any sport. By following him for 1 year, we discover in this documentary how he changed his life to achieve this dream.
        </p>
        <button onClick={toggleVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
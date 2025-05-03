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
        videoId: '0WZo1rDSh-k',
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
        <h1>Le Sang du Cartel</h1>
        <p>
        Lucas, 14 ans, est un gamin des rues de Washington, sous la coupe d'un baron de la drogue chef de gang. Il espère que son petit frère soit épargné, mais il n'en est rien. Lorsqu'ils voient débarquer un vétéran de l'Afghanistan dans le quartier, ils saisissent l'opportunité qui s'offre à eux en la personne de Daniel, qui a des mandales à revendre.        </p>
        <button onClick={toggleVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
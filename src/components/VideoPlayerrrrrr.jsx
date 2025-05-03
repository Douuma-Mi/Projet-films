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
        videoId: 'KQYZ1aFlUe4', // ✅ بدون &t
        events: {
          onReady: () => {
            playerRef.current.seekTo(10); // ⏱️ يبدأ من الثانية 10
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
        <h1>Scream</h1>
        <p>
          Un an après le meurtre de sa mère, une adolescente est terrorisée par un nouveau meurtrier qui la cible, ainsi que ses amis, en utilisant des films d'horreur dans le cadre d'un jeu meurtrier.
        </p>
        <button onClick={toggleVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
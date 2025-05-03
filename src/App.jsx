import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import VideoPlayer from './components/VideoPlayer';
import VideoPlayerr from './components/VideoPlayerr';
import VideoPlayerrr from './components/VideoPlayerrr';
import VideoPlayerrrr from './components/VideoPlayerrrr';
import VideoPlayerrrrr from './components/VideoPlayerrrrr';
import VideoPlayerrrrrr from './components/VideoPlayerrrrrr';
import CardStack from './components/CardStack';
import Login from './components/Login';

import "./App.css"

function App() {
  const [count, setCount] = useState(0);

  return (
  
      <Routes>
        <Route path="/" element={<CardStack />} />
        <Route path="/Slider" element={<Slider />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/film1" element={<VideoPlayer />} />
        <Route path="/film2" element={<VideoPlayerr />} />
        <Route path="/film3" element={<VideoPlayerrr />} />
        <Route path="/film4" element={<VideoPlayerrrr />} />
        <Route path="/film5" element={<VideoPlayerrrrr />} />
        <Route path="/film6" element={<VideoPlayerrrrrr />} />
      </Routes>
    
  );
}

export default App;
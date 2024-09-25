import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HLSPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef.current) {
      const hls = new Hls();
      // Load the HLS manifest file from your Node.js backend
      hls.loadSource('http://localhost:3001/videos/stream.m3u8');
      hls.attachMedia(videoRef.current);
    }
  }, []);

  return (
    <div>
      <h1>HLS Video Player</h1>
      <video ref={videoRef} controls width="600"></video>
    </div>
  );
};

export default HLSPlayer;

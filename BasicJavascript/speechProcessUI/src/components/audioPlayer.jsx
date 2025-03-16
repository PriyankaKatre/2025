import React, { useEffect, useRef } from 'react';

// Simple Audio Player Component
const AudioPlayer = ({ audioRef, onTimeUpdate }) => {
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    onTimeUpdate(currentTime); // Notify parent of the current audio time
  };

  return (
    <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} controls>
      <source src="your-audio-file.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;

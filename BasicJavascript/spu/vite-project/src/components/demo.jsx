import React from 'react';
import audio from '../data/p_28987038_576.mp3'

// Simple Audio Player Component
export const AudioPlayer = ({ audioRef, onProgress }) => {
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    onProgress(currentTime);
  };

  return (
    <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} controls>
      <source src={audio} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

// Main App Component


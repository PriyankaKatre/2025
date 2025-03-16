import React from 'react';
import ReactPlayer from 'react-player';
import './styles/index.css';

const AudioPlayer = (props) => {
  const { audioURL, onProgress, onPlay, onPause, audioRef } = props;

  return (
    <ReactPlayer
      url={audioURL}
      ref={audioRef}
      onProgress={onProgress}
      onPlay={onPlay}
      onPause={onPause}
      className="audio-player"
      progressInterval={250}
      width="100%"
      height="54px"
      controls
      config={{
        file: {
          attributes: {
            controlsList: 'nodownload noPlaybackRate',
          },
        },
      }}
    />
  );
};

export default AudioPlayer;

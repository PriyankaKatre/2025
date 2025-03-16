import  React from 'react';
import { useState, useRef, useEffect } from 'react';
import audio from './data/p_28987038_576.mp3';
import transcriptData  from './data/data.json';

const App = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('timeupdate', updateTime);
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, []);

  const isWordHighlighted = (wordStartTime, wordEndTime) => {
    return currentTime >= wordStartTime && currentTime < wordEndTime;
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {transcriptData.sessions[0].sourceName}
      </h1>
      <audio ref={audioRef} controls className="w-full mb-4">
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className="transcript">
        {transcriptData.sessions[0].sentences.map((sentence, index) => (
          <div key={index} className="mb-2">
            {sentence.tokens.map((token, tokenIndex) => {
              const wordEndTime = token.startTime + token.duration;
              return (
                <span
                  key={tokenIndex}
                  className={`word ${
                    isWordHighlighted(token.startTime, wordEndTime)
                      ? 'bg-yellow-300'
                      : ''
                  }`}
                >
                  {(tokenIndex > 0 ? ' ' : '') + token.word}
                </span>
              );
            })}
            {sentence.isParagraphEnd && <br />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

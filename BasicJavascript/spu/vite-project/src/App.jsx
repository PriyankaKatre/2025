import React, { useState, useRef } from 'react';
import { AudioPlayer } from './components/demo';


const App = () => {
  const [playedTime, setPlayedTime] = useState(0);
  const audioRef = useRef(null);

  const transcripts = [
    {
      startTime: 0,
      endTime: 5,
      text: 'Improving an existing quality control tool which is being used by back-office users of a stock exchange and financial information company. This tool validates the data coming from various sources and generates alerts if data doesn’t meet the criteria defined in the algorithms.',
    },
    {
      startTime: 6,
      endTime: 10,
      text: 'This is the second part of the transcript.',
    },
    {
      startTime: 11,
      endTime: 15,
      text: 'This is the third part of the transcript.',
    },
  ];

  const onProgress = (currentTime) => {
    setPlayedTime(currentTime);
  };

  const getHighlightedTranscriptIndex = () => {
    for (let i = 0; i < transcripts.length; i++) {
      const transcript = transcripts[i];
      if (
        transcript.startTime <= playedTime &&
        transcript.endTime >= playedTime
      ) {
        return i;
      }
    }
    return -1;
  };

    const highlightedIndex = getHighlightedTranscriptIndex();
    console.log('highlightedIndex', highlightedIndex);

  return (
    <div>
      <AudioPlayer audioRef={audioRef} onProgress={onProgress} />

      <div className="transcripts">
        {transcripts.map((transcript, idx) => (
          <div
            key={idx}
            className={`transcript ${
              highlightedIndex === idx ? 'highlighted' : ''
            }`}
          >
            {transcript.text}
          </div>
        ))}
      </div>

      <div>Current Audio Time: {Math.floor(playedTime)} seconds</div>
    </div>
  );
};

export default App;

// import './App.css'
// import FileUpload from './components/fileUpload';
// import FileUpload1 from './components/fileUpload1';

// function App() {
//   return (
//     <>
//         {/* <FileUpload />
//         <FileUpload1 /> */}
//     </>
//   )
// }

// export default App

import React from 'react';

import fetchData from '../commons/fetchData';
import './styles/index.css';
import Sentence from './sentence';

const Transcript = (props) => {
  const {
    filename,
    transcriptIndex,
    content: { sessions = [], sourceName } = {},
    refreshData,
    setLoader,
    playedSeconds,
    clickCallback,
  } = props;

  const { sentences, speakers } = sessions[0] || {}; // Default to empty object if sessions is empty

  let speakersMap = {};

  if (speakers && speakers.length) {
    speakers.forEach((speaker, idx) => {
      speakersMap[speaker.id] = {
        name: speaker.name,
        idx,
      };
    });
  }

  const handleClose = (filename) => {
    setLoader(true);
    fetchData(`/api/delete?filename=${filename}`).then((res) => {
      if (res.status === 'success') {
        refreshData();
      }
    });
  };

  const getSentence = (type, sentence, token, idx) => {
    if (type === 'sentence') {
      return (
        <Sentence
          playedSeconds={playedSeconds}
          className={type}
          clickCallback={clickCallback}
          endTime={sentence.startTime + sentence.duration}
          {...sentence}
        />
      );
    }

    if (type === 'word') {
      return (
        <Sentence
          playedSeconds={playedSeconds}
          className={type}
          clickCallback={clickCallback}
          sentencestart={sentence.startTime}
          sentenceEnd={sentence.startTime + sentence.duration}
          endTime={token.startTime + token.duration}
          key={idx}
          {...token}
        />
      );
    }
  };

  return (
    <div className="transcript">
      <div className="source-name">
        {sourceName}
        <ef-icon
          icon="cross-circle"
          data-id={filename}
          className="icon"
          onClick={() => handleClose(filename)}
        ></ef-icon>
      </div>

      <div className="sentences-holder">
        {sentences &&
          sentences.map((sentence, idx, arr) => {
            const prevSpeakerId = idx > 0 && arr[idx - 1]?.speakerId;
            const currentSpeaker =
              sentence.speakerId && speakersMap[sentence.speakerId];

            return (
              <React.Fragment key={`${transcriptIndex}-${idx}`}>
                {currentSpeaker?.name}
                {currentSpeaker && sentence.speakerId !== prevSpeakerId && (
                  <span
                    className={`text speaker p-${currentSpeaker.idx}`}
                  ></span>
                )}
                {sentence.tokens &&
                  sentence.tokens.map((token, cidx) =>
                    getSentence('word', sentence, token, cidx)
                  )}
                {sentence.tokens && getSentence('sentence', sentence)}
                {sentence.isParagraphEnd && <span className="text lb"></span>}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Transcript;

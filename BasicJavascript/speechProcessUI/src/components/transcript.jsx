import React from 'react';

const Transcript = ({ sentences, playedSeconds, clickCallback }) => {
  // Function to highlight the sentence/word based on audio time
  const isSentenceHighlighted = (sentence) => {
    const sentenceStart = sentence.startTime;
    const sentenceEnd = sentence.startTime + sentence.duration;
    return playedSeconds >= sentenceStart && playedSeconds <= sentenceEnd;
  };

  const isWordHighlighted = (word, sentenceStartTime) => {
    const wordStart = word.startTime + sentenceStartTime;
    const wordEnd = wordStart + word.duration;
    return playedSeconds >= wordStart && playedSeconds <= wordEnd;
  };

  return (
    <div className="transcript">
      {sentences.map((sentence, idx) => (
        <div key={idx}>
          <div
            className={`sentence ${
              isSentenceHighlighted(sentence) ? 'highlighted' : ''
            }`}
          >
            {sentence.tokens.map((token, tokenIdx) => (
              <span
                key={tokenIdx}
                className={`word ${
                  isWordHighlighted(token, sentence.startTime)
                    ? 'highlighted'
                    : ''
                }`}
                onClick={(e) => clickCallback(e)}
              >
                {token.word}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transcript;

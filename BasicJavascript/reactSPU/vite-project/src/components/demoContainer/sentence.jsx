import React, { useEffect, useState, useRef } from 'react';

const Sentence = (props) => {
  const [status, setStatus] = useState('');
  const [isSentenceActive, setSentenceActive] = useState(false);
  const container = useRef(null);

  const {
    startTime,
    endTime,
    sentencestart,
    sentenceEnd,
    playedSeconds,
    text,
    className = '',
    clickCallback,
  } = props;

  useEffect(() => {
    if (playedSeconds >= startTime && playedSeconds <= endTime) {
      setStatus('active');
    } else if (status === 'active') {
      setStatus('');
    }

    if (playedSeconds >= sentencestart && playedSeconds <= sentenceEnd) {
      setSentenceActive(true);
    } else if (isSentenceActive) {
      setSentenceActive(false);
    }
  }, [
    playedSeconds,
    startTime,
    endTime,
    sentencestart,
    sentenceEnd,
    status,
    isSentenceActive,
  ]);

  useEffect(() => {
    const { current } = container;

    if (status === 'active' && current) {
      const currentRect = current.getBoundingClientRect();
      const parent = current.parentElement;
      const containerRect = parent.getBoundingClientRect();

      if (
        currentRect.top - 20 < containerRect.top ||
        currentRect.bottom + 28 > containerRect.bottom
      ) {
        parent.scrollTo({
          top: current.offsetTop - parent.clientHeight / 2 + 20,
          behavior: 'smooth',
        });
      }
    }
  }, [status]);

  return (
    <span
      ref={container}
      data-starttime={startTime + 1}
      onClick={clickCallback}
      className={`${className} ${status} ${
        isSentenceActive ? 'sentence-active' : ''
      }`}
      dangerouslySetInnerHTML={{ __html: `${text}&nbsp;` }}
    />
  );
};

export default Sentence;

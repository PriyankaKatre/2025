import React, { Fragment, useState, useEffect} from 'react';

function Solution() {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() =>{
    let timer;
    if(isActive && !isPaused) {
      timer = setInterval(() =>{
        if(seconds > 0) {
          setSeconds(seconds -1);
        } else if(seconds === 0) {
          if(minutes === 0) {
            clearInterval(timer);
            setIsActive(false);
          } else {
            setMinutes(minutes-1);
            setSeconds(59)
          }
        }
      }, 1000)
    }
    return () => clearInterval(timer);

  } ,[isActive, isPaused, minutes, seconds])

  const handleStart = () => {
    const totalSeconds = Number(inputMinutes) * 60 + Number(inputSeconds);

    setMinutes(Math.floor(totalSeconds / 60))
    setSeconds(totalSeconds % 60)
    setIsActive(true);
    setIsPaused(false)
  }

  const handlePauseResume = () =>{
    setIsPaused(!isPaused)
  }

  const handleReset = () =>{
    setIsPaused(false);
    setIsActive(false);
    setSeconds(0);
    setMinutes(0)
    setInputMinutes(0);
    setInputSeconds(0)
  }

  return (
    <Fragment>
      <label>
        <input
        type="number"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(Number(e.target.value))}
        placeholder = 'Minutes'
        />
        Minutes
      </label>
      <label>
        <input
        type="number"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(Number(e.target.value))}
        placeholder = 'Seconds'
        />
        Seconds
      </label>

      <button onClick={handleStart}>START</button>
      <button onClick={handlePauseResume}>PAUSE / RESUME</button>
      <button onClick={handleReset}> RESET</button>

      <h1 data-testid="running-clock">
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </Fragment>
  );
}

export default Solution;

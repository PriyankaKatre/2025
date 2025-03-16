import React, { useState, useEffect, useRef } from 'react';
// import fetchData from '../commons/fetchData';
import { useNavigate } from 'react-router-dom';

import RefreshButton from './refreshButton';
import Fileupload from './fileupload';

import InlineMessages from './inlineMessages';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/index.css';
import AudioPlayer from '../audioPlayer';
import Transcript from './transcript';

const DemoContainer = (props) => {
  const [mainslider, setMainSlider] = useState();
  const [thumbnailslider, setThumbnailSlider] = useState();
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const toggleThumbnail = () => {
    setIsOpened(!isOpened);
  };

  const refreshData = (cb) => {
    fetchData('http://localhost:5000/api/read').then((res) => {
      if (res.transcripts.length === 0 && res.audioURL) {
        navigate('/', { replace: true });
        return;
      }
      setLoader(false);
      setData(res);
      cb && cb();
      thumbnailslider?.slickNext();
    });
  };

  const onProgress = ({ playedSeconds }) => {
    const playedMilliseconds = playedSeconds * 1000;
    setPlayedSeconds(playedMilliseconds);
  };

  const clickCallback = (evt) => {
    const { dataset: { starttime } = {} } = evt.target;
    if (starttime && audioRef && audioRef.current) {
      const seekSeconds = Number(starttime) / 1000;
      audioRef.current.seekTo(seekSeconds, 'seconds');
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const { transcripts, audioURL } = data;

  const LeftMavButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <ef-icon class="large" icon="left"></ef-icon>
      </div>
    );
  };

  const RightMaveButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <ef-icon class="large" icon="right"></ef-icon>
      </div>
    );
  };

  const mainsliderSettings = {
    asNavFor: thumbnailslider,
    slidesToShow: transcripts && transcripts.length === 1 ? 1 : 2,
    slidesToScroll: 2,
    arrows: true,
    infinite: false,
    prevArrow: <LeftMavButton />,
    nextArrow: <RightMaveButton />,
  };

  const thumbnailsliderSettings = {
    asNavFor: mainslider,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    infinite: false,
    prevArrow: <LeftMavButton />,
    nextArrow: <RightMaveButton />,
  };

  return (
    <div className="demo-container">
      {loader && <ef-loader></ef-loader>}
      {transcripts && transcripts.length > 0 && (
        <div className="transcripts">
          <Slider
            ref={(mainSlider) => setMainSlider(mainSlider)}
            {...mainsliderSettings}
          >
            {transcripts.map((transcript, idx) => (
              <Transcript
                key={idx}
                transcriptIndex={idx}
                clickCallback={clickCallback}
                setLoader={setLoader}
                playedSeconds={playedSeconds}
                refreshData={refreshData}
                {...transcript}
              />
            ))}
          </Slider>
        </div>
      )}
      {transcripts && transcripts.length > 2 && isOpened && (
        <div className="thumbnail-slider">
          <Slider
            ref={(thumbnailslider) => setThumbnailSlider(thumbnailslider)}
            {...thumbnailsliderSettings}
          >
            {transcripts.map((transcript, idx) => (
              <div key={idx} className="thumbnail-wrapper">
                <div className="thighmbnail"></div>
                <div className="caption">{transcript.content.sourceName}</div>
              </div>
            ))}
          </Slider>
        </div>
      )}
      {transcripts && transcripts.length === 0 && (
        <InlineMessages message="You have not uploaded any transcripts yet, please upload them to test." />
      )}
      <div className="player-section">
        <div className="show-hide-thumb">
          {transcripts && transcripts.length > 2 ? (
            isOpened ? (
              <ef-icon
                class="large"
                icon="down"
                onClick={toggleThumbnail}
              ></ef-icon>
            ) : (
              <ef-icon
                class="large"
                icon="up"
                onClick={toggleThumbnail}
              ></ef-icon>
            )
          ) : null}
        </div>
        <div className="button-wrapper">
          <Fileupload setLoader={setLoader} refreshData={refreshData} />
          <RefreshButton setLoader={setLoader} />
        </div>
        {audioURL && (
          <div className="audio-section">
            <h6>{audioURL.replace('/', '')}</h6>
            <AudioPlayer
              audioURL={audioURL}
              audioRef={audioRef}
              onProgress={onProgress}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoContainer;

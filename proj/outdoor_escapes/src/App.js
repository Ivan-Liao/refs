import React, {useState, useEffect} from 'react';
import './App.css';
import YoutubeCarousel from './components/YoutubeCarousel';
import SearchBar from './components/SearchBar';
import dataHardcopy from './machathon_data3.json';

function App() {
  // use states
  const [videoList, setVideoList] = useState(dataHardcopy);
  const [curVideo, setCurVideo] = useState(0);
  
  // effects
  useEffect(() => {
    newVideoHandler();
  }, [curVideo]);

  function newVideoHandler() {
    return
  }
  return (
    <React.Fragment>
      <SearchBar />
      <YoutubeCarousel videoList={videoList} setVideoList={setVideoList} curVideo={curVideo} setCurVideo={setCurVideo}/>
    </React.Fragment>
  );
}

export default App;

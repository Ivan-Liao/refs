import React, {useState} from 'react';
import './App.css';
import YoutubeCarousel from './components/YoutubeCarousel';
import SearchBar from './components/SearchBar';
import dataHardcopy from './machathon_data3.json';

function App() {
  // use states
  const [videoList, setVideoList] = useState(dataHardcopy);

  return (
    <React.Fragment>
      <SearchBar />
      <YoutubeCarousel videoList={videoList} setVideoList={setVideoList}/>
    </React.Fragment>
  );
}

export default App;

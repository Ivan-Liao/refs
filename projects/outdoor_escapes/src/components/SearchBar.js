import React, {useEffect} from 'react';
import {Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap';
import bannerLeft from '../images/banner_left.png';
import bannerRight from '../images/banner_right.png';
import algoliasearch from 'algoliasearch/lite.js';

// initializations
const client = algoliasearch('71ND6GE7DV', 'bfe4f364e91f5e23093bed8d61bd47d1');
const index = client.initIndex('dev_yt_videos');

function SearchBar ({videoList, setVideoList, setCurVideo, dataHardcopy}) {
  
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        algoliaSearchHandler();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);  

  function algoliaSearchHandler() {
    setCurVideo(0);
    var searchTerms=document.getElementById('search-input').value;
    index.search(searchTerms).then(({hits}) => {
      if (hits.length > 0) {
        setVideoList(hits);
      }
    });
  }
  function algoliaRandomHandler() {
    setVideoList(dataHardcopy);
    setCurVideo(Math.floor(Math.random() * (Object.keys(videoList).length - 1)));
  }
  return (
      <Row>
        <Col md={2}>
          <img className="banner-icons" src={bannerLeft}></img>
        </Col>
        <Col md={7}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>
                Search
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="search-input" placeholder="mountain, ocean, Venice, china, penguin...">
            </FormControl>
            <Button onClick={algoliaSearchHandler} className="go-button" variant="primary">Go</Button>
            <Button onClick={algoliaRandomHandler} className="go-button" variant="primary">Surprise Me!</Button>
          </InputGroup>
        </Col>
        <Col md={2}>
          <img className="banner-icons" src={bannerRight}></img>
        </Col>
      </Row>
  )
}

export default SearchBar;
import React from 'react';
import {Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap';
import bannerLeft from '../images/banner_left.png';
import bannerRight from '../images/banner_right.png';
import algoliasearch from 'algoliasearch/lite.js';

// initializations
const client = algoliasearch('71ND6GE7DV', 'bfe4f364e91f5e23093bed8d61bd47d1');
const index = client.initIndex('dev_yt_videos');

function SearchBar ({videoList, setVideoList}) {
  function algoliaSearchHandler() {
    var searchTerms=document.getElementById('search-input').value;
    index.search(searchTerms).then(({hits}) => {
      if (hits.length > 0) {
        setVideoList(hits);
      }
    });
  }
  function algoliaRandomHandler() {
    return
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
            <FormControl id="search-input" placeholder="mountain, sea, Venice, china, penguin...">
            </FormControl>
            <Button onClick={algoliaSearchHandler} className="go-button" variant="primary">Go</Button>
          </InputGroup>
        </Col>
        <Col md={2}>
          <img className="banner-icons" src={bannerRight}></img>
        </Col>
      </Row>
  )
}

export default SearchBar;
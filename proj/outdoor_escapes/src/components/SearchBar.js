import React from 'react';
import {Row, Col, FormControl, InputGroup, Button} from 'react-bootstrap';
import bannerLeft from '../images/banner_left.png';
import bannerRight from '../images/banner_right.png';

function SearchBar () {
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
            <FormControl placeholder="mountains, sea, Venice...">
            </FormControl>
            <Button className="surprise-button" variant="primary">Go</Button>
          </InputGroup>
        </Col>
        <Col md={2}>
          <img className="banner-icons" src={bannerRight}></img>
        </Col>
      </Row>
  )
}

export default SearchBar;
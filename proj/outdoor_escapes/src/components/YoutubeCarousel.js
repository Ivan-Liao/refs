import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo.js';
import previousIcon from '../images/goprevious.png';
import nextIcon from '../images/gonext.png';


function YoutubeCarousel({videoList, setVideoList, curVideo, setCurVideo}) {
  return (
    <div className="video">
      <Row>
        <Col md={1}>
          <Button className="prev-button"><img className="prev-button-img" src={previousIcon}></img></Button>
        </Col>
        <Col md={10}>
          {videoList.map((data, key) => (<YoutubeVideo 
          title={data.title}
          id={data.id}
          viewCount={data.viewCount}
          likeRatio={data.likeRatio}
          key={key} />))}
        </Col>
        <Col md={1}>
          <Button className="next-button"><img className="next-button-img"   src={nextIcon}></img></Button>
        </Col>
      </Row>
    </div>
  )
}
export default YoutubeCarousel;
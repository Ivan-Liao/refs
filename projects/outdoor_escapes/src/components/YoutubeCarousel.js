import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import previousIcon from '../images/goprevious.png';
import nextIcon from '../images/gonext.png';


function YoutubeCarousel({videoList, setVideoList, curVideo, setCurVideo}) {
  
  function prevButtonHandler() {
    if (curVideo > 0) {
      setCurVideo(curVideo-1)
    }
  }

  function nextButtonHandler() {
    if (curVideo < Object.keys(videoList).length - 1) {
      setCurVideo(curVideo+1)
    }
  }
  return (
    <div className="video">
      <Row>
        <Col md={1}>
          <Button className="prev-button" onClick={prevButtonHandler}><img className="prev-button-img" src={previousIcon}></img></Button>
        </Col>
        <Col md={10}>
          <Container>
            <Row>
              <div className="wrapper">
                <div className="h_iframe">
                  <img className="ratio" src="http://placehold.it/16x9"/>
                  <iframe className="d-block w-100" height="540" width="960" src={"https://www.youtube.com/embed/"+videoList[curVideo].id} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            </Row>
            <Row>
              <Col md={6}>
                <p className="yt-title">{videoList[curVideo].title}</p>
              </Col>
              <Col>
                <p>Views: {videoList[curVideo].viewCount} </p>
              </Col>
              <Col>
                <p>Like Ratio: {''+Number.parseFloat(videoList[curVideo].likeRatio).toPrecision(2)} </p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={1}>
          <Button className="next-button" onClick={nextButtonHandler}><img className="next-button-img"   src={nextIcon}></img></Button>
        </Col>
      </Row>
    </div>
  )
}
export default YoutubeCarousel;
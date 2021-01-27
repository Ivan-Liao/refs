import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function YoutubeVideo( {title, id, viewCount, likeRatio}) {
  return (
    <Container>
      <Row>
        <div class="wrapper">
          <div class="h_iframe">
            <img class="ratio" src="http://placehold.it/16x9"/>
            <iframe className="d-block w-100" height="540" width="960" src={"https://www.youtube.com/embed/"+id} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={8}>
          <p className="yt-title">{title}</p>
        </Col>
        <Col>
          <p>Views: {viewCount} </p>
        </Col>
        <Col>
          <p>Like Ratio: {''+Number.parseFloat(likeRatio).toPrecision(2)} </p>
        </Col>
      </Row>
    </Container>
  )
}
export default YoutubeVideo;

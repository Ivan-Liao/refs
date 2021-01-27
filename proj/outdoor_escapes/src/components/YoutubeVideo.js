import React from 'react';
import {Carousel} from 'react-bootstrap';

function YoutubeVideo( {title, id, viewCount, likeRatio}) {
  return (
    <Carousel.Item>
      <div>
        <div className="wrapper">
          <div className="h_iframe">
              <iframe height="1" width="1" src={"https://www.youtube.com/embed/"+id} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <p className="yt-title">{title}</p>
        <p>Views: {viewCount} &nbsp;&nbsp;&nbsp;&nbsp; Like Ratio: {''+likeRatio} </p>
      </div>
    </Carousel.Item>
  )
}
export default YoutubeVideo;

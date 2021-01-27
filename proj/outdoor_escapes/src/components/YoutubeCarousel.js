import React from 'react';
import {Carousel} from 'react-bootstrap';
import YoutubeVideo from './YoutubeVideo.js';

function YoutubeCarousel({videoList, setVideoList}) {
  return (
    <Carousel>
      {videoList.map((data, key) => (<YoutubeVideo 
      title={data.title}
      id={data.id}
      viewCount={data.viewCount}
      likeRatio={data.likeRatio}
      key={key} />))}
    </Carousel>
  )
}
export default YoutubeCarousel;
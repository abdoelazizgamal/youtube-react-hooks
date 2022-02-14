import React from 'react';
import VideoItem from "./VideoItem"
const VideoList = ({ videos, onSelectVideo }) => {
  const RenderedList = videos.map((video, index) => {
    return <VideoItem video={video} key={index} onSelectVideo=
      {onSelectVideo} />
  })
  return (
    <div className='ui relaxed divided list '>
      {RenderedList}
    </div>
  );
}

export default VideoList;
import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return (
      <div>loading...</div>
    );
  }
  console.log(video.id.videoId);
  const YoutubeLink = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={YoutubeLink} title={video.snippet.title} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'> {video.snippet.title} </h4>
        <p> {video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetails;
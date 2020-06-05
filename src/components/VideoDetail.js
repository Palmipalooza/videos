import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return null; // <div>Loading...</div>
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;

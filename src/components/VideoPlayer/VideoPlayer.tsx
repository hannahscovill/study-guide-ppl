// import ReactPlayer from "react-player";

// const VideoPlayer = ({ src }: { src: string }) => {
//     return (<ReactPlayer
//         src={src}
//     />)
// }

// export default VideoPlayer

import React from 'react';

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video 
      controls
      width="100%"
      height="auto"
      style={{ maxWidth: '100%', marginBottom: '1rem' }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
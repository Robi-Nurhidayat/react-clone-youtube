import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;

  return (
    <div>
      <Link to={`/video/${id.videoId}`}>
        <img
          src={snippet.thumbnails.high.url}
          alt="thumbnails"
          className="w-full"
        />
        <div className="p-2">
          <h1 className="font-md">{snippet.title}</h1>
          <p>{snippet.channelTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;

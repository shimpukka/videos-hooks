import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ( { videos, onVideoSelect } ) => { // descructure props
    return (
        <div className="ui link cards">
            {
                videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />)
            }
        </div>
    );
};

export default VideoList;



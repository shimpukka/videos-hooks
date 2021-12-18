import React from 'react';
import VideoList from './VideoList';

const VideoItem = ( { video, onVideoSelect } ) => {
    const { videoId } = video.id;
    const { title, description, thumbnails } = video.snippet;
 
    return (
        <div className="ui card" onClick={() => onVideoSelect(video)}>
            <div className="image">
                <img src={thumbnails.medium.url} alt={title} style={ {maxWidth: '100%'}}/>
            </div>
            <div className="content">
                <p className="header">
                { title }
                </p>
                {/* <p className="description">
                    {description}
                </p> */}
            </div>
        </div>
    );
};  

export default VideoItem;
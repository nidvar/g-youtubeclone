import React from 'react';
import SingleVideo from './SingleVideo';

const VideoList = (props)=>{

    const display_list = props.list_of_videos.map(a=>{

        return <SingleVideo key={Math.random()} data={a} />

    })

    return (
        <div>
            {display_list}
        </div>
    )
}

export default VideoList
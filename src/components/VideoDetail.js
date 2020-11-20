import React from 'react';

const VideoDetail = (props)=>{

    if(props.chosen_video == null){
        return null
    }else{
        return(
            <div className='VideoDetail'>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.chosen_video.id.videoId}`} />
                </div>
                <h4 className='Detail'>{props.chosen_video.snippet.title.replace('&#39;', "'").replace('&amp;','&')}</h4>
            </div>
        )
    }
}

export default VideoDetail
import React from 'react';

const SingleVideo = (props)=>{
    return(
        <div>
            <img src={props.data.snippet.thumbnails.medium.url} />
            <p>{props.data.snippet.title}</p>
        </div>
    )
}

export default SingleVideo
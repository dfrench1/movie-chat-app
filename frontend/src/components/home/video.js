import React from 'react'
import {VideoStyle} from './styled'
const Video = () => {
    return (
        <VideoStyle 
        autoPlay  
        muted
        controls
        src="https://s3-eu-west-1.amazonaws.com/ecommerce-assets-dev/dr-strange-trailer.mp4" 
        type="video/mov"
        />
    )
}

export default Video
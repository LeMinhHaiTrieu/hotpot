import React, { useState, useRef } from "react";
import {
    WrapVideoFullScreen,
    ContinuePlayVideo,
    WrapVideoMain
} from './styled';
import IconPlayVideo from '../../asset/images/play-video.png';

export default function MSlide3() {
    const refVideo = useRef(null);
    const [isVideoPause, setIsVideoPause] = useState(false);
    const handlePauseVideo = () => {
        setIsVideoPause(true);
        refVideo?.current?.pause();
    }
    const handleContinuePlayVideo = () => {
        setIsVideoPause(false);
        refVideo?.current?.play();
    }
    return (
        <WrapVideoFullScreen>
            <WrapVideoMain onClick={handlePauseVideo}>
                <video
                    ref={refVideo}
                    autoPlay="autoplay"
                    muted="muted"
                    loop="loop"
                >
                    <source src="https://cdn-global-website.superhi-cdn.com/website/video/f183871eece945b69f9b5d64e9491333" type="video/mp4" />
                </video>
            </WrapVideoMain>
            {isVideoPause &&
                <ContinuePlayVideo onClick={handleContinuePlayVideo}>
                    <img src={IconPlayVideo} alt="play-video.png" />
                </ContinuePlayVideo>
            }
        </WrapVideoFullScreen>
    );
}
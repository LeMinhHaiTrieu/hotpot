import React, { useState, useRef } from "react";
import {
    SectionVideo,
    VideoContent,
    WrapperMessVideo,
    CircleLine,
    CircleFat,
    WrapVideoFullScreen,
    CloseVideoFullScreen,
    ContinuePlayVideo,
    ArrowToFull
} from './styled';
import IconCloseVideoFull from '../../asset/images/close-video.png';
import IconPlayVideo from '../../asset/images/play-video.png';

function Slide2New(props) {
    const refVideo = useRef(null);
    const [isVideoFull, setIsVideoFull] = useState(false);
    const [isVideoPause, setIsVideoPause] = useState(false);
    const handleClickVideo = () => {
        setIsVideoFull(true)
        document.getElementsByClassName('swiper')[0].style.zIndex = '1000';
        // if (refVideo && refVideo.current && refVideo.current.volume) {
        //     refVideo.current.volume = 10000;
        // }
    }
    const handlePauseVideo = () => {
        setIsVideoPause(true);
        refVideo?.current?.pause();
    }
    const handleContinuePlayVideo = () => {
        setIsVideoPause(false);
        refVideo?.current?.play();
    }
    const handleCloseVideoFull = () => {
        setIsVideoFull(false)
        document.getElementsByClassName('swiper')[0].style.zIndex = 'unset'
    }
    return (
        <>
            {isVideoFull &&
                <>
                    <WrapVideoFullScreen onClick={handlePauseVideo}>
                        <video
                            ref={refVideo}
                            autoPlay="autoplay"
                            // muted="muted"
                            loop="loop"
                        >
                            <source src="https://cdn-global-website.superhi-cdn.com/website/video/f183871eece945b69f9b5d64e9491333" type="video/mp4" />
                        </video>
                    </WrapVideoFullScreen>
                    <CloseVideoFullScreen onClick={handleCloseVideoFull}>
                        <img src={IconCloseVideoFull} alt="close.png" />
                    </CloseVideoFullScreen>
                    {isVideoPause &&
                        <ContinuePlayVideo onClick={handleContinuePlayVideo}>
                            <img src={IconPlayVideo} alt="play-video.png" />
                        </ContinuePlayVideo>
                    }
                </>
            }
            <SectionVideo onClick={handleClickVideo}>
                <VideoContent>
                    <WrapperMessVideo className={isVideoFull && "video-full"}>
                        <video
                            autoPlay="autoplay"
                            muted="muted"
                            loop="loop"
                            className="video-small"
                        >
                            <source src="https://cdn-global-website.superhi-cdn.com/website/video/f183871eece945b69f9b5d64e9491333" type="video/mp4" />
                        </video>
                    </WrapperMessVideo>
                    <ArrowToFull />
                </VideoContent>
                {props.activeSlide === 1 &&
                    <>
                        <CircleLine className="sp1"/>
                        <CircleLine className="sp2"/>
                        <CircleLine className="sp3" />
                    </>
                }
            
                {/* <CircleFat className="circle-red">
                    <svg data-v-5b1e4217="" viewBox="0 0 200 200" x="0px" y="0px">
                        <path d="M100,0C44.9,0,0,44.9,0,100c0,55.1,44.9,100,100,100c55.1,0,100-44.9,100-100C200,44.9,155.1,0,100,0zM171.9,131.9c-11.7,27.5-37.6,49.6-66.8,60.9c0,0-0.1,0-0.1,0c-0.4,0-0.7-0.3-0.7-0.7c0-0.1,0-0.3,0.1-0.4c4.1-4.9,4.9-13.3-4.3-13.2c-1.7,0-3.4,0-5.1-0.2c-43.3-2.8-76.3-40.1-73.5-83.5c2.8-43.3,40.1-76.3,83.5-73.5c43.3,2.8,76.3,40.1,73.5,83.5C177.9,114.6,175.6,123.6,171.9,131.9z" className="st0"></path>
                    </svg>
                </CircleFat> */}

                <div className='background'>
                    <div className='circle'>
                        <div className='circle1'>
                            <div className='circle3'>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionVideo>
        </>
    );
}

export default Slide2New;
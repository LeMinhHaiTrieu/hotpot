import { styled, keyframes } from 'styled-components'

const SectionVideo = styled.section`
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const VideoContent = styled.div`
    height: 100%;
    background-color: #fff;
    cursor: pointer;
`;

const WrapperMessVideo = styled.div`
    position: absolute;
    width: 25%;
    left: 37%;
    padding-top: 25%;
    margin-top: -12.5%;
    border-radius: 50%;
    top: 50%;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(#fff,#000);
    -webkit-transition: all .5s ease-in-out 0s;
    -o-transition: all .5s ease-in-out 0s;
    transition: all .5s ease-in-out 0s;
    .video-small {
        position: absolute;
        top: 0;
        width: auto;
        left: -30%;
        height: 100%;
    }
`;

const CircleDownAnimation1 = keyframes`
    0% {
        margin-top: -100%;
        display: none;
    }
    100% {
        margin-top: -25%;
    }
`;

const CircleDownAnimation2 = keyframes`
    0% {
        margin-top: -100%;
        display: none;
    }
    100% {
        margin-top: -37.5%%;
    }
`;
const CircleDownAnimation3 = keyframes`
    0% {
        margin-top: -100%;
        display: none;
    }
    100% {
        margin-top: -49%%;
    }
`;


const CircleLine = styled.span`
    position: absolute;
    border-radius: 100%;
    border: 2px solid #e60012;
    top: 50%;
    background: none;
    z-index: 20;
    &.sp1 {
        padding-top: 50%;
        margin-top: -25%;
        width: 50%;
        left: 25%;
        animation: ${CircleDownAnimation1} 0.5s linear 0s;
        animation-delay: 0.5s;
    }
    &.sp2 {
        width: 75%;
        padding-top: 75%;
        margin-top: -37.5%;
        left: 12%;
        animation: ${CircleDownAnimation2} 0.5s linear 0s;
        animation-delay: 0.25s;
    }
    &.sp3 {
        width: 98%;
        padding-top: 98%;
        margin-top: -49%;
        left: 1%;
        animation: ${CircleDownAnimation3} 0.5s linear 0s;
    }
`;

const CircleFat = styled.span`
    pointer-events: none;
    width: 25%;
    padding-top: 25%;
    left: 37%;
    top: 50%;
    margin-top: -12.5%;
    position: absolute;
    z-index: 9;
    svg {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        fill: #e60012;
        cursor: pointer;
    }
`;


export {
    SectionVideo,
    VideoContent,
    WrapperMessVideo,
    // CircleContent,
    CircleLine,
    CircleFat
};
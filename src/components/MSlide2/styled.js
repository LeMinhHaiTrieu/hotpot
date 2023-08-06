import { styled } from 'styled-components'

const WrapVideoFullScreen = styled.section`
    position: relative;
`;

const WrapVideoMain = styled.div`
    position: relative;
    width: 100%;
    background: #FFFFFF;
    z-index: 3;
    video {
        max-width: 100%;
    }
`;

const ContinuePlayVideo = styled.div`
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 70px;
        height: 70px;
    }
`;

export {
    WrapVideoFullScreen,
    ContinuePlayVideo,
    WrapVideoMain,
};
import {styled} from 'styled-components';

const Banner = styled.section`
    margin-top: 123px;
    img {
        max-width: 100%;
    }
`;

const ContentMain = styled.section`
    margin: 100px 0;
    overflow: hidden;
`;

const BlockImage = styled.div`
    position: relative;
`;

const ImgTopic = styled.div`
    position: relative;
    z-index: 20;
    @media (min-width: 992px) {
        width: 97%;
    }
    img {
        width: 100%;
        box-shadow: 4px 4px 27px 7px #fde8ea;
        &.radiusLeft {
            border-radius: 0 0 18% 0;
        }
        &.radiusRight {
            border-radius: 0 0 0 18%;
        }
    }
`;

const ImgCircle = styled.div`
    position: absolute;
    z-index: 19;
    bottom: -50px;
    &.positionLeft {
        right: -42px;
    }
    &.positionRight {
        left: -42px;
    }
`;


const ItemIntro = styled.div`
    margin: 50px 0;
`;

const Title = styled.h3`
    font-size: 28px;
    color: #666;
    font-weight: 600;
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 32px;
    color: #888;
    margin-top: 1em;
`;

export {
    Banner,
    BlockImage,
    ImgTopic,
    ImgCircle,
    Title,
    Description,
    ContentMain,
    ItemIntro,
}
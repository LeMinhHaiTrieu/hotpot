import {styled} from 'styled-components';
import BgContact from '../../asset/images/bg-contact.png'
import BgTemplateRadius from '../../asset/images/bg-block-radius.png'

const Banner = styled.section`
    margin-top: 123px;
    img {
        max-width: 100%;
    }
`;

const ContentMain = styled.section`
    @media (min-width: 992px) {
        margin: 100px 0;
    }
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


const Description = styled.p`
    font-size: 18px;
    line-height: 32px;
    color: #888;
    margin-top: 1em;
`;

const BlockSocial = styled.div`
    background: url(${BgContact}) no-repeat 0 0;
    background-size: cover;
    padding: 100px 0;
`;

const TemplateRadius = styled.div`
    background: url(${BgTemplateRadius}) no-repeat 50% 0;
    background-size: cover;
    border-radius: 20px;
    padding: 50px 20px;
    text-align: center;
    height: 100%;
    color: #666;
    a {
        color: #666;
        text-decoration: none;
    }
    .icon-social {
        width: 51px;
    }
    .name-social {
        color: #000000;
        font-weight: 700;
    }
`;

export {
    Banner,
    BlockImage,
    ImgTopic,
    ImgCircle,
    Description,
    ContentMain,
    ItemIntro,
    BlockSocial,
    TemplateRadius,
}
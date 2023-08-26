import styled from 'styled-components'

const WrapSlide = styled.section`
    .swiper.bannerSwiper {
        @media (max-width: 1024px) and (min-width: 768px) {
            height: 700px;
        }
        @media (max-width: 767px) {
            height: 350px;
        }
    }
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: 8%;
    }
    .swiper-pagination .swiper-pagination-bullet {
        width: 17px!important;
        height: 17px!important;
        border-radius: 50%!important;
        background: #FFFFFF!important;
        opacity: 1;
    }
    .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 17px!important;
        background-color: #d90c1c!important;
    }
`

const WrapImgCenterStyle = `
    position: absolute;
    height: 50%;
    text-align: center;
    z-index: 100;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`

const WrapImgCenter1 = styled.div`
    ${WrapImgCenterStyle}
    bottom: 17%;
    left: 34%;
`;

const WrapImgCenter2 = styled.div`
    ${WrapImgCenterStyle}
    bottom: 20%;
    left: 40%;
`;

const WrapImgCenter3 = styled.div`
    ${WrapImgCenterStyle}
    bottom: 20%;
    left: 40%;
`;


const WrapLabel = styled.div`
    position: absolute;
    width: 90%;
    top: 40%;
    left: 5%;
    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const CircleContent = styled.div`
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100%;
    z-index: 3;
`;

const CircleCenter = styled.div`
    width: 25%;
    left: 37%;
    top: 50%;
    margin-top: -12.5%;
    position: absolute;
    z-index: 1;
`;

const CircleStyleCommon = `
    position: absolute;
    border-radius: 100%;
    border: 1px solid rgba(255,222,4,.35);
    top: 50%;
    background: none;
`;

const CircleLine1 = styled.div`
    ${CircleStyleCommon}
    padding-top: 50%;
    margin-top: -25%;
    width: 50%;
    left: 25%;
`;

const CircleLine2 = styled.div`
    ${CircleStyleCommon}
    width: 75%;
    padding-top: 75%;
    margin-top: -37.5%;
    left: 12%;
`;

const CircleLine3 = styled.div`
    ${CircleStyleCommon}
    width: 98%;
    padding-top: 98%;
    margin-top: -49%;
    left: 1%
`;

export {
    WrapSlide,
    WrapImgCenter1,
    WrapImgCenter2,
    WrapImgCenter3,
    WrapLabel,
    CircleContent,
    CircleCenter,
    CircleLine1,
    CircleLine2,
    CircleLine3
};
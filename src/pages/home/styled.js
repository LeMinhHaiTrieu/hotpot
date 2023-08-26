import { styled, keyframes } from 'styled-components';

const WrapHome = styled.div`
    .swiper {
        width: 100%;
        height: 100vh;
    }
    .swiper.mySwiper {
        .swiper-pagination-vertical.swiper-pagination-bullets {
            left: 0;
        }
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .swiper-slide.footer-slide {
        height: auto!important
    }
    .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 20px;
        opacity: 1;
    }
    .swiper-pagination .swiper-pagination-bullet {
        height: 3px;
        width: 12px;
        background-color: #d90c1c;
        border-radius: 0;
        margin: 15px!important;
    }
`;

const CircleDownAnimation = keyframes`
  0% {
    bottom: 1%;
  }
  50% {
    bottom: 3%;
  }
  100% {
    bottom: 1%;
  }
`;

const RingAnimation = keyframes`
    0% { transform: rotate(0); }
    1% { transform: rotate(30deg); }
    3% { transform: rotate(-28deg); }
    5% { transform: rotate(34deg); }
    7% { transform: rotate(-32deg); }
    9% { transform: rotate(30deg); }
    11% { transform: rotate(-28deg); }
    13% { transform: rotate(26deg); }
    15% { transform: rotate(-24deg); }
    17% { transform: rotate(22deg); }
    19% { transform: rotate(-20deg); }
    21% { transform: rotate(18deg); }
    23% { transform: rotate(-16deg); }
    25% { transform: rotate(14deg); }
    27% { transform: rotate(-12deg); }
    29% { transform: rotate(10deg); }
    31% { transform: rotate(-8deg); }
    33% { transform: rotate(6deg); }
    35% { transform: rotate(-4deg); }
    37% { transform: rotate(2deg); }
    39% { transform: rotate(-1deg); }
    41% { transform: rotate(1deg); }

    43% { transform: rotate(0); }
    100% { transform: rotate(0); }
`;


const CircleDownSlide = styled.div`
  position: absolute;
  bottom: 2%;
  width: 30px;
  left: 50%;
  cursor: pointer;
  margin-left: -15px;
  animation: ${CircleDownAnimation} 1s infinite;
  z-index: 999;
  img {
    width: 30px;
  }
`;

const WrapFastLink = styled.div`
    position: fixed;
    height: 100vh;
    justify-content: center;
    z-index: 299;
    top: 0;
    right: 30px;
    display: flex;
    flex-direction: column;
    @media (max-width: 575px) {
        right: 7px;
    }
`;

const WrapFastItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    width: 56px;
    height: 56px;
    background: #000;
    border-radius: 28px;
    box-shadow: 0 2px 15px 0 rgba(88,88,88,.46);
    background-color: #FFFFFF;
    a {
        text-decoration: none;
        color: #fff;
    }
    &:hover {
        .label {
            width: 216px;
            background-color: #e60112;
            box-shadow: 0 4px 6px 0 #d2d2d2;
        }
        .icon {
            display: none;
        }
    }
`;

const LabelFastLink = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 56px;
    height: 56px;
    white-space: nowrap;
    overflow: hidden;
    transition: background .5s ease-out 0s, width .5s ease-out 0s;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 15px 20px;
    img {
        width: 27px;
    }
`;

const IconFastLink = styled.div`
    position: relative;
    z-index: 2;
    &.ring {
        animation: ${RingAnimation} 4s .7s ease-in-out infinite;
    }
`;

export {
    WrapHome,
    CircleDownSlide,
    WrapFastLink,
    WrapFastItem,
    LabelFastLink,
    IconFastLink
};
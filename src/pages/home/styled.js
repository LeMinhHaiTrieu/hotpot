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

export {
    WrapHome,
    CircleDownSlide,
};
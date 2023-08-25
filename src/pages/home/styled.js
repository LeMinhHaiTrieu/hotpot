import { styled } from "styled-components";

const WrapHome = styled.div`
    .swiper {
        width: 100%;
        height: 100vh;
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

export { WrapHome };
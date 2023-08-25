import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import bannerBackground1 from '../../asset/images/BannerSlide/bannerBackground1.jpg'
import bannerImg1 from '../../asset/images/BannerSlide/bannerImg1.png'
import bannerText1 from '../../asset/images/BannerSlide/bannerText1.png'
import bannerBackground2 from '../../asset/images/BannerSlide/bannerBackground2.jpg'
import bannerImg2 from '../../asset/images/BannerSlide/bannerImg2.png'
import bannerText2 from '../../asset/images/BannerSlide/bannerText2.png'
import bannerBackground3 from '../../asset/images/BannerSlide/bannerBackground3.jpg'
import bannerImg3 from '../../asset/images/BannerSlide/bannerImg3.png'
import bannerText3 from '../../asset/images/BannerSlide/bannerText3.png'
import {
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
} from './styled'
import 'animate.css';

const Circle = () => {
    return (
        <CircleContent>
            <CircleCenter style={{fill: "rgba(255, 255, 255, 0.8)", borderColor: "rgba(255, 255, 255, 0.8)"}}>
                <svg viewBox="0 0 200 200" x="0px" y="0px" class="svg">
                    <path d="M100,0C44.9,0,0,44.9,0,100c0,55.1,44.9,100,100,100c55.1,0,100-44.9,100-100C200,44.9,155.1,0,100,0zM171.9,131.9c-11.7,27.5-37.6,49.6-66.8,60.9c0,0-0.1,0-0.1,0c-0.4,0-0.7-0.3-0.7-0.7c0-0.1,0-0.3,0.1-0.4c4.1-4.9,4.9-13.3-4.3-13.2c-1.7,0-3.4,0-5.1-0.2c-43.3-2.8-76.3-40.1-73.5-83.5c2.8-43.3,40.1-76.3,83.5-73.5c43.3,2.8,76.3,40.1,73.5,83.5C177.9,114.6,175.6,123.6,171.9,131.9z" class="st0"></path>
                </svg>
            </CircleCenter>
            <CircleLine1 style={{borderColor: "rgba(255, 255, 255, 0.8)"}}></CircleLine1>
            <CircleLine2 style={{borderColor: "rgba(255, 255, 255, 0.8)"}}></CircleLine2>
            <CircleLine3 style={{borderColor: "rgba(255, 255, 255, 0.8)"}}></CircleLine3>
        </CircleContent>
    )
}

function Slide1() {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleOnSlideChange = (e) => {
        setActiveSlide(e.activeIndex)
    }
    return (
        <WrapSlide>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                onSlideChange={handleOnSlideChange}
                className="bannerSwiper"
            >
                <SwiperSlide>
                    <img src={bannerBackground1} />
                    {activeSlide == 0 &&
                        <WrapImgCenter1 className="animate__animated animate__backInDown">
                            <img src={bannerImg1} alt="" />
                        </WrapImgCenter1>
                    }
                    {activeSlide == 0 &&
                        <WrapLabel className="animate__animated animate__backInUp">
                            <img src={bannerText1} alt="" />
                        </WrapLabel>
                    }
                    <Circle />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerBackground2} />
                    {activeSlide == 1 &&
                        <WrapImgCenter2 className="animate__animated animate__fadeInBottomLeft">
                            <img src={bannerImg2} alt="" />
                        </WrapImgCenter2>
                    }
                    {activeSlide == 1 &&
                        <WrapLabel className='animate__animated animate__fadeInTopRight'>
                            <img src={bannerText2} alt="" />
                        </WrapLabel>
                    }
                    <Circle />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerBackground3} />
                    {activeSlide == 2 && 
                        <WrapImgCenter3 className='animate__animated animate__zoomInDown'>
                            <img src={bannerImg3} alt="" />
                        </WrapImgCenter3>
                    }
                    {activeSlide == 2 && 
                        <WrapLabel className='animate__animated animate__zoomInDown'>
                            <img src={bannerText3} alt="" />
                        </WrapLabel>
                    }
                    <Circle />
                </SwiperSlide>
            </Swiper>
        </WrapSlide>
    );
}

export default Slide1;
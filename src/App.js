import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from "react-helmet";
import { Mousewheel, Pagination } from 'swiper/modules';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';
import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TopNav from './components/TopNav';
import ArrowDown from './asset/images/arrow-down.png';
import { styled, keyframes } from 'styled-components';
import { useRef } from 'react'

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
`

function App() {
  const [state, toggleState] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleOnSlideChange = (e) => {
    setActiveSlide(e.activeIndex)
    toggleState(!state)
  }

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </Helmet>
      <TopNav />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={handleOnSlideChange}
      >
        <SwiperSlide><Slide1 activeSlide={activeSlide} /></SwiperSlide>
        <SwiperSlide><Slide2 activeSlide={activeSlide} /></SwiperSlide>
        <SwiperSlide><Slide3 activeSlide={activeSlide} /></SwiperSlide>
        <SwiperSlide className='test-slide'>Footer</SwiperSlide>
      </Swiper>
      <CircleDownSlide>
        <img src={ArrowDown} alt="" />
      </CircleDownSlide>
    </div>
  );
}

export default App;

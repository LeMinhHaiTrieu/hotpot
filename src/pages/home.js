import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled, keyframes } from 'styled-components';
import { Mousewheel, Pagination } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";
import Slide1 from '../components/slide1';
import Slide3 from '../components/slide3';
import TopNav from '../components/TopNav';
import MTopNav from '../components/MTopNav';
import MSlide2 from '../components/MSlide2';
import MSlide3 from '../components/MSlide3';
import FooterNew from '../components/FooterNew';
import ArrowDown from '../asset/images/arrow-down.png';
import Slide2New from '../components/Slide2New';

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
  const [isMobile, setIsMobile] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handleOnSlideChange = (e) => {
    setActiveSlide(e.activeIndex)
    toggleState(!state)
  }

  const nexToSlide = () => {
    swiper.slideNext();
  };

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024)
    }
    handleResize();
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div id="Home">
      {!isMobile &&
        <>
          <TopNav />
          <Swiper
            direction={'vertical'}
            slidesPerView={'auto'}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
            onSlideChange={handleOnSlideChange}
            onSwiper={(s) => {
              console.log("initialize swiper", s);
              setSwiper(s);
            }}
          >
            <SwiperSlide><Slide1 activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide><Slide2New activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide><Slide3 activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide className='footer-slide'><FooterNew /></SwiperSlide>
          </Swiper>
          {activeSlide != 3 &&
            <CircleDownSlide onClick={nexToSlide}>
              <img src={ArrowDown} alt="" />
            </CircleDownSlide>
          }
        </>
      }
      {isMobile &&
        <>
          <MTopNav />
          <MSlide2 />
          <MSlide3 />
          <FooterNew />
        </>
      }
    </div>
  );
}

export default App;

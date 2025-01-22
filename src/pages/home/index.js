import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import AOS from "aos"
import "aos/dist/aos.css"
import Slide3 from '../../components/Slide3'
import TopNav from '../../components/TopNav'
import MTopNav from '../../components/MTopNav'
import MSlide1New from '../../components/MSlide1New'
import MSlide2 from '../../components/MSlide2'
import MSlide3 from '../../components/MSlide3'
import FooterNew from '../../components/FooterNew'
import Slide1New from '../../components/Slide1New'
import Slide2New from '../../components/Slide2New'
import FastLinkAllPage from '../../components/FastLinkAllPage'
import { useViewport } from '../../hooks'
import { WrapHome } from './styled';

function App() {
  const isMobile = useViewport();
  const [activeSlide, setActiveSlide] = useState(0);
  const handleOnSlideChange = (e) => {
    setActiveSlide(e.activeIndex)
  }

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000
    });
    AOS.refresh();
  }, []);

  return (
    <WrapHome id="Home">
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
          >
            <SwiperSlide><Slide1New activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide><Slide2New activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide><Slide3 activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide className='footer-slide'><FooterNew /></SwiperSlide>
          </Swiper>
        </>
      }
      {isMobile &&
        <>
          <MTopNav />
          <MSlide1New />
          <MSlide2 />
          <MSlide3 />
          <FooterNew />
        </>
      }
      <FastLinkAllPage />
    </WrapHome>
  );
}

export default App;

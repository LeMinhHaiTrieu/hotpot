import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from "react-helmet";
import { Mousewheel, Pagination } from 'swiper/modules';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
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
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;

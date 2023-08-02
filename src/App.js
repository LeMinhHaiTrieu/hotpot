import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from "react-helmet";
import { Mousewheel, Pagination } from 'swiper/modules';
import Slide1 from './components/slide1';
import Slide2 from './components/slide2';
import Slide3 from './components/slide3';
import { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

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
      {/* https://www.react-spring.dev/examples */}
      {/* https://codesandbox.io/s/9c5jx?file=/src/App.tsx */}
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
        onSlideChange={handleOnSlideChange}
      >
        <SwiperSlide><Slide1 activeSlide={activeSlide} /></SwiperSlide>
        <SwiperSlide><Slide2 activeSlide={activeSlide} /></SwiperSlide>
        <SwiperSlide><Slide3 activeSlide={activeSlide} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
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
import ArrowDown from '../../asset/images/arrow-down.png'
import IconOrderOnlineGray from '../../asset/svg/icon_order_online_gray.svg'
import IconWaitList from '../../asset/svg/icon_wait_list.svg'
import IconOrderOnlineGrayWhite from '../../asset/svg/icon_order_online_white.svg'
import IconWaitListWhite from '../../asset/svg/icon_wait_list_white.svg'
import IconOrderOnlineRed from '../../asset/svg/icon_order_online.svg'

import {
  WrapHome,
  CircleDownSlide,
  WrapFastLink,
  WrapFastItem,
  LabelFastLink,
  IconFastLink
} from './styled';

const dataFastLink = [
  {
    label: "Wait List",
    isTargetBlank: true,
    icon: IconWaitList,
    iconHover: IconWaitListWhite,
    link: "https://www.google.com/"
  },
  {
    label: "Make Reservation",
    isTargetBlank: false,
    icon: IconOrderOnlineGray,
    iconHover: IconOrderOnlineGrayWhite,
    link: '/reservation',
    isReservation: true,
  },
]

const ContentLink = ({label, icon, iconHover, isReservation }) => {
  return (
    <>
      <LabelFastLink className="label">
        <span>{label}</span>
        <img src={iconHover} alt="" />
      </LabelFastLink>
      <IconFastLink className={`${isReservation && "ring"} icon`}>
        {!isReservation && <img src={icon} />}
        {isReservation && <img src={IconOrderOnlineRed} />}
      </IconFastLink>
    </>
  )
}

const FastLink = () => {
  return (
    <WrapFastLink>
      {dataFastLink.map(item =>
        <WrapFastItem key={item.label}>
          {item.isTargetBlank &&
            <a className='d-flex' target="_blank" href={item.link}>
              <ContentLink {...item} />
            </a>
          }
          {!item.isTargetBlank &&
            <Link to={item.link} className='d-flex'>
              <ContentLink {...item} />
            </Link>
          }
        </WrapFastItem>
      )}
    </WrapFastLink>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handleOnSlideChange = (e) => {
    setActiveSlide(e.activeIndex)
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
            onSwiper={(s) => {
              setSwiper(s);
            }}
          >
            <SwiperSlide><Slide1New activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide><Slide2New activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide><Slide3 activeSlide={activeSlide} /></SwiperSlide>
            <SwiperSlide className='footer-slide'><FooterNew /></SwiperSlide>
          </Swiper>
          {/* {activeSlide !== 3 &&
            <CircleDownSlide onClick={nexToSlide}>
              <img src={ArrowDown} alt="" />
            </CircleDownSlide>
          } */}
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
      <FastLink />
    </WrapHome>
  );
}

export default App;

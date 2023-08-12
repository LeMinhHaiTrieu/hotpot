import { Col, Row, Container } from 'react-bootstrap';
import TopNav from '../../components/TopNav'
import TitleParagraph from '../../components/TitleParagraph';
import CircleOpacity from '../../asset/images/circle-opacity.png'
import FooterNew from '../../components/FooterNew'
import IconReservation from '../../asset/svg/icon_order_online.svg'
import IconFollowUs from '../../asset/svg/icon_follow_us.svg'
import IconInstagram from '../../asset/images/icon-instagram.png'
import IconFacebook from '../../asset/images/icon-facebook.png'
import IconWechat from '../../asset/images/icon-wechat.png'
import {
    Banner,
    BlockImage,
    Description,
    ContentMain,
    ItemIntro,
    ImgTopic,
    ImgCircle,
    BlockSocial,
    TemplateRadius,
} from './styled'
import { Link } from 'react-router-dom';

export default function PageAbout() {
    return (
        <div>
            <TopNav />
            <Banner>
                <img src="https://cdn-global-website.superhi-cdn.com/website/image/0688568204954d4592b3703cc4e50daf-1920-490.jpg" alt="banner" />
            </Banner>
            <ContentMain>
                <Container>
                    <ItemIntro>
                        <Row>
                            <Col lg="6">
                                <BlockImage>
                                    <ImgTopic>
                                        <img
                                            src="https://cdn-global-website.superhi-cdn.com/website/image/de88cf6fe383409a8a564cc6134afe03-584-447.png"
                                            alt="about"
                                            className="radiusLeft"
                                        />
                                    </ImgTopic>
                                    <ImgCircle className="positionLeft">
                                        <img src={CircleOpacity} alt="circle" />
                                    </ImgCircle>
                                </BlockImage>
                            </Col>
                            <Col lg="6" className='mt-5'>
                                <TitleParagraph>Branch Locator</TitleParagraph>
                                <Description>As a brand created in 1994, Haidilao International Holding Ltd. has developed into a world-renowned catering enterprise over the course of two-decade development. By the end of 2019, Haidilao has opened 768 chain restaurants in China, Singapore, U.S., South Korea, Japan, Canada and Australia with over 54 million members and 100,000 + employees.</Description>
                            </Col>
                        </Row>
                    </ItemIntro>
                </Container>
                <BlockSocial>
                    <Container>
                        <Row>
                            <Col lg="6">
                                <TemplateRadius>
                                    <Link to="/reservation" className='d-block'>
                                        <img src={IconReservation} alt="icon-reservation.svg" />
                                        <h5 className='mt-3'>Reservation</h5>
                                        <h2 className='mt-5'>Please call the restaurant to order</h2>
                                    </Link>
                                </TemplateRadius>
                            </Col>
                            <Col lg="6" className='mt-lg-0 mt-4'>
                                <TemplateRadius>
                                    <img src={IconFollowUs} alt="icon-follow-us.svg" />
                                    <h5 className='mt-3'>Follow Us</h5>
                                    <div className='d-flex mt-5 justify-content-center'>
                                        <a className='d-block' target="_blank" href="/">
                                            <img src={IconInstagram} alt="icon-instagram.png" className='icon-social'/>
                                            <span className='d-block name-social'>Instagram</span>
                                        </a>
                                        <a className='d-block px-5' target="_blank" href="/">
                                            <img src={IconFacebook} alt="icon-facebook.png" className='icon-social'/>
                                            <span className='d-block name-social'>Facebook</span>
                                        </a>
                                        <a className='d-block' target="_blank" href="/">
                                            <img src={IconWechat} alt="icon-wechat.png" className='icon-social'/>
                                            <span className='d-block name-social'>Wechat</span>
                                        </a>
                                    </div>
                                </TemplateRadius>
                            </Col>
                        </Row>
                    </Container>
                </BlockSocial>
            </ContentMain>
            <FooterNew />
        </div>
    )
}
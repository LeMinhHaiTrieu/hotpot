import { Col, Row, Container } from 'react-bootstrap';
import {
    BlockImage,
    Description,
    ItemIntro,
    ImgTopic,
    ImgCircle,
} from './styled'
import TitleParagraph from '../../components/TitleParagraph';
import TemplatePage from '../../components/TemplatePage';
import CircleOpacity from '../../asset/images/circle-opacity.png';
import BannerAbout from '../../asset/images/BannerPage/banner-about.jpg';

const content = [
    {
        image: 'https://cdn-global-website.superhi-cdn.com/website/image/3687d155a56e453cbdd5f00a2101f58b-540-403.png',
        title: 'Our value',
        description: 'One center: we believe diligence can change destiny; two pillars: we always put customers first and value hard work.',
        imgLeft: true,
    },
    {
        image: 'https://cdn-global-website.superhi-cdn.com/website/image/f61b85f580ce4b1184b2cceefda6006d-540-403.png',
        title: 'Our mission',
        description: 'We devote ourselves to creating happy hot pot time and spreading healthy hot pot culture to foodies all over the world through selected products and innovative services.',
        imgLeft: false,
    },
    {
        image: 'https://cdn-global-website.superhi-cdn.com/website/image/af34690ee4b74cd1b5b2dbca59e4d03e-540-403.jpg',
        title: 'Staff character',
        description: 'Our staff boast qualities of honesty, innovation, modesty, diligence and passion. They are kind to people and have a sense of responsibility. We always uphold the idea of “putting customers first and providing them with the best services”, and change traditional, standardized and single services into personalized services through innovation. Following the basic principle of full devotion to services, we are committed to providing customers with considerate, warm and comfortable services. As we advocate the value of changing destiny through hard work, we strive to create a fair and equal working environment for our staff and implement a humanized and people-oriented management model so as to improve their value.',
        imgLeft: true,
    },
]

export default function PageAbout() {
    return (
        <TemplatePage imgBanner={BannerAbout}>
            <Container>
                {content.map((item, index) =>
                    <ItemIntro key={index}>
                        <Row className={!index%2 == 0 && 'flex-row-reverse'}>
                            <Col lg="6">
                                <BlockImage>
                                    <ImgTopic>
                                        <img src={item.image} alt="about" className={index%2 == 0 ? "radiusLeft" : "radiusRight"} />
                                    </ImgTopic>
                                    <ImgCircle className={index%2 == 0 ? "positionLeft" : "positionRight"}>
                                        <img src={CircleOpacity} alt="circle" />
                                    </ImgCircle>
                                </BlockImage>
                            </Col>
                            <Col lg="6" className='mt-4'>
                                <TitleParagraph>{item.title}</TitleParagraph>
                                <Description>{item.description}</Description>
                            </Col>
                        </Row>
                    </ItemIntro>
                )}
            </Container>
        </TemplatePage>
    )
}
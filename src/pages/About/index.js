import { Col, Row, Container } from 'react-bootstrap';
import TopNav from '../../components/TopNav'
import {
    Banner,
    BlockImage,
    Title,
    Description,
    ContentMain,
    ItemIntro,
    ImgTopic,
    ImgCircle,
} from './styled'
import CircleOpacity from '../../asset/images/circle-opacity.png'
import Footer from '../../components/Footer'

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


const ItemIntroTemplate = (props) => {
    const {image, title, description, imgLeft, key} = props;
    return (
        <ItemIntro key={key}>
            <Row className={!imgLeft && 'flex-row-reverse'}>
                <Col lg="6">
                    <BlockImage>
                        <ImgTopic>
                            <img src={image} alt="about" className={imgLeft ? "radiusLeft" : "radiusRight"} />
                        </ImgTopic>
                        <ImgCircle className={imgLeft ? "positionLeft" : "positionRight"}>
                            <img src={CircleOpacity} alt="circle" />
                        </ImgCircle>
                    </BlockImage>
                </Col>
                <Col lg="6" className='mt-4'>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Col>
            </Row>
        </ItemIntro>
    )
};

export default function PageAbout() {
    return (
        <div>
            <TopNav />
            <Banner>
                <img src="https://cdn-global-website.superhi-cdn.com/website/image/0688568204954d4592b3703cc4e50daf-1920-490.jpg" alt="banner" />
            </Banner>
            <ContentMain>
                <Container>
                    {content.map(item =>
                        <ItemIntroTemplate {...item} key={item.title} />
                    )}
                </Container>
            </ContentMain>
            <Footer />
        </div>
    )
}
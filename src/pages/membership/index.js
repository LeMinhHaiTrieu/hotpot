import { Col, Row, Container } from 'react-bootstrap';
import TopNav from '../../components/TopNav'
import {
    Banner,
    ContentMain,
    Ul,
    Li
} from './styled'
import FooterNew from '../../components/FooterNew'
import TitleParagraph from '../../components/TitleParagraph';


export default function Membership() {
    return (
        <div>
            <TopNav />
            <Banner>
                <img src="https://cdn-global-website.superhi-cdn.com/website/image/0688568204954d4592b3703cc4e50daf-1920-490.jpg" alt="banner" />
            </Banner>
            <ContentMain>
                <Container>
                    <Row className='pt-3'>
                        <Col>
                            <TitleParagraph>Why should I become a Member?</TitleParagraph>
                            <Ul className='mt-4 mb-5'>
                                <Li>1. Credit Gifts points: Members can receive points with the account, and can redeem the points in our real-time restaurants in Haidilao restaurants, credit points will be deducted after corresponding redemption.</Li>
                                <Li>2. Members exclusive activities: Members have the chance to participate in series of interactive activities exclusively for the members;</Li>
                                <Li>3. 3-star and above members can enjoy the exclusive manager services;</Li>
                                <Li>4. 4-star and 5-star members can enjoy the priority seating arrangement.</Li>
                            </Ul>

                            <TitleParagraph>How do I become a member?</TitleParagraph>
                            <p className='mt-4'>The new user registration needs to fill in the member name (display name), the member number (mobile number), the password, the verification code information, each mobile number can only be registered once, please save your member account number and the password. The registration methods are as follows:
                            Method 1: The attending waiter or waitress will facilitate the registration.
                            Inform the attending waiter/waitress about the needed information, they will assist you throughout the registration process.</p>
                        </Col>
                    </Row>
                </Container>
            </ContentMain>
            <FooterNew />
        </div>
    )
}
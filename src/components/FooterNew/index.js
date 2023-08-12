import { Container, Row, Col } from 'react-bootstrap'
import {
    WrapFooter,
    MainFooter,
} from './styled'
import Logo from '../../asset/images/fulllogo_transparent.png'
import License from '../../asset/images/license.jpg'

function FooterNew() {
    return (
        <WrapFooter>
            <Container>
                <MainFooter>
                    <Row>
                        <Col lg={5}>
                            <div className='d-lg-flex'>
                                <div className='logo flex-shrink-0'>
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className='px-lg-3 mt-lg-0 mt-3'>Vietnam's premier ticketing platform for events<br />Ticketbox Co. Ltd. © 2016</div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='d-lg-flex align-items-center mt-lg-0 mt-4'>
                                <div>
                                    Ticketbox Co., Ltd<br />
                                    Legal representative: Tran Ngoc Thai Son<br />
                                    Address: 3rd floor, Tower A, Viettel Building, 285 Cach Mang Thang Tam, Ward 12, District 10, HCMC.<br />
                                    Hotline: 1900.6408 - Email: support@ticketbox.vn<br />
                                    Business registration certificate number: 0313605444, first issued on January 7, 2016 by the Department of Planning and Investment of Ho Chi Minh City<br />
                                </div>
                                <div className='flex-shrink-0 license px-lg-3 px-0 mt-lg-0 mt-3'>
                                    <img src={License} alt="logo"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </MainFooter>
            </Container>
        </WrapFooter>
    )
}

export default FooterNew;
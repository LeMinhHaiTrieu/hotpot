import { Container } from 'react-bootstrap';
import TopNav from '../../components/TopNav'
import { Banner, ContentMain } from './styled'
import FooterNew from '../../components/FooterNew'
import MTopNav from '../../components/MTopNav';
import FastLinkAllPage from '../FastLinkAllPage';
import { useViewport } from '../../hooks'

export default function TemplatePage(props) {
    const isMobile = useViewport();
    const {imgBanner, children} = props

    return (
        <div className='main'>
            { isMobile && <MTopNav /> }
            { !isMobile && <TopNav />}

            {imgBanner &&
                <Banner>
                    <img src={imgBanner} alt="banner" />
                </Banner>
            }
            <ContentMain>
                <Container>
                    {children}
                </Container>
            </ContentMain>
            <FooterNew />
            <FastLinkAllPage />
        </div>
    )
}
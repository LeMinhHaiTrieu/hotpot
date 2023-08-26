import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import TopNav from '../../components/TopNav'
import { Banner, ContentMain } from './styled'
import FooterNew from '../../components/FooterNew'
import MTopNav from '../../components/MTopNav';
import FastLinkAllPage from '../FastLinkAllPage';

export default function TemplatePage(props) {
    const [isMobile, setIsMobile] = useState(false);
    const {imgBanner, children} = props

    useEffect(() => {
        function handleResize() {
          setIsMobile(window.innerWidth <= 1024)
        }
        handleResize();
        window.addEventListener('resize', handleResize)
    }, [])

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

import { useState } from 'react'
import {useParams} from 'react-router-dom';
import { DataMenu } from '../../components/TopNav/menuJson'
import TitleParagraph from '../../components/TitleParagraph';
import { Container, Row, Col } from 'react-bootstrap';
import {
    WrapCuisine,
    WrapItemCuisine,
    TitleAbsolute,
    Note,
    BlockDescription,
    Title,
    Description,
    BtnMore,
    BlockDescriptionFull,
    ItemCuisineMain,
    BtnClose,
} from './styled'
import TemplatePage from '../../components/TemplatePage';

const ItemCuisine = (props) => {
    const [isDescriptionFull, setIsDescriptionFull] = useState(false);
    const { title, description } = props;
    return (
        <>
            <WrapItemCuisine>
                <ItemCuisineMain>
                    <img className='img-cuisine' src="https://cdn-global-website.superhi-cdn.com/website/image/8b6e3383533a47589672672228fb0e37-396-543.jpg" alt="" />
                    <TitleAbsolute className='title-absolute'>
                        <TitleParagraph>{title}</TitleParagraph>
                    </TitleAbsolute>
                    <BlockDescription className='p-lg-3 p-2 block-description'>
                        <Title>
                            {title}
                        </Title>
                        <Description className='mt-4'>{description}</Description>
                    </BlockDescription>
                </ItemCuisineMain>
                <BtnMore onClick={() => setIsDescriptionFull(true)}>More</BtnMore>
            </WrapItemCuisine>
            {isDescriptionFull &&
                <BlockDescriptionFull className='py-5 p-3'>
                    <TitleParagraph>{title}</TitleParagraph>
                    <Description className='mt-4'>{description}</Description>
                    <BtnClose onClick={() => setIsDescriptionFull(false)}>Close</BtnClose>
                </BlockDescriptionFull>
            }
        </>
    )
} 

export default function PageCuisine() {
    const params = useParams();
    const dataCuisine = DataMenu[params.cuisineId].submenu;
    return (
        <TemplatePage>
            <WrapCuisine>
                <Container className='py-lg-5 py-4'>
                    <Note className='pb-4'>The picture is for reference only.</Note>
                    <Row className='g-lg-4 g-2'>
                        {dataCuisine.map(item => 
                            <Col key={item.title} className='mb-2 col-lg-4 col-6'>
                                <ItemCuisine {...item} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </WrapCuisine>
        </TemplatePage>
    )
}
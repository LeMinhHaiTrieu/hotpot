import { useState } from 'react'
import { useViewport } from '../../hooks'
import { Row, Col } from 'react-bootstrap'
import {useParams, Link} from 'react-router-dom'
import {
    WrapperCuisineFastlink,
    ItemsCenter,
    ItemFastLink,
    Avatar,
    NameCuisine,
    IconShowMore
} from './styled'
import { DataMenu } from '../../components/TopNav/menuJson'
import IconDoubleArrowRight from '../../asset/svg/icon_double_arrow_right.svg'

function FastLinkCuisine() {
    const isMobile = useViewport();
    const params = useParams();
    const cuisineId = params.cuisineId
    const Keys = Object.keys(DataMenu)
    const ColArrayMenu = [[...Keys.slice(0, Keys.length/2)], [...Keys.slice(Keys.length/2)]]
    const [expand, setExpand] = useState(!isMobile);
    return (
        <WrapperCuisineFastlink className={!expand && "hide"}>
            <ItemsCenter>
                <Row className='g-3'>
                    {ColArrayMenu.map((keys, index) =>
                        <Col className='col-6' key={index}>
                            {keys.map(key =>
                                <Link to={`/cuisine/${key}`}>
                                    <ItemFastLink>
                                        <Avatar key={key} className={key == cuisineId && 'active'}>
                                            <img src={DataMenu[key].icon} alt="" />
                                        </Avatar>
                                        <NameCuisine>
                                            {DataMenu[key].title}
                                        </NameCuisine>
                                    </ItemFastLink>
                                </Link>
                            )}
                        </Col>
                    )}
                </Row>
                <IconShowMore onClick={() => setExpand(!expand)} className={!expand && 'hide'}>
                    <img src={IconDoubleArrowRight} alt="" />
                </IconShowMore>
            </ItemsCenter>
        </WrapperCuisineFastlink>
    )
}

export default FastLinkCuisine;
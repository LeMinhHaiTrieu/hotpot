import { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animated, useSpring } from "react-spring"
import logo from '../../asset/images/icononly_nobuffer.png'
import global from '../../asset/images/global.png'
import iconMenu from '../../asset/images/iconMenu.png'
import { DataMenu } from '../../components/TopNav/menuJson'
import { useLocation } from 'react-router-dom'
import {
  WrapperMTopNav,
  BoxCountry,
  WrapLogo,
  IconMenu,
  MenuMain,
  MenuMainList,
  MenuMainItem,
  Expand,
  WrapItemMenu,
  Title,
  List,
  ListItem
} from './styled'

const ItemCuisine = ({title, items}) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [style, animate] = useSpring(() => ({ height: "0px" }), []);
  useEffect(() => {
      animate({
        height: (toggle ? ref.current.offsetHeight : 0) + "px"
      });
  }, [animate, ref, toggle]);

  return (
      <WrapItemMenu>
        <Title onClick={() => setToggle(!toggle)}>
          <h5 className="mb-0">{title}</h5>
          <Expand className={toggle ? 'active' : 'hide'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g id="Right">
                <path d="M14.707,12.707l-4,4a1,1,0,0,1-1.414-1.414L12.586,12,9.293,8.707a1,1,0,1,1,1.414-1.414l4,4A1,1,0,0,1,14.707,12.707Z"/>
              </g>
            </svg>
          </Expand>
        </Title>
        <div style={{ height: "0%" }}>
          <animated.div style={{ overflow: 'hidden', ...style }}>
            <List ref={ref}>
              {items.map((item, index) => (
                <ListItem key={index}>
                  <Link to={item.link}>{item.title}</Link>
                </ListItem>
              ))}
            </List>
          </animated.div>
        </div>
      </WrapItemMenu>
  )
}

export default function MTopNav() {
  const location = useLocation()
  const path = location.pathname
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <>
      <WrapperMTopNav>
        <Container>
          <Row>
            <Col className="col-12 d-flex align-items-center justify-content-between">
              <WrapLogo>
                <Link to="/">
                  <img width="40px" src={logo} alt="logo" />
                </Link>
              </WrapLogo>
              <div className='d-flex align-items-center'>
                <BoxCountry>
                  <img src={global} alt="global.png" />
                  <span>Singapore</span>
                </BoxCountry>
                <IconMenu onClick={() => setIsShowMenu(!isShowMenu)}>
                  <img src={iconMenu} alt="menu.png" />
                </IconMenu>
              </div>
            </Col>
          </Row>
        </Container>
      </WrapperMTopNav>
      {isShowMenu &&
        <MenuMain>
          <Container>
            <Row>
              <Col className='col-12'>
                <MenuMainList>
                  <MenuMainItem className={path.includes('/about-us') ? 'active' : ''}>
                    <Link to="/about-us">About us</Link>
                  </MenuMainItem>
                  <MenuMainItem className={path.includes('/cuisine') ? 'active' : ''}>
                    <ItemCuisine
                      title="Cuisine"
                      items={Object.keys(DataMenu).map((key => {
                        return {
                          title: DataMenu[key].title,
                          link: `/cuisine/${key}`
                        }
                      }))}
                    />
                  </MenuMainItem>
                  <MenuMainItem className={(path.includes('/contact-us') || path.includes('/reservation')) ? 'active' : ''}>
                    <ItemCuisine
                      title="Service center"
                      items={[
                        {
                          link: '/contact-us',
                          title: 'Contact us',
                        },
                        {
                          link: '/reservation',
                          title: 'Make reservation',
                        },
                      ]}
                    />
                  </MenuMainItem>
                  <MenuMainItem className={path.includes('/membership') ? 'active' : ''}>
                    <Link to="/membership">Membership</Link>
                  </MenuMainItem>
                </MenuMainList>
              </Col>
            </Row>
          </Container>
        </MenuMain>
      }
    </>
  );
}

import { MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { HoverMenuWithTransition } from '../HoverMenuWithTransition';
import {
    WrapperTopNav,
    ContentTopNav,
    UlMenu,
    LiMenu,
    BoxCountry,
    WrapLogo
} from './styled'
import logo from '../../asset/images/fulllogo_transparent.png'
import global from '../../asset/images/global.png'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function TopNav() {
    return (
        <WrapperTopNav>
            <Container>
                <ContentTopNav>
                    <WrapLogo>
                        <img src={logo} alt="logo.svg" />
                    </WrapLogo>

                    <UlMenu>
                        <LiMenu>
                            <HoverMenuWithTransition title="About Us" to="/about-us" />
                        </LiMenu>
                        <LiMenu>
                            <HoverMenuWithTransition title="Cuisine">
                                <MenuItem>
                                    <Link to="/cuisine/sub-base">Sub Base</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/bbq">BBQ</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/side-dish">Side Dish</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/meat">Meat</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/seafood">Seafood</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/meatball">Meatball</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/tofu">Tofu</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/vegetable">Vegetable</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/noodle">Noodle</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/cuisine/delicacy">Delicacy</Link>
                                </MenuItem>
                            </HoverMenuWithTransition>
                        </LiMenu>
                        <LiMenu>
                            <HoverMenuWithTransition title="Service Center">
                                <MenuItem>
                                    <Link to="/contact-us">Contact us</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/reservation">Make reservation</Link>
                                </MenuItem>
                            </HoverMenuWithTransition>
                        </LiMenu>
                        <LiMenu>
                            <HoverMenuWithTransition title="Membership" to="/membership" />
                        </LiMenu>
                    </UlMenu>

                    <BoxCountry>
                        <img src={global} alt="global.png" />
                        <span>Singapore</span>
                    </BoxCountry>
                </ContentTopNav>
            </Container>
        </WrapperTopNav>
    );
  }

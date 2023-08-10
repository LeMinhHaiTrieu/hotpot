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

export default function TopNav() {
    return (
        <WrapperTopNav>
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
                                <Link to="/">Sub Base</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">BBQ</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Side Dish</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Meat</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Seafood</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Meatball</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Tofu</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Vegetable</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Noodle</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Delicacy</Link>
                            </MenuItem>
                        </HoverMenuWithTransition>
                    </LiMenu>
                    <LiMenu>
                        <HoverMenuWithTransition title="Service Center">
                            <MenuItem>
                                <Link to="/contact">Contact us</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/">Make reservation</Link>
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
        </WrapperTopNav>
    );
  }

import { MenuItem,  SubMenu } from '@szhsin/react-menu';
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

export default function TopNav() {
    return (
        <WrapperTopNav>
            <ContentTopNav>
                <WrapLogo>
                    <img src={logo} alt="logo.svg" />
                </WrapLogo>

                <UlMenu>
                    <LiMenu>
                        <HoverMenuWithTransition title="About Haidilao" />
                    </LiMenu>
                    <LiMenu>
                        <HoverMenuWithTransition title="Haidilao Cuisine">
                            <SubMenu label="Sub Base">
                                <MenuItem>Beef `Pho` Broth </MenuItem>
                                <MenuItem>Healthy Herb Marrow Broth</MenuItem>
                                <MenuItem>Szechuan Spicy Marrow Broth</MenuItem>
                                <MenuItem>Thai Tomyum</MenuItem>
                                <MenuItem>Mushroom Broth</MenuItem>
                            </SubMenu>
                            <SubMenu label="BBQ">
                                <MenuItem>Beef Bulgogi</MenuItem>
                                <MenuItem>Steak</MenuItem>
                                <MenuItem>La Beef Short Ribs</MenuItem>
                                <MenuItem>Chicken Bulgogi</MenuItem>
                                <MenuItem>Spicy Chicken Bulgogi</MenuItem>
                                <MenuItem>Spicy Pork Bulgogi</MenuItem>
                                <MenuItem>Pork Belly</MenuItem>
                                <MenuItem>Garlic Shrimp</MenuItem>
                                <MenuItem>Garlic Shrimp</MenuItem>
                            </SubMenu>
                            <MenuItem>Print...</MenuItem>
                        </HoverMenuWithTransition>
                    </LiMenu>
                    <LiMenu>
                        <HoverMenuWithTransition title="Service Center" />
                    </LiMenu>
                    <LiMenu>
                        <HoverMenuWithTransition title="Membership" />
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

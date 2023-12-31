import styled from 'styled-components';
import { MainColor1 } from '../../constant'

const WrapperTopNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 2px #999;
    z-index: 999;
    li.szh-menu__item {
        a {
            text-decoration: none;
            font-size: 16px;
            color: #666;
        }
        &:hover a {
            color: ${MainColor1}
        }
    }
`;

const ContentTopNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;

const UlMenu = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
`;

const LiMenu = styled.li`
    padding: 0 15px;
    * {
        font-size: 18px;
    }
`;

const BoxCountry = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
    }
    span {
        padding-left: 10px;
        color: ${MainColor1};
        font-weight: 500;
    }
`;

const WrapLogo = styled.div`
    padding: 10px 0;
    img {
        width: 80px;
    }
`;


export {
    WrapperTopNav,
    ContentTopNav,
    UlMenu,
    LiMenu,
    BoxCountry,
    WrapLogo
}
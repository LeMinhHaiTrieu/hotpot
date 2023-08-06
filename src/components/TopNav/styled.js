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
`;

const ContentTopNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px 0 15px;
    max-width: 2000px;
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
        font-weight: 600;
    }
`;

const WrapLogo = styled.div`
    padding: 5px 40px;
    img {
        width: 100px;
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
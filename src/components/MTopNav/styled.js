import styled from 'styled-components';
import { MainColor1 } from '../../constant'

const WrapperMTopNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 2px #999;
    z-index: 999;
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
    padding: 5px 0;
    flex-shrink: 0;
`;

const IconMenu = styled.div`
    margin-left: 30px;
    img {
        width: 30px;
    }
`;

const MenuMain = styled.div`
    position: fixed;
    top: 54px;
    width: 100%;
    padding: 10px 0;
    background: #eeeeee;
    z-index: 999;
`;

const MenuMainList = styled.ul`
    list-style: none;
    padding: 0;
`;

const MenuMainItem = styled.li`
    padding: 6px 0;
    font-weight: 700;
    a, > div {
        text-decoration: none;
        color: #000000;
        display: block;
        margin: auto;
    }
    &.active {
        > a, h5 {
            color: #e60012;
            font-weight: 500;
        }
        svg {
            fill: #e60012;
        }
    }
    h5, a {
        font-weight: 400;
        font-size: 20px;
    }
`;

const Expand = styled.div`
    transition: transform .3s;
    padding-top: 4px;
    svg {
        width: 30px;
    }
    &.active {
        transform: rotate(90deg);
    }
    &.hide {
        transform: rotate(0deg);
    }
`;

const WrapItemMenu = styled.div``;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const List = styled.ul`
    background: #e1e1e1;
    list-style: none;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const ListItem = styled.li`
    padding: 3px 0;
    position: relative;
    a {
        font-size: 16px;
        padding-left: 20px;
    }
    &:before {
        content: '';
        width: 3px;
        height: 3px;
        background: #e60012;
        border-radius: 50%;
        z-index: 3;
        position: absolute;
        top: 15px;
    }
`;

export {
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
}
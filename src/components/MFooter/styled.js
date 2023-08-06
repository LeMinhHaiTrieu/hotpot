import { styled } from 'styled-components'

const WrapBlack = styled.div`
    background-color: #282828;
    padding: 20px 0;
    overflow: hidden;
`;

const MainFooter = styled.div`
    max-width: 1200px;
    margin: auto;
`;

const ColFooter = styled.div`
    max-width: 100%;
    padding: 0 15px;
`;

const Title = styled.div`
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: none;
        color: #888;
        font-size: 15px;
        &:hover {
            color: #FFFFFF;
        }
    }
`;
const Expand = styled.div`
    transition: transform .3s;
    padding-top: 4px;
    img {
        width: 30px;
    }
    &.active {
        transform: rotate(90deg);
    }
    &.hide {
        transform: rotate(0deg);
    }
`;

const List = styled.ul`
    text-align: left;
    list-style: none;
    padding: 0;
    margin-top: 5px;
    overflow: hidden;
    transition: height .3s;
`;

const ListItem = styled.li`
    font-size: 15px;
    line-height: 1.2;
    margin-bottom: 10px;
    a {
        color: #666;
        text-decoration: none;
        &:hover {
            color: #FFFFFF;
        }
    }
`;

const BlockTerms = styled.div`
    background: #FFFFFF;
    padding: 10px;
    text-align: center;
    a {
        font-size: 12px;
        color: #888;
        line-height: 20px;
        text-decoration: none;
    }
`;

export {
    WrapBlack,
    MainFooter,
    ColFooter,
    Title,
    List,
    ListItem,
    Expand,
    BlockTerms,
};
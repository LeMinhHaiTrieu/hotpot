import { styled } from 'styled-components'

const WrapFooter = styled.section`
    background-color: #282828;
    padding: 60px 0;
    overflow: hidden;
`;

const MainFooter = styled.div`
    display: flex;
`;

const ColFooter = styled.div`
    width: 25%;
    padding: 0 15px
`;

const Title = styled.div`
    text-align: left;
    a {
        text-decoration: none;
        color: #888;
        font-size: 20px;
        &:hover {
            color: #FFFFFF;
        }
    }
`;

const List = styled.ul`
    text-align: left;
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    font-size: 16px;
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

export {
    WrapFooter,
    MainFooter,
    ColFooter,
    Title,
    List,
    ListItem,
};
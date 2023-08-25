import { styled } from 'styled-components'

const WrapFooter = styled.section`
    background-color: #282828;
    padding: 60px 0;
    overflow: hidden;
`;

const MainFooter = styled.div`
    display: flex;
    color: #FFFFFF;
    .logo img {
        width: 80px!important;
    }
    .license img {
        width: 150px;
    }
`;


export {
    WrapFooter,
    MainFooter,
};
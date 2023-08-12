import {styled} from 'styled-components';

const Banner = styled.section`
    margin-top: 123px;
    img {
        max-width: 100%;
    }
`;

const ContentMain = styled.section`
    @media (min-width: 992px) {
        margin: 100px 0;
    }
    margin: 50px 0;
    overflow: hidden;
`;

const Ul = styled.ul`
    list-style-type: none;
    padding-left: 0;
`

const Li = styled.li``;

export {
    Banner,
    ContentMain,
    Ul,
    Li
}
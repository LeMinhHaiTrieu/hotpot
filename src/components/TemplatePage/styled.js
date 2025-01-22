import { styled } from "styled-components";

const ContentMain = styled.section`
    @media (min-width: 992px) {
        margin: 100px 0;
    }
    overflow: hidden;
`;

const Banner = styled.section`
    margin-top: 104px;
    img {
        max-width: 100%;
    }
`;

export { ContentMain, Banner }
import { styled } from "styled-components";
import CircleTitle from '../../asset/images/circle-title.png'

const Title = styled.h3`
    font-size: 28px;
    color: #666;
    position: relative;
    &:before {
        content: '';
        background: url(${CircleTitle}) no-repeat 0 0;
        width: 50px;
        height: 56px;
        position: absolute;
        z-index: 10;
        left: -20px;
        top: -11px;
    }
    @media (max-width: 575px) {
        padding-left: 20px;
        &:before {
            left: 0px;
        }
    }
`;

export { Title }
import {styled, keyframes} from 'styled-components'

const BrandSection = styled.section`
    height: 100vh;
    position: relative;
    overflow: hidden;
    img {
        max-width: 100%;
    }
`;

const ScaleCirlce = keyframes`
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    15% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        opacity: .8;
    }
    30% {
        -webkit-transform: scale(.9);
        transform: scale(.9);
        opacity: .9;
    }
    65% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(2);
        transform: scale(2);
        opacity: 0;
    }
`;


const CircleContent = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: ${ScaleCirlce} 2s linear 0s;
`;

const CircleLine = styled.span`
    position: absolute;
    border-radius: 100%;
    border: 1px solid #e60012;
    top: 50%;
    background: none;
    z-index: 10;
    &.sp1 {
        padding-top: 36%;
        margin-top: -18%;
        width: 36%;
        left: 32%;
    }
    &.sp2 {
        width: 46%;
        padding-top: 46%;
        margin-top: -23%;
        left: 27%;
    }
    &.sp3 {
        width: 56%;
        padding-top: 56%;
        margin-top: -28%;
        left: 22%;
    }
`;

const BoxMainContent = styled.div`
    text-align: center;
    width: 76%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: relative;
    z-index: 20;
`;

const ItemBrand = styled.div`
    padding: 20px;
    width: 33.3333%;
`

export {
    BrandSection,
    CircleContent,
    CircleLine,
    BoxMainContent,
    ItemBrand
};
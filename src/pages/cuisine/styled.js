import { styled } from "styled-components";
import DishAnimation from '../../asset/images/dish-animation.png'
import { MainColor1 } from "../../constant";

const WrapCuisine = styled.div`
    margin-top: 123px;
`;

const WrapItemCuisine = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const ItemCuisineMain = styled.div`
    position: relative;
    overflow: hidden;
    img.img-cuisine {
        width: 100%;
        transition: transform 0.5s;
    }
    &:hover {
        .block-description {
            height: 75%;
            bottom: 0;
        }
        img.img-cuisine {
            transform: translateY(-30%);
        }
        .title-absolute {
            transform: translateY(-100px);
        }
    }
    @media (max-width: 991px) {
        pointer-events: none;
    }
`

const TitleAbsolute = styled.div`
    position: absolute;
    left: 30px;
    top: 30px;
    z-index: 19;
    transition: transform 0.5s;
    h3 {
        color: #FFFFFF;
        font-size: 24px;
    }
    @media (max-width: 575px) {
        left: 5px;
        h3 {
            font-size: 20px;
        }
    }
`;

const Note = styled.p`
    font-size: 22px;
`;

const BlockDescription = styled.div`
    position: absolute;
    bottom: -50px;
    width: 100%;
    height: 0;
    background: url(${DishAnimation}) no-repeat 100% 100%;
    background-size: 100%;
    transition: height 0.5s, bottom 0.5s;
`;

const Title = styled.h5`
    color: #FFFFFF;
`;

const Description = styled.p`
    color: #FFFFFF;
`;

const BtnMore = styled.div`
    width: 100px;
    color: ${MainColor1};
    text-align: center;
    padding: 0px 20px;
    background: #FFFFFF;
    border-radius: 20px;
    position: absolute;
    bottom: 20px;
    @media (min-width: 991px) {
        display: none;
    }
`;

const BlockDescriptionFull = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: url(${DishAnimation}) no-repeat 100% 100%;
    background-size: 100%;
    z-index: 999;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: #FFFFFF;
        width: 100%;
    }
`;

const BtnClose = styled.div`
    width: 100px;
    color: ${MainColor1};
    text-align: center;
    padding: 0px 20px;
    background: #FFFFFF;
    border-radius: 20px;
    margin-top: auto;
    @media (min-width: 991px) {
        display: none;
    }
`;


export {
    WrapCuisine,
    WrapItemCuisine,
    TitleAbsolute,
    Note,
    BlockDescription,
    Title,
    Description,
    BtnMore,
    BlockDescriptionFull,
    ItemCuisineMain,
    BtnClose
}
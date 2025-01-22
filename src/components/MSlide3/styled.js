import {styled} from 'styled-components'

const BrandSection = styled.section`
    img {
        max-width: 85%;
    }
`;

const BoxMainContent = styled.div`
    text-align: center;
    width: 80%;
    margin: auto;
`;

const ItemBrand = styled.div`
    padding: 20px;
    img {
        filter: grayscale(40%);
        transition: 0.3s;
        &:hover {
            filter: grayscale(0%);
            transform: scale(1.05);
        }
    }
`;

const FeatureName = styled.div`
    margin-top: 50px;
    color: rgb(136, 136, 136);
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    &:before, &:after {
        content: '';
        width: 40px;
        height: 2px;
        display: block;
        background: rgb(136, 136, 136);
        transform: translateY(15px);
    }
`;

export {
    BrandSection,
    BoxMainContent,
    ItemBrand,
    FeatureName
};
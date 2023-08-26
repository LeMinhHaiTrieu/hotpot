import { styled } from "styled-components";

const WrapperCuisineFastlink = styled.div`
    height: 100vh;
    position: fixed;
    z-index: 299;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    transition: 0.5s;
    a {
        text-decoration: none;
        color: #000;
    }
    &.hide {
        transform: translateX(-140px);
    }
`;

const ItemsCenter = styled.div`
    padding: 10px 8px;
    background: hsla(0,0%,100%,.8);
    border: 0.5px solid #e6e6e6;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 0 7px 0 rgba(0,0,0,.11);
    backdrop-filter: blur(1.56px);
    position: relative;
`;

const ItemFastLink = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
`;

const Avatar = styled.div`
    width: 40px;
    height: 40px;
    background: hsla(0,0%,100%,.68);
    box-shadow: 0 0 11px 0 rgba(0,0,0,.06);
    backdrop-filter: blur(2.4px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 25px;
    }
    &.active, &:hover {
        border: 0.8px solid #ec6f79;
    }
`;

const NameCuisine = styled.div`
    font-size: 13px;
`;

const IconShowMore = styled.div`
    cursor: pointer;
    position: absolute;
    left: 100%;
    top: calc(50% - 20px);
    img {
        width: 40px;
    }
    cursor: pointer;
    transition: 0.5s;
    &.hide {
        transform: rotate(180deg)
    }
    @media (max-width: 991px) {
        border-radius: 0 10px 10px 0;
        box-shadow: 0 0 8px 0 rgba(0,0,0,.17);
        backdrop-filter: blur(1.56px);
    }
`;

export {
    WrapperCuisineFastlink,
    ItemsCenter,
    ItemFastLink,
    Avatar,
    NameCuisine,
    IconShowMore
}
import styled from 'styled-components'

const Banner = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
`;

const ImgMenu1 = styled.div`
    position: absolute;
    z-index: 20;
    text-align: center;
    width: 85%;
    top: 3%;
    img {
        max-width: 100%;
    }
`;

const ImgMenu2 = styled.div`
    position: absolute;
    z-index: 15;
    text-align: center;
    top: 25%;
    width: 32%;
`;

const BannerText = styled.div`
    bottom: 0;
    right: 5%;
    position: absolute;
    z-index: 14;
    width: 34%;
    bottom: 10%;
    img {
        max-width: 100%;
    }
`;

const CircleMessCenter = styled.div`
    top: 25%;
    width: 25%;
    position: absolute;
    z-index: 12;
    border-radius: 50%;
    border-color: rgb(211, 162, 78);
    fill: rgb(255, 255, 255);
    background: rgb(211, 162, 78);
    stroke: rgb(211, 162, 78); 
`;

const CircleLine1 = styled.span`
    border-color: rgb(211, 162, 78);
    padding-top: 50%;
    margin-top: -25%;
    width: 50%;
    left: 25%;
    position: absolute;
    border-radius: 100%;
    border: 1px solid rgba(255,222,4,.35);
    top: 50%;
    background: none;
`;

const CircleLine2 = styled.span`
    width: 75%;
    padding-top: 75%;
    margin-top: -37.5%;
    left: 12%;
    position: absolute;
    border-radius: 100%;
    border: 1px solid rgba(255,222,4,.35);
    top: 50%;
    background: none;
`;


const CircleLine3 = styled.span`
    width: 98%;
    padding-top: 98%;
    margin-top: -49%;
    left: 1%;
    position: absolute;
    border-radius: 100%;
    border: 1px solid rgba(255,222,4,.35);
    top: 50%;
    background: none;
`;

export {
    Banner,
    ImgMenu1,
    ImgMenu2,
    BannerText,
    CircleMessCenter,
    CircleLine1,
    CircleLine2,
    CircleLine3,
};
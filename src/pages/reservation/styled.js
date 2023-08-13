import {styled} from 'styled-components';
import { MainColor1, ThemeColor } from '../../constant';

const Banner = styled.section`
    margin-top: 123px;
    img {
        max-width: 100%;
    }
`;

const ContentMain = styled.section`
    margin-top: -10%;
    max-width: 960px;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,.1);
    background-color: #fff;
    border-color: #eeeeef;
    margin: -20% auto 33px;
    z-index: 100;
    position: relative;
    .border-right {
        border-right: 1px solid #eeeeef;
    }
    .react-datepicker-wrapper {
        width: 100%;
        input {
            width: 100%;
            border-radius: 0.375rem;
            font-size: 16px;
            border: 1px solid #dee2e6;
            padding-left: 32px;
            outline: 0;
            &:focus {
                border: 1px solid ${ThemeColor};
            }
        }
        .react-datepicker__calendar-icon {
            width: 30px;
            height: 38px;
            fill: ${MainColor1};
        }
    }
    input.form-control {
        &:focus {
            outline: 0;
            box-shadow: none;
            border: 1px solid ${ThemeColor};
        }
    }
    .form-check-input {
        border-color: ${ThemeColor};
        &:checked {
            background-color: ${ThemeColor};
            border-color: ${ThemeColor};
        }
        &:focus {
            box-shadow: none;
        }
    }
`;

const BlockStarts = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 120px;
        flex-shrink: 0;
        padding-right: 20px;
    }
`;

const Address = styled.div`
    color: #000000;
    font-weight: 500;
    font-size: 22px;
`;

const BlockPerson = styled.div`
    display: flex;
    @media (max-width: 575px) {
        flex-wrap: wrap;
    }
`;

const ItemPerson = styled.div`
    border: 1px solid #bbbac0;
    border-radius: 3px;
    padding: 0;
    cursor: pointer;
    background: #FFFFFF;
    color: #000000;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-family: monospace;
    width: 14.285%;
    min-width: 50px;
    margin-top: 10px;
    transition: 0.3s;
    &:hover {
        color: #fff;
        background: #00838f;
        border-color: #00838f;
    }
    &.active {
        color: #fff;
        background: #00838f;
        border-color: #00838f;
    }
`;

export {
    Banner,
    ContentMain,
    BlockStarts,
    Address,
    BlockPerson,
    ItemPerson,
}
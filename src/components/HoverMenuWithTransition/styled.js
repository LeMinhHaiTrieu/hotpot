import styled from 'styled-components';

const styleTitle = `
    white-space: normal;
    color: rgb(136, 136, 136);
    font-size: 18px;
    line-height: 1.2;
    cursor: pointer;
    padding: 20px;
`

const Title = styled.h4`
  ${styleTitle}
  a {
    ${styleTitle}
    text-decoration: none;
  }
`;

export { Title }
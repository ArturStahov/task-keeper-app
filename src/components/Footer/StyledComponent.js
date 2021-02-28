import styled from 'styled-components';

const Footer = styled.footer`
  padding: 30px 0px;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Copyright = styled.a`
  font-size: 1.4rem;
  font-weight: 300;
  color: #000000;
`;

export { Copyright, Wrapper, Footer };

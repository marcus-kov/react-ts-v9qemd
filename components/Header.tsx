import React from 'react';
import styled from 'styled-components';

type Props = {
  logoUrl: string;
  title: string;
};

const Header: React.FC<Props> = ({ title, logoUrl }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <Logo src={logoUrl} alt="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  align-items: center;
  background: #000000;
  color: #ffffff;
  display: flex;
  height: 40px;
  justify-content: center;
`;

const Logo = styled.img`
    height: 90%;
    margin-left: 10px;
    width: auto;
`;

export default Header;

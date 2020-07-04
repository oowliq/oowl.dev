import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import logo from "./logo.svg";

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background-color: #303952;
    font-family: 'Roboto', sans-serif;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 60px;
  text-transform: uppercase;
  color: #e73818;
`;

const Description = styled.span`
  color: #fff;
  font-size: 18px;
  letter-spacing: 1px;
  margin-left: 5px;
`;

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <GlobalStyled />
      <Wrapper>
        <ContentWrapper>
          <Logo src={logo} alt="owl" />
          <InfoBox>
            <Title>oowl.dev</Title>
            <Description>Soon there will be something</Description>
          </InfoBox>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default App;

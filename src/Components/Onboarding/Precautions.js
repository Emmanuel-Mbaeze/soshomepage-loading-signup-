import React from "react";
import styled from "styled-components";
import { FaUserAlt, FaSearch } from "react-icons/fa";
const Precautions = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <TopUP>
            <Text>
              <Main>Welcome,</Main>
              <Sub>Dix Manel</Sub>
            </Text>
            <Avatar>
              <FaUserAlt fontSize="33px" color="#9999" />
            </Avatar>
          </TopUP>
          <TopBottom>
            <Input placeholder="Search for a topic" type="text" />
            {/* <Input placeholder="input password" type="password" /> */}
            <Button>
              <button>
                <FaSearch fontSize="18px" color="white" />
              </button>
            </Button>
          </TopBottom>
        </Top>
        <Centre>
          <Article>Today's Article</Article>
          <Image>
            <Picture>
              <Write>
                <Up>What Is Random Text Generator</Up>
                <Down>
                  How does it work? first we took
                  <br /> many books available on project
                </Down>
              </Write>
            </Picture>
          </Image>
        </Centre>
        <Bottom>
          <Article>More Articles</Article>
          <Content>
            <Img src="/images/safety.jpeg" />
            <Info>
              <Article>the algorithm takes care</Article>
              <Topic>
                <One>September 4,</One>
                <Two>
                  2022
                  <span></span>
                </Two>
                <Three>3 min read</Three>
              </Topic>
            </Info>
          </Content>
        </Bottom>
      </Wrapper>
      <Web>
        Not A Desktop Application,
        <br />
        Try Switching To A Mobile Device,
        <br />
        To Access This Application
      </Web>
    </Container>
  );
};

export default Precautions;
// const Container  = styled.div``
const Input = styled.input`
  :focus {
    outline: 1px solid silver;
  }
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); */

  flex: 1;
  background-color: transparent;
  border: 1.5px solid #1111;
  outline: none;
  font-size: 18px;
  color: silver;
  border-radius: 4px;
`;

const Web = styled.div`
  display: none;
  @media screen and (min-width: 900px) {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    color: red;
  }
`;
const One = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  font-size: 12px;
  font-weight: 400;
`;
const Two = styled.div`
  width: 23%;
  height: 100%;
  display: flex;
  font-size: 12px;
  font-weight: 400;
  justify-content: space-between;

  span {
    margin-top: 6px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: grey;
  }
`;
const Three = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  font-size: 12px;
  font-weight: 400;
`;
const Topic = styled.div`
  width: 77%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: grey;
`;
const Img = styled.img`
  width: 70px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
`;
const Info = styled.div`
  width: 73%;
  height: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Content = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bottom = styled.div`
  width: 100%;
  min-height: 105px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Down = styled.div`
  font-size: 13px;
  font-weight: 400;
`;
const Up = styled.div`
  margin-bottom: 7px;
  font-size: 14px;
  font-weight: 500;
`;
const Write = styled.div`
  margin-bottom: 15px;
  color: white;
  padding-left: 10px;
`;
const Picture = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 6px;
  backdrop-filter: blur(4px);
`;
const Article = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Image = styled.div`
  background-image: url("/images/safety.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 190px;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    height: 270px;
  }
`;
const Centre = styled.div`
  @media screen and (min-width: 768px) {
    height: 320px;
  }
  width: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Button = styled.div`
  button {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: blue;
    border: none;
    outline: none;
  }
  width: 60px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Search = styled.input`
  flex: 1;
  height: 50px;
  width: 60%;

  background-color: transparent;
  border: 1.5px solid #1111;
  outline: none;
  font-size: 15px;
  color: #1111;
  border-radius: 4px;
`;
const TopBottom = styled.div`
  width: 100%;
  height: 50px;
  /* background-color: red; */
  display: flex;
`;
const Sub = styled.div`
  font-weight: 500;
`;
const Main = styled.div``;
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid #1111;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  max-width: 70%;
  width: 50%;
  height: 70px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const TopUP = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 85%;
  min-height: 90vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

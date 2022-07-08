import React from "react";
import styled from "styled-components";
const onboarding1 = () => {
  return (
    <Container>
      <Wrapper>
        <Up>
          <img src="/images/draw2.jpg" />
        </Up>
        <Down>
          <Title>
            Follow these three steps to finish setting up your account
          </Title>
          <Text>
            Abuse is a social evil that has destroyed lots of nations, and is on
            the rise.With these 3 steps you can curb the rate of abuse around
            you
          </Text>
          <Sub>
            {" "}
            never to be silent whenever and wherever human beings endure
            suffering and humiliation. We must take sides. Neutrality helps the
            oppressor, never the victim. Silence encourages the tormentor,
            {/* <br /> */}
            never the tormented.
          </Sub>
          <Button>Continue</Button>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default onboarding1;
// const Container = styled.div``
const Button = styled.button`
  background: transparent;
  color: lightblue;
  border-radius: 5px;
  width: 145px;
  height: 45px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  transition: 350ms;
  outline: none;
  border: 2px solid lightblue;
  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  @media screen and (max-width: 425px) {
    transform: scale(0.9);
  }
`;
const Sub = styled.div`
  width: 95%;
  color: #161616;
  /* background-color: red; */
  font-weight: 400;
  font-size: 14px;
`;
const Text = styled.div`
  width: 95%;
  color: #161616;
  /* background-color: blue; */
  font-weight: 400;
  font-size: 14px;
`;
const Title = styled.div`
  width: 95%;
  /* background-color: red; */
  font-weight: 500;
  font-size: 20px;
`;
const Down = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  width: 100%;
  min-height: 50vh;
  /* background-color: cyan; */
`;
const Up = styled.div`
  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
    z-index: 10;
    margin-top: 25px;
    margin-left: 70px;
    /* @media screen and (max-width: 320px) {
      width: 80%;
      height: 80%;
    } */
  }
  height: 65vh;
  width: 100%;
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  ::before {
    content: " ";
    position: absolute;
    width: 100%;
    /* background-image: url("data:image/svg+xml,	%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23123456' fill-opacity='1' d='M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,165.3C672,171,768,117,864,96C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E"); */
    background-color: lightblue;
    background-size: 100%;
    height: 64vh;
    border-bottom-left-radius: 280px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 120px;
    border-top-right-radius: 10px;
    background-repeat: no-repeat;
    display: flex;
  }
`;
const Wrapper = styled.div`
  width: 97%;
  min-height: 95vh;
  border-radius: 17px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React from 'react'
import styled from "styled-components";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


import DoraemonImg from "../assets/DoraemonImg.jpg";


function MainPage(): React.ReactElement {

    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate("/question");
    };

  return (
    <>
      <Wrapper>
        <Header>🐱예비집사 판별기🐱</Header>
        <ContentsWrapper>
          <Title>나에게 맞는 주인님은?</Title>
          <LogoImage>
            <img
              className="rounded-circle"
              src={DoraemonImg}
              width={350}
              height={350}
            />
          </LogoImage>
          <Description>
            MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기
          </Description>
          <Description>내가 집사가 돼서 고양이를 키운다면?</Description>
          <Button className="btn-danger" onClick={handleClickButton} style={{fontSize:25, marginTop: 20, marginBottom: 20}}>
            테스트 시작하기
          </Button>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const Header = styled.div`
    background: #ffa07a;
    font-size: 40pt;
    align-items: center;
    display: flex;
    justify-content: center;
    font-family: "Jalnan";
`;

const ContentsWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`;

const Title = styled.div`
    margin-top: 20px;
    font-size: 20pt;
`;

const LogoImage = styled.div`
    width: 200;
    height: 200;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 20pt;
`;
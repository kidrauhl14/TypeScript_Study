import React from 'react';

import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import Header from '../components/Header';

import DoraemonImg from '../assets/DoraemonImg.jpg';


const ResultPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = React.useState({});

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  }, [mbti]);
  console.log(resultData);
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <ContentsWrapper>
        <Title>결과 : {resultData.best}</Title>
        <ResultImage>
          <img
            src={resultData.image}
            className="rounded-circle"
            width={350}
            height={350}
            alt="고양이 로고"
          />
        </ResultImage>
        <Description>
          예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다. <br />{' '}
          {resultData.desc}
        </Description>
        <ButtonGroup>
          <Button
            style={{ fontFamily: 'Jalnan' }}
            onClick={() => navigate('/')}
          >
            테스트 다시하기
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ContentsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 20px 20px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
  font-family: 'Jalnan';
`;

const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 20pt;
  font-family: 'Jalnan';
`;

const ButtonGroup = styled.div`
  display: flex;
`;
import React from 'react';

import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import { IResult } from '../stores/Result/types';

import Header from '../components/Header';
import KakaoShareButton from '../components/KakaoShareButton';


function ResultPage(): React.ReactElement {
  const [searchParmas] = useSearchParams();
  const mbti = searchParmas.get('mbti'); // 예비집사의 MBTI
  const testResult: IResult = ResultData.find(
    (cat: IResult) => cat.best === mbti,
  ) ?? {
    id: 0,
    name: '',
    best: '',
    desc: '',
    image: '',
    mbti: '',
  }; // 잘맞는 고양이
  const friendCat = ResultData.find(
    (friend) => friend.best === testResult?.mbti,
  ); // 고양이와 잘맞는 형제묘
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header type="title" questionNo={0} />
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
        <ButtonGroup style={{ marginBottom: 30 }}>
          <Button
            className="btn-danger"
            style={{
              width: 170,
              marginTop: 20,
              marginRight: 20,
              fontFamily: 'Jalnan',
            }}
            onClick={() => navigate('/')}
          >
            테스트 다시하기
          </Button>
          <KakaoShareButton data={testResult} />
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
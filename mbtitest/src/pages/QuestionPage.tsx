import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';
import { useNavigate, createSearchParams } from 'react-router-dom';

import { QuestionData } from '../stores/Question/QuestionData';

import Header from '../components/Header';

function QuestionPage(): React.ReactElement {

  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    {id: "EI", score: 0},
    {id: "SN", score: 0},
    {id: "TF", score: 0},
    {id: "JP", score: 0},
  ]);

  const navigate = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {

  const newScore = totalScore.map(s => 
    s.id === type ? {id: s.id, score: s.score + ans} : s,
    );

    setTotalScore(newScore);

    // 마지막 문제가 아닐 경우
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    }
    //마지막 문제일 경우
    else {
      //mbti도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        '',
      );
      console.log('mbti' + mbti);
      //결과 페이지로 이동
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }

  // if(type === "EI"){
  //   // 기존 스코어에 대한 새로운 스코어 값
  //   const addScore = totalScore[0].score + ans;

  //   // 새로운 스코어를 반영한 새로운 객체
  //   const object = {id: "EI", score: addScore};

  //   // 새로운 객체를 기존에 토탈 스코어 반영
  //   totalScore.splice(0,1,object);
  // }

  //   else if(type === "SN"){
  //   // 기존 스코어에 대한 새로운 스코어 값
  //   const addScore = totalScore[0].score + ans;

  //   // 새로운 스코어를 반영한 새로운 객체
  //   const object = {id: "SN", score: addScore};

  //   //새로운 객체를 기존에 토탈 스코어 반영
  //   totalScore.splice(0,1,object);
  // }

  //   else if(type === "TF"){
  //   // 기존 스코어에 대한 새로운 스코어 값
  //   const addScore = totalScore[0].score + ans;

  //   // 새로운 스코어를 반영한 새로운 객체
  //   const object = {id: "TF", score: addScore};

  //   //새로운 객체를 기존에 토탈 스코어 반영
  //   totalScore.splice(0,1,object);
  // }

  //   else{
  //   // 기존 스코어에 대한 새로운 스코어 값
  //   const addScore = totalScore[0].score + ans;

  //   // 새로운 스코어를 반영한 새로운 객체
  //   const object = {id: "JP", score: addScore};

  //   // 새로운 객체를 기존에 토탈 스코어 반영
  //   totalScore.splice(0,1,object);
  // }
};

// React.useEffect(() => {
//   console.log("totalScore", totalScore[0].score);
// }, [totalScore[0].score]);

//코드가 중복되니까 A,B로 나누지 말고 하나의 함수(handleClickAnswer)로 만들었다.
  // const handleClickAnswerA = (no:number) => {
  //   setQuestionNo(questionNo + 1);

  //   if(no+1 === QuestionData.length){
  //     navigate('/result');
  //   }
  // }

  //   const handleClickAnswerB = () => {
  //     setQuestionNo(questionNo + 1);
  //   };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{
              marginRight: '20px',
              width: '45%',
              minHeight: '200px',
              fontSize: '15pt',
            }}
            onClick={() =>
              handleClickAnswer('1', QuestionData[questionNo].type)
            }
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            className="btn-warning"
            style={{
              marginRight: '20px',
              width: '45%',
              minHeight: '200px',
              fontSize: '15pt',
            }}
            onClick={() =>
              handleClickAnswer('0', QuestionData[questionNo].type)
            }
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default QuestionPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

// const Header = styled.div`
//   background: #ffa07a;
//   font-size: 40pt;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   font-family: 'Jalnan';
// `;

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
  font-family: 'Jalnan';
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  padding: 20px 20px 20px 20px;
  button {
    font-size: 18pt;
    font-family: 'Jalnan';
  }
`;
import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

import { QuestionData } from '../stores/Question/QuestionData';

import Header from '../components/Header';

function QuestionPage(): React.ReactElement {

  const [questionNo, setQuestionNo] = React.useState(0);

  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1);
  }

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo}/>
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{ marginRight: '20px' }}
            onClick={handleClickAnswer}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            className="btn-warning"
            style={{ marginRight: '20px' }}
            onClick={handleClickAnswer}
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
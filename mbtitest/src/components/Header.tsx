import React from 'react';
import styled from "styled-components";
import {ProgressBar} from "react-bootstrap";
import { QuestionData } from '../stores/Question/QuestionData';

interface Props{
    type: string;
    questionNo: number;
}

function Header(props:Props) {
  return (
    <div>
      {props.type == 'progress' ? (
        // <ProgressWrapper>
          <ProgressBar
            striped
            variant="info"
            now={Math.round((props.questionNo / QuestionData.length) * 100)}
            label={`${Math.round(
              (props.questionNo / QuestionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '30px' }}
          />
        // </ProgressWrapper>
      ) : (
        <div
          style={{
            backgroundColor: '#ffa07a',
            fontFamily: 'Jalnan',
            fontSize: '45pt',
            // width: '1200px',
            height: '100px',
          }}
        >
          🐱예비집사 판별기🐱
        </div>
      )}
    </div>
  );
}

export default Header;

// 위에 Header함수와 겹쳐서, Header대신 Wrapper라고 칭함
// const ProgressWrapper = styled.div`
//   background: #ffa07a;
//   font-size: 40pt;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   font-family: 'Jalnan';
//   padding: 20px 20px 20px 20px;
// `;
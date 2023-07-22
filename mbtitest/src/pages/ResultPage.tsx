import React from 'react';
import { ResultData } from '../stores/Result/ResultData';

function ResultPage(): React.ReactElement {
  return <img src = {ResultData[0].image} width={350} height={350} />;
}

export default ResultPage;
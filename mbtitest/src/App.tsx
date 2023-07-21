import React from 'react';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage";
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

  //React 네임스페이스에 속한 ReactElement 타입
function App(): React.ReactElement {

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<MainPage />} />
        <Route path ="/question" element={<QuestionPage />}/>
        <Route path ="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;

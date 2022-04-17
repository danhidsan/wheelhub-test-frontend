import React, { FC } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import { StepContextProvider, Step } from './context/StepContext';

import './App.scss';

const initialStep = { stepNumber: 1, finished: false, valid: false };
const initialSteps: Step[] = [
  { stepNumber: 1, finished: false, valid: false },
  { stepNumber: 2, finished: false, valid: true },
  { stepNumber: 3, finished: false, valid: false }
];

const App: FC = () => (
  <StepContextProvider defaultStep={initialStep} defaultSteps={initialSteps}>
    <div className="app">
      <div className="app-content">
        <Header />
        <Content />
      </div>
    </div>
  </StepContextProvider>
);

export default App;

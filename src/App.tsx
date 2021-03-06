import React, { FC } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import { StepContextProvider, Step } from './context/StepContext';

import './App.scss';

const initialStep = { stepNumber: 1, finished: false };
const initialSteps: Step[] = [
  { stepNumber: 1, finished: false },
  { stepNumber: 2, finished: false },
  { stepNumber: 3, finished: false }
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

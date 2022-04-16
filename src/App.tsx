import React, { FC } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Separator from './components/Separator';
import { StepContextProvider, Step } from './context/StepContext';

import './App.scss';

const initialStep = 1;
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
        <Separator />
        <Footer />
      </div>
    </div>
  </StepContextProvider>
);

export default App;

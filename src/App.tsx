import React, { FC } from 'react';

import { StepContextProvider, Step } from './context/StepContext';
import { LanguageContextProvider, LaguageProviderProps } from './context/LanguageContext';
import Wizard from './Wizard';


const browserLang = navigator.language.split('-')[0];
const defaultLang = ['es', 'en'].includes(browserLang)
  ? (browserLang as LaguageProviderProps['defaultLanguage'])
  : 'es';

const initialStep = { stepNumber: 1, finished: false, valid: false };
const initialSteps: Step[] = [
  { stepNumber: 1, finished: false, valid: false },
  { stepNumber: 2, finished: false, valid: true },
  { stepNumber: 3, finished: false, valid: false }
];

const App: FC = () => (
  <LanguageContextProvider defaultLanguage={defaultLang}>
    <StepContextProvider defaultStep={initialStep} defaultSteps={initialSteps}>
      <Wizard />
    </StepContextProvider>
  </LanguageContextProvider>
);

export default App;
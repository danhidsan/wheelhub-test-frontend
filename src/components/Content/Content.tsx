import React from 'react';

import Separator from '../Separator';
import Footer from '../Footer';
import { useSteps } from 'src/context/StepContext'; 

import './Content.styles.scss';

const Content = () => {
  const { nextStep, back } = useSteps();
  return (
    <div className="content">
      <div className="main">Content</div>
      <Separator />
      <Footer onClickNext={nextStep} onClickBack={back} />
    </div>
  );
};

export default Content;
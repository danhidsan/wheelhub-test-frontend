import React from 'react';

import successImg from 'src/assets/img/success.png';
import Footer from 'src/components/Footer';
import { useSteps } from 'src/context/StepContext';

import './Success.styles.scss';

const Success = () => {
  const { currentStep, back, reset } = useSteps();
  return (
    <div className="success-container">
      <div className="success-content">
        <img src={successImg} className="success-img" />
        <div>
          <p className="success-title">¡La cuenta se creó correctamente!</p>
          <p className="success-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien mauris.
          Pellentesque eu justo eu augue dictum efficitur. Maecenas malesuada condimentum 
          euismod. Integer lacus est, scelerisque vitae enim at, imperdiet blandit arcu. 
          Donec ac gravida libero, vel fermentum sapien.</p>
        </div>
      </div>
      <Footer
        onClickSecondButton={reset}
        onClickFirstButton={back}
        isStepValid={currentStep.valid || currentStep.stepNumber === 3}
        isLastStep
      />
    </div>
  );
};

export default Success;
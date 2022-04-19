import React, { useCallback } from 'react';

import greenLogo from 'src/assets/img/Logotipo-Vertical-Verde-Alta.png';
import Checkbox from 'src/components/Checkbox';
import Footer from 'src/components/Footer';
import { useSteps } from 'src/context/StepContext';

import './Instructions.styles.scss';

const Instructions = () => {
  const {currentStep, validate, nextStep, back} = useSteps();
  
  const handleOnClickCheckbox = useCallback(
    () => {
      validate(!currentStep.valid);
    }, 
    [currentStep.valid, validate]
  );

  const handleClickSecondButton = useCallback(() => {
    nextStep();
  }, [nextStep]);

  const handleClickFirstButton = useCallback(() => {
    back();
  }, [back]);
  
  return (
    <div className="instructions">
      <div className="img-container">
        <img src={greenLogo} />
      </div>
      <div>
        <p className="instructions-title">¿Qué deberá realizar?</p>
        <p className="text">
          En la primera pestaña, deberá confirmar que es mayor de edad y que acepta el tratamiento 
          de sus datos según la política de datos vigentes
        </p>
        <p className="text">
          En la segunda pestaña, deberá crear un usuario, una contraseña y una pista 
          para recordar la contraseña (como dato opcional).
        </p>
        <p className="text">
          En tercer lugar, deberá visualizarse el mensaje de éxito de creación.
        </p>
      </div>
      <Checkbox 
        label={'Confirma que es mayor de edad, y acepta el tratamiento de sus datos según la política de protección de datos vigente'} 
        onClick={handleOnClickCheckbox}
        checked={currentStep.valid}
      />
      <Footer 
        onClickSecondButton={handleClickSecondButton} 
        onClickFirstButton={handleClickFirstButton}
        isFirstStep
        isStepValid={currentStep.valid || currentStep.stepNumber === 3} 
      />
    </div>
  );
};

export default Instructions;
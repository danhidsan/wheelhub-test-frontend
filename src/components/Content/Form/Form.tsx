import React, { useCallback, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Footer from 'src/components/Footer';
import TextInput from 'src/components/TextInput';
import { useSteps } from 'src/context/StepContext';

import { FormInput } from './Form.types';
import './Form.styles.scss';

const strongRegex = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const mediumRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))^/;
const regexError = `
  La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número, un caracter especial
`;

const validationSchema = object({
  user: string().required(),
  password: string()
    .required('La contraseña es un campo obligatorio'),
  // .matches(regex, regexError),
  verifyPassword: string()
    .required('La confirmación de contraseña es un campo obligatorio')
    .oneOf([ref('password'), null], 'Las contraseñas deben coincidir'),
  hint: string().notRequired().min(60, 'Debe tener al menos 60 caracteres'),
});

const Form: FC = () => {
  const { currentStep, back } = useSteps();

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    resolver: yupResolver(validationSchema) 
  });

  const handleSubmitForm =  useCallback<SubmitHandler<FormInput>>((data) => console.log(data), []);

  const handleClickFirstButton = useCallback(() => {
    back();
  }, [back]);
  

  return (
    <div className="form-content">
      <TextInput {...register('user')}
        label="Crea tu usuario"
        placeholder="Introduce tu usuario"
        error={errors.user?.message}
      />
      <div className="password-form">
        <TextInput 
          {...register('password')}
          label="Crea tu contraseña"
          placeholder="Crea tu contraseña"
          className="password-input"
          strength="medium"
          error={errors.password?.message}
          isPassword
        />
        <TextInput 
          {...register('verifyPassword')}
          label="Repite tu Contraseña"
          placeholder="Repite tu contraseña" 
          className="password-input"
          error={errors.verifyPassword?.message}
          isPassword 
        />
      </div>
      <p>También puedes crear una pista que te ayude a recordar tu contraseña</p>
      <TextInput 
        {...register('hint')}
        placeholder="Introducir tu pista"
        label="Crea tu pista para recordar tu contraseña (opcional)"
        tooltipText="Puedes crear tu pista"
        className="hint-input"
        error={errors.hint?.message}
        limit={60}
      />
      <Footer
        onClickSecondButton={handleSubmit(handleSubmitForm)}
        onClickFirstButton={handleClickFirstButton}
        isStepValid={currentStep.valid || currentStep.stepNumber === 3} 
      />
    </div>
  );
};

export default Form;

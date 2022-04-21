import React, { useCallback, FC, useMemo, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Footer from 'src/components/Footer';
import TextInput from 'src/components/TextInput';
import { useSteps } from 'src/context/StepContext';
import { createUser } from 'src/data/user';

import { FormInput } from './Form.types';
import './Form.styles.scss';

const strongRegex = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const mediumRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))^/;

const validationSchema = object({
  user: string().required('El usuarios es obligatorio'),
  password: string()
    .required('La contraseña es un campo obligatorio'),
  // .matches(regex, regexError),
  verifyPassword: string()
    .required('La confirmación de contraseña es un campo obligatorio')
    .oneOf([ref('password'), null], 'Las contraseñas deben coincidir'),
  hint: string().notRequired().max(60, 'No es posible escribir mas de 6 caracteres'),
});

const Form: FC = () => {
  const { back, nextStep } = useSteps();

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormInput>({
    resolver: yupResolver(validationSchema) 
  });

  const handleSubmitForm =  useCallback<SubmitHandler<FormInput>>(async (data) => {
    const { user, password, hint } = data;
    const userToCreate = {
      user,
      password,
      hint: hint ? hint : undefined,
    };

    setIsLoading(true);
    
    const response = await createUser(userToCreate);
    
    if (response.status !== 200) return setIsLoading(false);
    
    nextStep();
    setIsLoading(false);
  }, [nextStep]);

  const handleClickFirstButton = useCallback(() => {
    back();
  }, [back]);

  const password = watch('password');

  const passwordStrenght = useMemo(() => {
    if (strongRegex.test(password)) return 'strong';
    if (mediumRegex.test(password)) return 'medium';
    if(!password) return undefined;
    return 'weak';
  }, [password]);
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
          strength={passwordStrenght}
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
        value={watch('hint')}
        limit={60}
      />
      <Footer
        onClickSecondButton={handleSubmit(handleSubmitForm)}
        onClickFirstButton={handleClickFirstButton}
        isStepValid
        isLoading={isLoading}
      />
    </div>
  );
};

export default Form;

import React, { useCallback, FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { object, string, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import TextInput from 'src/components/TextInput';

import { FormInput } from './Form.types';
import './Form.styles.scss';

const regex = /^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
  hint: string().length(60).notRequired(),
});

const Form: FC = (() => {
  const { register, handleSubmit, watch, formState } = useForm<FormInput>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema) 
  });
  const onSubmit = useCallback<SubmitHandler<FormInput>>((data) => console.log(data), []);

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput {...register('user')} label="Crea tu usuario" placeholder="Introduce tu usuario" />
        <div className="password-form">
          <TextInput 
            {...register('password')}
            label="Crea tu contraseña"
            placeholder="Crea tu contraseña"
            className="password-input"
            strength="medium"
            isPassword
          />
          <TextInput 
            {...register('verifyPassword')}
            label="Repite tu Contraseña"
            placeholder="Repite tu contraseña" 
            className="password-input"
            error="Esto es un error"
            isPassword 
          />
        </div>
        <p>También puedes crear una pista que te ayude a recordar tu contraseña</p>
        <TextInput 
          {...register('hint')}
          placeholder="Introducir tu pista"
          label="Crea tu pista para recordar tu contraseña (opcional)"
          tooltipText="Puedes crear tu pista"
          limit={60}
        />
      </form>
    </div>
  );
});

export default Form;

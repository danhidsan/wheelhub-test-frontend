import React from 'react';

import TextInput from 'src/components/TextInput';

import './Form.styles.scss';

const Form = () => {
  return (
    <div className="form-content">
      <TextInput name="user" label="Crea tu usuario" placeholder="Introduce tu usuario" />
      <div className="password-form">
        <TextInput 
          name="password"
          label="Crea tu contraseña"
          placeholder="Crea tu contraseña"
          className="password-input"
          strength="medium"
          isPassword
        />
        <TextInput 
          name="verify-password"
          label="Repite tu Contraseña"
          placeholder="Repite tu contraseña" 
          className="password-input"
          error="Esto es un error"
          isPassword 
        />
      </div>
      <p>También puedes crear una pista que te ayude a recordar tu contraseña</p>
      <TextInput 
        name="hint"
        placeholder="Introducir tu pista"
        label="Crea tu pista para recordar tu contraseña (opcional)"
        tooltipText="Puedes crear tu pista"
        limit={60}
      />
    </div>
  );
};

export default Form;

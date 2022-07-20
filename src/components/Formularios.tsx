import { useState } from 'react';
import { useForm } from '../hooks/useForm';



export const Formularios = () => {
 const { state,email,password, onInputChange } = useForm({
  email: 'test@test.com',
  password: '123456',
})

  return (
    <>
      <h3>Formularios</h3>
      <input
        type='text'
        className='form-control'
        placeholder='email'
        value={email}
        onChange={({target}) => onInputChange( target.value, 'email')}
      />
      <input
        type='text'
        className='form-control mt-2 mb-2'
        placeholder='password'
        value={password}
        onChange={({target}) => onInputChange( target.value, 'password')}
      />

      <pre>
        {JSON.stringify(state, null, 3)}
      </pre>
    </>
  );
};

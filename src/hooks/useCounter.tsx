import { useState } from 'react';

export const useCounter = (initialState: number = 10) => {
  const [valor, setValor] = useState(initialState);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return {
    valor,
    acumular,
  };
};

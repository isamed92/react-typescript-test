import { useState } from 'react';

export const useForm =<T extends Object>(initialForm: T) => {
    const [state, setState] = useState(initialForm);
    
      const onInputChange = (value: string, campo: keyof T) => {
        setState({...state, [campo]: value})
      }



      return {
        onInputChange,
        state,
        ...state
      }



}

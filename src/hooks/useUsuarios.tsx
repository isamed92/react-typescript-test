import { useState, useRef, useEffect } from 'react';
import { Usuario, UsuarioResponse } from '../interfaces/UsuarioResponse';
import { usuariosAPI } from '../api/usuariosAPI';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);


  const cargarUsuarios = async () => {
    const resp = await usuariosAPI.get<UsuarioResponse>('/users', {
      params: { 
        page: paginaRef.current 
    },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
          paginaRef.current--;
      alert('No hay mas registros');
    }
  };

  const nextPage = () => {
        paginaRef.current++
        cargarUsuarios()
  }

  const previousPage = () => {
    if(paginaRef.current > 1) {
        paginaRef.current--
        cargarUsuarios()
    }
  }
 


  return { 
    usuarios,
    nextPage,
    previousPage,
  }
};

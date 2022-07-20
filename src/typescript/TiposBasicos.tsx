export const TiposBasicos = () => {
//   let nombre: string | number = 'Fernando';
//   nombre = 1234;
  const nombre: string = 'Fernando';
  const edad: number = 35;
  const estaActivo: boolean = false;

  const poderes: string[] = [] //= ['Velocidad','Volar','Respirar en el agua']

//   poderes.push(1);
  poderes.push('1234')
//   poderes.push(true)


  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'Inactivo'}
      <br/>
      {poderes.join(', ')}
    </>
  );
};

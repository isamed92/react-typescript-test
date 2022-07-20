interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Isaias Medina',
    edad: 35,
    direccion: {
      pais: 'Argentina',
      casaNo: 615,
    },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <pre>{JSON.stringify(persona, null, 2)}</pre>
    </>
  );
};

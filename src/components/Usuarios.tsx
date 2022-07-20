import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/UsuarioResponse';

export const Usuarios = () => {
  const { usuarios, nextPage, previousPage } = useUsuarios();

  const renderItem = ({
    avatar,
    last_name,
    first_name,
    email,
    id,
  }: Usuario) => {
    // const {avatar, last_name, first_name, email, id} = usuario
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>{`${last_name}, ${first_name}`}</td>
        <td>{email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className='btn btn-primary' onClick={previousPage}>
        ANTERIORES
      </button>
      &nbsp;
      <button className='btn btn-primary' onClick={nextPage}>
        SIGUIENTES
      </button>
    </>
  );
};

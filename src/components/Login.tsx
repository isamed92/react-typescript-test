import { useEffect, useReducer } from 'react';

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  name: string;
}
const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  name: '',
};

type LoginActionPayload = {
  username: string;
  name: string;
};

type AuthAction =
  | { type: 'logout' }
  | { type: 'login'; payload: LoginActionPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        username: '',
        name: '',
      };
    case 'login':
      const { name, username } = action.payload;
      return {
        validando: false,
        token: 'kjaskldaksdj123k4123jk',
        name,
        username,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: 'login',
      payload: { name: 'Isaias', username: 'isamed92' },
    });
  };
  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>validando...</div>
      </>
    );
  }

  return (
    <>
      {token ? (
        <div className='alert alert-success'>autenticado como: {name}</div>
      ) : (
        <div className='alert alert-danger'>no autenticado</div>
      )}

      {token ? (
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      ) : (
        <button className='btn btn-primary' onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

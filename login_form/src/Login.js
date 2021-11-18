import { useState } from 'react'
import {
  GlobalStyle,
  Wrapper,
  Form,
  Input,
  Title,
  Submit,
  Anchor,
  Subtitles,
  Error,
  P,
  ShowPass
} from './Styledcomponents';
import './App.css';

function Login() {

  const pRgx = new RegExp(/^[a-z0-9]+$/i);
  const [input, setInput] = useState({
    user: "",
    password: ""
  })
  const [error, setError] = useState('');
  const [passwordVissible, setPasswordVissible] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value && !pRgx.test(value)) {
      setError('“Usuario o contraseña inválidos“')
    } else {
      setError('')
    }
    setInput({
      ...input,
      [name]: value
    })
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.user === "" || input.password === "") {
      setError('Debes ingresar usuario y contraseña')
    } else {
      alert('form submiteado!')
      setInput({
        user: "",
        password: ""
      })
    }
  };


  const togglePassword = () => {
    setPasswordVissible(!passwordVissible)
  }


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <Title>PIPE</Title>
      <Subtitles>
        <p>Usuario</p>
        <p>Contraseña</p>
      </Subtitles>
      <Form onSubmit={handleSubmit}>
        {error ? <Error>{error}</Error> : <P>|</P>}
        <Input
          name="user"
          type="text"
          value={input.user}
          onChange={handleChange}
          placeholder="Ingrese usuario"
        />
        <Input
          name="password"
          type={passwordVissible ? "text" : "password"}
          value={input.password}
          onChange={handleChange}
          placeholder={"Ingrese contraseña"}
        />
        <Anchor href="localhost:3000">Recuperar contraseña</Anchor>
        <Submit onClick={handleSubmit}>Ingresar</Submit>
      </Form>
      <ShowPass onClick={togglePassword}>{passwordVissible ? "Ocultar contraseña" : "Mostrar contraseña"}</ShowPass>
    </Wrapper>
    </>
  );
}

export default Login;

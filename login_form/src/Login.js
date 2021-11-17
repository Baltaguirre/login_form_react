import { useState, useEffect } from 'react'
import {
  Wrapper,
  Form,
  Input,
  Title,
  Button,
  Anchor,
  Subtitles,
  Error,
  P
} from './Styledcomponents';
import './App.css';

function Login() {

  const pRgx = new RegExp(/^[a-z0-9]+$/i);
  const [input, setInput] = useState({
    user: "",
    password: ""
  })
  const [error, setError] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(pRgx.test(value))
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
    if(input.user === "" || input.password === ""){
      setError('Debes ingresar usuario y contraseña')
    } else {
      alert('form submiteado!')
    setInput({
      user: "",
      password: ""
    })
    }
    
  };





  return (


    <Wrapper>
      <Title>PIPE</Title>
      <Subtitles>
        <p>Usuario</p>
        <p>Contraseña</p>
      </Subtitles>
      <Form onSubmit={handleSubmit}>
        { error ? <Error>{error}</Error> : <P>|</P> }
        <Input
          name="user"
          type="text"
          value={input.user}
          onChange={handleChange}
          placeholder="Ingrese usuario"
        />
        <Input
          name="password"
          type="password"
          value={input.password}
          onChange={handleChange}
          placeholder="Ingrese contraseña"
        />
        <Anchor href="localhost:3000">Recuperar contraseña</Anchor>
        <Button onClick={handleSubmit}>Ingresar</Button>
      </Form>
    </Wrapper>

  );
}

export default Login;

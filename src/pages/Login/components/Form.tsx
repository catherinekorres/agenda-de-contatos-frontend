import React from "react";
import Input from "../../../components/Input";
import {StyledForm, Button} from './formStyles';
import api from '../../../services/api';

function Login() {

  function handleSubmit(data: any) {
    api.post('users/login', data)
      .then(() => {
        alert('Login efetuado com sucesso.');
        localStorage.setItem('auth', 'true');
      })
      .catch(() => {
        alert('Erro ao efetuar login.')
        localStorage.setItem('auth', 'false');
      })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Senha" />

      <Button type="submit">Entrar</Button>
    </StyledForm>
  );
}

export default Login;

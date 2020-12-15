import React from "react";
import Input from "../../../components/Input";
import { StyledForm, Button } from "./formStyles";
import api from "../../../services/api";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const handleSubmit = (data: any): void => {
    api
      .post("users/login", data)
      .then((response) => {
        alert("Login efetuado com sucesso.");
        localStorage.setItem("auth", "true");
        localStorage.setItem("userId", response.data);
        history.push("/agenda");
      })
      .catch(() => {
        alert("Erro ao efetuar login.");
        localStorage.setItem("auth", "false");
        localStorage.removeItem("userId");
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="E-mail" />
      <Input name="password" type="password" placeholder="Senha" />

      <Button type="submit">Entrar</Button>
    </StyledForm>
  );
}

export default Login;

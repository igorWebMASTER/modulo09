import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="gobarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Senha secreta" />

        <button type="submit">Criar Conta </button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}

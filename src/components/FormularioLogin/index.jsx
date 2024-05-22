import './styles.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export function FormularioLogin() {
  const schema = yup.object({
    email: yup
      .string()
      .email('Email inválido')
      .required('O campo Email é obrigatório'),
    password: yup.string().min(4, 'O campo Senha é obrigatório').required(),
  });

  const [mensagemErro, setMensagemErro] = useState(' ');

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const submit = (data) => {
    console.log(data);
    return;
  };

  if (mensagemErro.toLowerCase().includes('autenticado')) {
    return;
  }

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit(submit)} noValidate>
        <label htmlFor="email" placeholder="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          data-cy="login-email"
          {...register('email')}
        />
        <p className="erro" data-cy="login-email-erro">
          {errors.email ? errors.email.message : ''}
        </p>

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          data-cy="login-senha"
          {...register('password')}
        />
        <p className="erro" data-cy="login-senha-erro">
          {errors.password ? errors.password.message : ''}
        </p>

        <button className="btn" data-cy="login-botao">
          Entrar
        </button>
      </form>

      <p className="server-response">{mensagemErro}</p>
    </>
  );
}

export default FormularioLogin;

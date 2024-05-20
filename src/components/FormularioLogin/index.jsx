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
    password: yup.string().min(2, 'Campo Senha Obrigatório').required(),
  });

  const [mensagemErro, setMensagemErro] = useState(' ');

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const submit = () => {
    return;
  };

  if (mensagemErro.toLowerCase().includes('autenticado')) {
    return;
  }

  return (
    <>
      <form className="form-login" onSubmit={handleSubmit(submit)} noValidate>
        <label htmlFor="email" placeholder="email">
          Email
        </label>
        <input type="text" id="email" {...register('email')} />
        <p className="erro">{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register('password')} />
        <p className="erro">{errors.password?.message}</p>

        <button>Entrar</button>
      </form>

      <p className="server-response">{mensagemErro}</p>
    </>
  );
}

export default FormularioLogin;

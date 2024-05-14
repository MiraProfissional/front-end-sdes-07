import './styles.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export function FormularioContato() {
  const schema = yup.object({
    nome: yup.string().required('o campo Nome é obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O campo Email é obrigatório'),
    assunto: yup.string().required('O campo Assunto é obrigatório'),
    mensagem: yup.string().required('O campo Mensagem é obrigatório'),
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
        <label htmlFor="nome" placeholder="nome">
          Nome
        </label>
        <input type="text" id="nome" {...register('nome')} />
        <p className="erro">{errors.nome?.message}</p>

        <label htmlFor="email" placeholder="email">
          Email
        </label>
        <input type="text" id="email" {...register('email')} />
        <p className="erro">{errors.email?.message}</p>

        <label htmlFor="assunto" placeholder="assunto">
          Assunto
        </label>
        <input type="text" id="assunto" {...register('assunto')} />
        <p className="erro">{errors.assunto?.message}</p>

        <label htmlFor="mensagem" placeholder="mensagem">
          Mensagem
        </label>
        <input type="textarea" id="mensagem" {...register('mensagem')} />
        <p className="erro">{errors.mensagem?.message}</p>

        <button>Entrar</button>
      </form>
      <p className="server-response">{mensagemErro}</p>
    </>
  );
}

export default FormularioContato;

import './styles.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export function FormularioContato() {
  const schema = yup.object({
    nome: yup.string().required('O campo Nome é obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O campo Email é obrigatório'),
    telefone: yup
      .string()
      .matches(
        /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/,
        'Formato de telefone inválido. Ex: (XX) 9XXXX-XXXX',
      ),
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
      <form className="form-contato" onSubmit={handleSubmit(submit)} noValidate>
        <label htmlFor="nome" placeholder="nome">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          data-cy="contato-input-nome"
          placeholder="Digite seu nome..."
          {...register('nome')}
        />
        <p className="erro" data-cy="contato-input-nome-erro">
          {errors.nome?.message}
        </p>

        <label htmlFor="email" placeholder="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          data-cy="contato-input-email"
          placeholder="Digite seu email..."
          {...register('email')}
        />
        <p className="erro" data-cy="contato-input-email-erro">
          {errors.email?.message}
        </p>

        <label htmlFor="telefone" placeholder="telefone">
          Telefone:
        </label>
        <input
          type="text"
          id="telefone"
          placeholder="Digite seu telefone: (XX) 9XXXX-XXXX"
          data-cy="contato-input-telefone"
          {...register('telefone')}
        />
        <p className="erro" data-cy="contato-input-telefone-erro">
          {errors.telefone?.message}
        </p>

        <label htmlFor="assunto" placeholder="assunto">
          Assunto:
        </label>
        <input
          type="text"
          id="assunto"
          data-cy="contato-input-assunto"
          placeholder="Digite o assunto que se deseja abordar..."
          {...register('assunto')}
        />
        <p className="erro" data-cy="contato-input-assunto-erro">
          {errors.assunto?.message}
        </p>

        <label htmlFor="mensagem" placeholder="mensagem">
          Mensagem:
        </label>
        <textarea
          id="mensagem"
          data-cy="contato-input-mensagem"
          placeholder="Digite sua mensagem..."
          {...register('mensagem')}
        />
        <p className="erro" data-cy="contato-input-mensagem-erro">
          {errors.mensagem?.message}
        </p>

        <button className="btn" data-cy="contato-botao">
          Enviar
        </button>
      </form>
      <p className="server-response">{mensagemErro}</p>
    </>
  );
}

export default FormularioContato;

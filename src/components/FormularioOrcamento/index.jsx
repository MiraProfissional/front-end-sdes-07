import './styles.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export function FormularioOrcamento() {
  const schema = yup.object({
    codigoPeca: yup.string().required('O campo Código da Peça é obrigatório'),
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
    observacao: yup.string(),
  });

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const submit = () => {
    return;
  };

  return (
    <div className="container-form-orcamento">
      <form
        className="form-orcamento"
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <label htmlFor="codigoPeca" placeholder="Código da peça">
          Código da peça:
        </label>
        <input
          type="text"
          id="codigoPeca"
          placeholder="Digite o código da peça..."
          {...register('codigoPeca')}
        />
        <p className="erro">{errors.codigoPeca?.message}</p>
        <label htmlFor="nome" placeholder="nome">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome..."
          {...register('nome')}
        />
        <p className="erro">{errors.nome?.message}</p>

        <label htmlFor="email" placeholder="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu email..."
          {...register('email')}
        />
        <p className="erro">{errors.email?.message}</p>

        <label htmlFor="telefone" placeholder="telefone">
          Telefone:
        </label>
        <input
          type="text"
          id="telefone"
          placeholder="Digite seu telefone: (XX) 9XXXX-XXXX"
          {...register('telefone')}
        />
        <p className="erro">{errors.telefone?.message}</p>

        <label htmlFor="observacao" placeholder="observacao">
          Observação:
        </label>
        <textarea
          id="observacao"
          placeholder="Digite sua observação..."
          {...register('observacao')}
        />
        <p className="erro">{errors.observacao?.message}</p>

        <button className="btn">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioOrcamento;

import './styles.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export function FormularioOrcamento() {
  const schema = yup.object({
    codigoPeca: yup.number().required('o campo Codigo da Peça é obrigatório'),
    nome: yup.string().required('o campo Nome é obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O campo Email é obrigatório'),
    telefone: yup
      .string()
      .matches(/^\d*$/, 'Telefone deve conter apenas números')
      .transform((value) => (value ? Number(value) : null))
      .nullable(),
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
    <>
      <form
        className="form-orcamento"
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <label htmlFor="codigoPeca" placeholder="Código da peça">
          Código da peça
        </label>
        <input type="text" id="codigoPeca" {...register('codigoPeca')} />
        <p className="erro">{errors.codigoPeca?.message}</p>
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

        <label htmlFor="telefone" placeholder="telefone">
          Telefone
        </label>
        <input type="text" id="telefone" {...register('telefone')} />
        <p className="erro">{errors.telefone?.message}</p>

        <label htmlFor="observacao" placeholder="observacao">
          Observação
        </label>
        <input type="textarea" id="observacao" {...register('observacao')} />
        <p className="erro">{errors.observacao?.message}</p>

        <button>Enviar</button>
      </form>
    </>
  );
}

export default FormularioOrcamento;

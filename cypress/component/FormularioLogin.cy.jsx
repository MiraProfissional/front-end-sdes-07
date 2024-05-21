import React from 'react';
import FormularioLogin from '../../src/components/FormularioLogin';

describe('FormularioLogin.cy.jsx', () => {
  beforeEach(() => {
    /* eslint-disable */
    cy.mount(<FormularioLogin />);
   })

  it('should render the component', () => {
    cy.get('[data-cy=login-email]').should('have.text','')
    cy.get('[data-cy=login-senha]').should('have.text','')
    cy.get('[data-cy=login-botao]').should('have.text','Entrar')
  });


  it('should check if the inputs are doing the correct validations', () => {
    cy.get('[data-cy=login-email]').type('joao.email@gmail.com')
    cy.get('[data-cy=login-email-erro]').should('have.text','')
    cy.get('[data-cy=login-senha]').type('senha123')
    cy.get('[data-cy=login-senha-erro]').should('have.text','')
  })

  it('should display "Email inválido" message for invalid email', () => {
    cy.get('[data-cy=login-email]').type('joao.email');
    cy.get('[data-cy=login-botao]').click();
    cy.get('[data-cy=login-email-erro]').contains('Email inválido');
  });

  it('should display "O campo Email é obrigatório" message for empty email', () => {
    cy.get('[data-cy=login-email]').clear();
    cy.get('[data-cy=login-botao]').click();
    cy.get('[data-cy=login-email-erro]').contains('O campo Email é obrigatório');

});

  it('should display "O campo Senha é obrigatório (mínimo 4 caracteres)" message for empty field', () => {
    cy.get('[data-cy=login-botao]').click();
    cy.get('[data-cy=login-senha-erro]').contains('O campo Senha é obrigatório (mínimo 4 caracteres)');
  });

  it('should display "O campo Senha é obrigatório (mínimo 4 caracteres)" message for passwords with less then 3 words', () => {
    cy.get('[data-cy=login-senha]').type('123')
    cy.get('[data-cy=login-botao]').click();
    cy.get('[data-cy=login-senha-erro]').contains('O campo Senha é obrigatório (mínimo 4 caracteres)');
  });

  it('should display errors messages for empty fields', () => {
    cy.get('[data-cy=login-botao]').click();
    cy.get('[data-cy=login-email-erro]').contains('O campo Email é obrigatório');
    cy.get('[data-cy=login-senha-erro]').contains('O campo Senha é obrigatório (mínimo 4 caracteres)');
  })

});
